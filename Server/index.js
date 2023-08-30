import express from "express";  // after npm i express, we import express and in next lines we use its functions
const app = express(); // making variable which uses all express functions
const port = 5000;

//supabase code
import { createClient } from "@supabase/supabase-js";
const supabaseurl = 'https://kgtxemrgwkupvxgadoxv.supabase.co';
const supabasekey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtndHhlbXJnd2t1cHZ4Z2Fkb3h2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM0MTY4MjcsImV4cCI6MjAwODk5MjgyN30.cd74IzmFklorD70yu9Ler9tn_G8nHkbS4-WWeeW4-QQ'
const supabase = createClient(supabaseurl, supabasekey);

app.listen(port, () => {
    console.log('server is running on ' + port);
})

app.get("/",async (req, res) => {

    const { error } = await supabase
        .from('tdl_users')
        .insert({ name: 'jatin',email:'jatin@gmail.com',password:'jatin' })
    res.send(`<h1>To Do List Server</h1>`)
})
