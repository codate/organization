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

**Create new Organization**
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
    
* **Success Response:**
    * **Code:** 200 <br />
    **Content:**
    
        ```json
        {
            "_id": "5bbe520dc1c10a24c4b71e69",
            "name": "Codate",
            "docNumber": "123456"
            "members": [],
            "createdAt": "2018-10-10T19:25:01.752Z",
            "updatedAt": "2018-10-10T19:25:01.752Z",
            "__v": 0
        }
        ```
----
