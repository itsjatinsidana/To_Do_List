import express from "express";  // after npm i express, we import express and in next lines we use its functions
const app = express(); // making variable which uses all express functions
const port = 5000;
app.use(express.json()) //Required if you want to use req.body
import cors from "cors"; //CORS is required to integrate two different domains for data transfer
//Required code for enabling code in Node JS
app.use(cors());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

//supabase code
import { createClient } from "@supabase/supabase-js";
const supabaseurl = 'https://kgtxemrgwkupvxgadoxv.supabase.co';
const supabasekey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtndHhlbXJnd2t1cHZ4Z2Fkb3h2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM0MTY4MjcsImV4cCI6MjAwODk5MjgyN30.cd74IzmFklorD70yu9Ler9tn_G8nHkbS4-WWeeW4-QQ'
const supabase = createClient(supabaseurl, supabasekey);

app.listen(port, () => {
    console.log('server is running on ' + port);
})

app.post("/signup", async (req, res) => {
    //Destructuring Form Data sent from Frontend (Make sure key names are the same in frontend as they are here, e.g. "username"
    let { username, email, password } = req.body
    email = email.toLowerCase();
    const { data } = await supabase
        .from('tdl_users')
        .select()
        .eq('email', email)
    if (data.length !== 0) {
        res.send('duplicate');
    }
    else {
        //Supabase insertion code
        const { error } = await supabase
            .from('tdl_users')
            .insert({ name: username, email: email, password: password })

        //If error exists, send status code 400
        if (error) {
            res.send('fail');
        }

        //else send status code 200
        else {
            res.send('success');
        }
    }
});

app.post('/makenotes', async (req, res) => {
    let { heading, paragraph } = req.body;
    const { data } = await supabase
        .from('tdl_notes')
        .select()
        .eq('heading', heading)
        const{error} = await supabase
        .from('tdl_notes')
        .insert({heading:heading, paragraph:paragraph})
        if(error){
            res.send('error')
        }
        else{
            res.send('success')
        }
});

app.post('/login', async (req, res) => {
    let { email, password } = req.body
    email = email.toLowerCase();
    const { data, error } = await supabase
        .from('tdl_users')
        .select()
        .eq('email', email)

    if (data.length !== 0) {
        if (data[0].password === password) {
            res.send('success')
        }
        else {
            res.send('password not matched')
        }
    }
    else {
        res.send('account does not exist');
    }
});
app.post('/getuserdata', async (req, res) => {
    let { email } = req.body
    console.log(email)
    email = email.toLowerCase();
    const { data, error } = await supabase
        .from('tdl_users')
        .select()
        .eq('email', email)
    if (data.length !== 0) {
        res.send(data[0])
    }
    else {
        res.send('error')
    }

})

