// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
use std::net::TcpListener;
use std::thread::{spawn};
use tauri::Manager;
use tungstenite::accept;

fn main() {
  let server = TcpListener::bind("192.168.1.90:8080").unwrap();
  

  tauri::Builder::default()
    .setup(|app| {
      let handle = app.get_window("main").unwrap();
      spawn(move || {
        for stream in server.incoming() {

            let mut websocket = accept(stream.unwrap()).unwrap();
            loop {
              let msg = websocket.read_message().unwrap();
              if msg.is_text() || msg.is_binary() {
                handle.emit("controller_movement", msg.to_string());
              }
            }
;
        }
      });

      Ok(())

    })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");


}
