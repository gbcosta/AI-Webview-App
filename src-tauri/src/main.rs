#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
use tauri::menu::MenuBuilder;

fn main() {
    tauri::Builder::default()
        .plugin(tauri_plugin_process::init())
        .setup(|app| {
            let menu = MenuBuilder::new(app).text("home", "Home").build()?;
            app.set_menu(menu)?;
            app.on_menu_event(move |app_handle: &tauri::AppHandle, event| {
                println!("menu event: {:?}", event.id());

                match event.id().0.as_str() {
                    "home" => {
                        println!("home event");
                        app_handle.restart();
                    }
                    _ => {
                        println!("unexpected menu event");
                    }
                }
            });

            Ok(())
        })
        .run(tauri::generate_context!())
        .unwrap();
}
