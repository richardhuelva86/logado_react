package main

import (
    "net/http"
    "log"
	"github.com/gorilla/mux"
	"github.com/gorilla/sessions"
	"encoding/json"
	"fmt"
)

var store = sessions.NewFilesystemStore("./sessions", []byte("secret"))

type Credenciales struct{
	User string `json:"user"`
	Auth bool `json:"auth"`
}

func YourHandler(w http.ResponseWriter, r *http.Request) {
    w.Write([]byte("Gorilla!\n"))
}


func sendJson( w http.ResponseWriter, code int, res map[string]interface{}) error {
	w.WriteHeader(code)
	w.Header().Set("Content-Type", "application/json")

	jData, err := json.Marshal(res)
	if err != nil {
		return err
	}
	
	w.Write([]byte(jData))
	return nil
}


func LoginHandler(w http.ResponseWriter, r *http.Request){
    r.ParseForm()
	user := r.FormValue("user")
	password := r.FormValue("password")
	fmt.Println("username:", user)
	

	if user == "richard" && password == "1234" {

		session, err := store.Get(r, "session-name")
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		// Set some session values.
		session.Values["user"] = user
		session.Values["authenticated"] = true
		session.Values["authorized"] = false
		// Save it before we write to the response/return from the handler.
		session.Save(r, w)

		_ = sendJson(w, http.StatusOK, map[string]interface{}{"user": user, "auth": true})
		return
	} 
	_ = sendJson(w, http.StatusUnauthorized, map[string]interface{}{"msg": "No autorizado", "auth": false})
	return
}

func main() {
    r := mux.NewRouter()
    // Routes consist of a path and a handler function.
    r.HandleFunc("/", YourHandler)
    r.HandleFunc("/login", LoginHandler)

    // Bind to a port and pass our router in
    log.Fatal(http.ListenAndServe(":8000", r))
}