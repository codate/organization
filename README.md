# @codate/organization

This micro service is responsible for keeping the data of people and organizations. It is understood organizations such as companies, entities or groups of people that have some link.

## Requirement

To run this micro service you must have a mongodb database previously installed and configured


## How to start

```bash
PORT=8084
DB_URL=mongodb://localhost/organization
GOOGLE_API_KEY=AIzaSyDbG-S5qctvRfRgMKfbW0noYAK8GgybRSg
npm run start 

```

## How to use

**Create new Person**<br />
    Create new person.

* **URL**
    POST /people

* **Data Params**
    
    ```json
    {
        "name":"Fulano Silva",
        "docNumber":"1010101",
        "phoneNumber":"99999999",
        "email":"fulano.silva@domain.com",
        "address":{
            "street":"xpto",
            "number":"40",
            "zip":"79400000",
            "city":"Coxim",
            "district":"Centro",
            "state":"Mato Grosso do Sul"
        }
    }
    ``` 
    
* **Success Response**
    * **Code:** 200 <br />
    **Content:**
    
        ```json
        {
            "address": {
                "street": "xpto",
                "number": "40",
                "zip": "79400000",
                "city": "Coxim",
                "district": "Centro",
                "state": "Mato Grosso do Sul"
            },
            "_id": "5bbe54dec1c10a24c4b71e6a",
            "name": "Fulano Silva",
            "docNumber": "1010101",
            "phoneNumber": "99999999",
            "email": "fulano.silva@domain.com",
            "createdAt": "2018-10-10T19:37:02.804Z",
            "updatedAt": "2018-10-10T19:37:02.804Z",
            "__v": 0
        }
        ```
----

**Create new Organization**<br />
    Create new organization to agroup work members.

* **URL**
    POST /organizations

* **Data Params**
    
    ```json
    {
        "name": "Codate",
        "docNumber": "123456"
    }
    ``` 
    
* **Success Response**
    * **Code:** 200 <br />
    **Content:**
    
        ```json
        {
            "_id": "5bbe520dc1c10a24c4b71e69",
            "name": "Codate",
            "docNumber": "123456",
            "members": [],
            "createdAt": "2018-10-10T19:25:01.752Z",
            "updatedAt": "2018-10-10T19:25:01.752Z",
            "__v": 0
        }
        ```
----

**Register Members on Organization**<br />
    Register people as members on a organization.

* **URL**
    POST /organizations/**:id**/members
    
* **Path Params**     
    Replace **:id** by organization id that wants register new members.
    
    **Ex.:** /organizations/**5bbe520dc1c10a24c4b71e69**/members

* **Data Params**
    
    ```json
    [
        {
            "person": {
                "_id": "5bbe54dec1c10a24c4b71e6a"
            },
            "roles": ["Administrator", "Tester"]
        }
    ]
    ``` 
    
* **Success Response:**
    * **Code:** 200 <br />
    **Content:**
    
        ```json
        {
            "n": 1,
            "nModified": 1,
            "ok": 1
        }
        ```
----
