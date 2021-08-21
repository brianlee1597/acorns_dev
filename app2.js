#!/usr/bin/env node
import express from "express"
import request from "request";
import httpBuildQuery from "http-build-query";


const app = express()

//You should get response 200, meaning the request successful, from the kakaopay server if you run the below command in terminal

/*
curl -v -X POST "https://kapi.kakao.com/v1/payment/ready" \
-H "Authorization: KakaoAK 3ebed518b0136a6bd50560b0e1e87bbb" \
--data-urlencode "cid=TC0ONETIME" \
--data-urlencode "partner_order_id=partner_order_id" \
--data-urlencode "partner_user_id=partner_user_id" \
--data-urlencode "item_name=초코파이" \
--data-urlencode "quantity=1" \
--data-urlencode "total_amount=2200" \
--data-urlencode "vat_amount=200" \
--data-urlencode "tax_free_amount=0" \
--data-urlencode "approval_url=https://www.google.com" \
--data-urlencode "fail_url=https://www.google.com" \
--data-urlencode "cancel_url=https://www.google.com"
*/
  
//if put 'http://localhost:3000' in your browser after runnin node app2.js, then it's going to send the http request

app.get('/', async (req, res) => {
    console.log("YASSSS")
    let _url = 'https://kapi.kakao.com/v1/payment/ready';
    let _headers = {
        "Authorization": 'KakaoAK 3ebed518b0136a6bd50560b0e1e87bbb',
        "Content-type": 'application/x-www-form-urlencoded;charset=utf-8'
    }
    let _form = httpBuildQuery({
        'cid': 'TC0ONETIME',
        'partner_order_id': 'partner_order_id',
        'partner_user_id': 'partner_user_id',
        'item_name': '초코파이',
        'quantity': '1',
        'total_amount': '2200',
        'vat_amount': '200',
        'tax_free_amount': '0',
        'approval_url': 'https://www.google.com',
        'fail_url': 'https://www.google.com',
        'cancel_url': 'https://www.google.com'
    });
    
    let _req = {
        url: _url,
        method: 'POST',
        headers: _headers,
        form: _form
    };
    request(_req, (error, response) => {
        if (error) {
            console.log(error);
        }
        else {
            var res_json = JSON.stringify(JSON.parse(response.body), null, 4); //pretty print
            console.log(res_json);
        }

        console.log("done");
        return;
    });
    
});

/* ----- DEV ----- */
const port = 3000
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })






