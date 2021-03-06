**Create New Vote**
----
  Create a new vote for an EventHawk event.

* **URL**

  /votes

* **Method:**
  
  POST

* **Headers:**

  `Content-Type: application/json`

  `Authorization: Bearer [token]`

* **Data Params**

   **Required:**
 
   `{ "vote" : { "value" : [integer], "event_id" : [string] } }`

* **Success Response:**

  * **Code:** 201 CREATED <br />
    **Content:** `{ "vote" : { "value" : [integer], "voter_id" : "[string]", "event_id" : [string], "vote_id" : [string], "is_active" : "true" } }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** ``
  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** ``
  * **Code:** 409 CONFLICT <br />
    **Content:** `{ "vote" : { "value" : [integer], "voter_id" : "[string]", "event_id" : [string], "vote_id" : [string], "is_active" : "true" } }`	
  * **Code:** 422 UNPROCESSABLE ENTRY <br />
    **Content:** `{ "error" : ["string"] }`
