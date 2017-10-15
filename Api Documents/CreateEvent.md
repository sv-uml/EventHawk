**Create New Event**
----
  Create a new EventHawk event.

* **URL**

  /events

* **Method:**
  
  POST
 
* **Data Params**

   **Required:**
 
   `{ "event" : { "name" : "[string]", "description" : "[string]", "time" : "[string]", "location" : "[string]", "total_capacity" : [integer], "category" : "[string]" } }`

* **Success Response:**

  * **Code:** 201 CREATED <br />
    **Content:** `{ "event" : { "name" : "[string]", "description" : "[string]", "time" : "[string]", "location" : "[string]", "total_capacity" : [integer], "category" : "[string]", "host_id" : "[string]", "event_id" : "[string]" } }`
 
* **Error Response:**

  * **Code:** 422 UNPROCESSABLE ENTRY <br />
    **Content:** `{ "error" : ["string"] }`