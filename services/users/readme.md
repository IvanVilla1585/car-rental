# Users 

## Usage
```bash
$ npm run start
```

## Default Endpoints

```js
/*
 * USERS  Query
 * GET /*
 * params: mongo stringify query
 *  - ?name=**&admin={$or:{ ***, *** }}
 *  - ?_id=**
 */
```

```js
/*
  * USERS Create
  * POST /
  * body: Users fields (see validator)
  */
```

```js
/*
  * USERS Update
  * POST /:id
  * params: @id 
  * body: Dataset to update
  */
```

```js
/*
  * USERS Update status (INACTIVE)
  * POST /remove/:id
  * params: @id 
  */
 ```

