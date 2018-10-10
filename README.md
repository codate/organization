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
    Replace **:id** by organization id.
    
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
    
    It is possible to register more than one member, just separate them by comma.
    ```json
    [
        {
            "person": {
                "_id": "5bbe54dec1c10a24c4b71e6a"
            },
            "roles": ["Administrator", "Tester"]
        },
        {
            "person": {
                "_id": "5bbce640a588e463967fe2a1"
            },
            "roles": ["Owner", "Administrator"]
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

**Get Organization Members**<br />
    Get a array with all members of a organization.

* **URL**
    GET /organizations/**:id**/members
    
* **Path Params**     
    Replace **:id** by organization id.
    
    **Ex.:** /organizations/**5bbe520dc1c10a24c4b71e69**/members

* **Success Response:**
    * **Code:** 200 <br />
    **Content:**
    ```json
    [
        {
            "_id": "5bbe5d97c1c10a24c4b71e6b",
            "roles": [
                "Administrator",
                "Tester"
            ],
            "person": {
                "_id": "5bbe54dec1c10a24c4b71e6a",
                "address": {
                    "street": "xpto",
                    "number": "40",
                    "zip": "79400000",
                    "city": "Coxim",
                    "district": "Centro",
                    "state": "Mato Grosso do Sul"
                },
                "name": "Fulano Silva",
                "docNumber": "1010101",
                "phoneNumber": "99999999",
                "email": "fulano.silva@domain.com",
                "createdAt": "2018-10-10T19:37:02.804Z",
                "updatedAt": "2018-10-10T19:37:02.804Z",
                "__v": 0
            }
        },
        {
            "_id": "5bbe616fc1c10a24c4b71e6d",
            "roles": [
                "Owner",
                "Administrator"
            ],
            "person": {
                "_id": "5bbce640a588e463967fe2a1",
                "address": {
                    "street": "Ypto",
                    "number": "30",
                    "zip": "79500001",
                    "city": "Coxim",
                    "district": "Centro",
                    "state": "Mato Grosso do Sul"
                },
                "name": "Bob Beltrano",
                "docNumber": "1674782",
                "phoneNumber": "999027276",
                "email": "bob.beltrano@domain.com",
                "createdAt": "2018-10-09T17:32:48.529Z",
                "updatedAt": "2018-10-09T17:32:48.529Z",
                "__v": 0
            }
        }
    ]
   ```
----
**Get Person Organizations**<br />
    Get a array with all organizations that a specific person is member.

* **URL**
    GET /people/**:id**/organization
    
* **Path Params**     
    Replace **:id** by id of a person
    
    **Ex.:** /people/**5bbe54dec1c10a24c4b71e6a**/organizations

* **Success Response:**
    * **Code:** 200 <br />
    **Content:**
    ```json
    [
   
        {
            "_id": "5bbe520dc1c10a24c4b71e69",
            "name": "Codate",
            "docNumber": "123456",
            "members": [
                {
                    "roles": [
                        "Administrator",
                        "Tester"
                    ],
                    "_id": "5bbe5d97c1c10a24c4b71e6b",
                    "person": "5bbe54dec1c10a24c4b71e6a"
                },
                {
                    "roles": [
                        "Owner",
                        "Administrator"
                    ],
                    "_id": "5bbe616fc1c10a24c4b71e6d",
                    "person": "5bbce640a588e463967fe2a1"
                }
            ],
            "createdAt": "2018-10-10T19:25:01.752Z",
            "updatedAt": "2018-10-10T19:25:01.752Z",
            "__v": 0
        }
    ]
    ```
----
