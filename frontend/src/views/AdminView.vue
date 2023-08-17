<template>
  
<div class="">
<table class="table">
  <tr class="tr">
    <th class="th-td">ProductName</th>
    <th class="th-td">Image</th>
    <th class="th-td">Description</th>
    <th class="th-td">Price</th>
    <th class="th-td">Category</th>
    <th class="th-td">Delete</th>
    <th class="th-td">Edit</th>
  </tr>
  <tr class="tr">
    <!-- <td>{{admin.productName}}</td>
    <td class="th-td">{{admin.image}}</td>
    <td class="th-td">{{admin.description}}</td>
    <td class="th-td">{{admin.price}}</td>
    <td class="th-td">{{admin.category}}</td>
    <td class="th-td">{{admin.delete}}</td>
    <td class="th-td">{{admin.edit}}</td> -->
    <td class="th-td">admin.productName</td>
    <td class="th-td">admin.image</td>
    <td class="th-td">admin.description</td>
    <td class="th-td">admin.price</td>
    <td class="th-td">admin.category</td>
    <td class="th-td">admin.delete</td>
    <td class="th-td">admin.edit</td>
  </tr>
</table>

</div>
  
</template>

<script>
</script>



<style>

.table {
  /* border-radius: 50px; */
  margin: 10px;
  border-collapse: collapse;
  width: 60%;
  margin-left: 320px;
}

.tr {
  background-color: blue;
}

.th-td {
  /* border: 2px solid black; */
  margin: 10px;
  border-radius: 10px;
  text-align: center;
  padding: 8px;
}

</style>









<!-- <div class="container" style="margin-top: 50px">
  &lt if (messages.success) { %>
  <div class="alert alert-success" role="alert">&lt- messages.success %></div>
  &lt } %> &lt if (messages.error) { %>
  <div class="alert alert-danger" role="alert">&lt- messages.error %></div>
  &lt } %>

  <div class="card">
    <div class="card-header">
      <ul class="nav nav-pills w-100">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Users</a>
        </li>
        <li class="nav-item ms-auto">
          <a class="nav-link active" href="/users/add">Add User</a>
        </li>
      </ul>
    </div>
    <div class="card-body">
      &lt if(data.length) { %>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Position</th>
            <th scope="col" style="width: 200px">Action</th>
          </tr>
        </thead>
        <tbody>
          &lt data.forEach((user, index) => { %>
          <tr>
            <th scope="row">&lt= index + 1 %></th>
            <td>&lt= user.name %></td>
            <td>&lt= user.email %></td>
            <td>&lt= user.position %></td>
            <td>
              <a
                class="btn btn-success edit"
                href="../users/edit/<%= user.id %>"
                >Edit</a
              >
              <a
                class="btn btn-danger delete"
                onclick="return confirm('Are you sure you want to delete this record?')"
                href="../users/delete/<%= user.id %>"
                >Delete</a
              >
            </td>
          </tr>
          v }); %>
        </tbody>
      </table>
      &lt } else { %>
      <p class="text-center">No users found!</p>
      &lt } %>
    </div>
  </div>

  
</div> -->


