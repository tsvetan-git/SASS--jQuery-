<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" type="text/css" href="assets/css/style.css">
<script type="text/javascript" src="assets/js/jquery-3.1.0.js"></script>
<script type="text/javascript" src="assets/js/items.js"></script>
</head>
<body>
    <div id='container'>
    <section id="add-items">
        <button id="add-item">Add New Item:</button>
        <table>
            <tr>
            <th id="hidden"></th>
            <th>name</th>
            <th>quantity</th> 
            <th>price</th>
            <th>modify</th>
            </tr>
        </table>
    </section>
    <section id="view-items">
        <form method="" action="">
            <p><label>name:</label></p>
            <input id="name" name="name" type="text">
            <p><label>quantity:</label></p>
            <input id="quantity" name="quantity" type="number">
            <p><label>price:</label></p>
            <input id="price" name="price" type="number">
            <button id="submit">submit</button>
        </form>
    </section>
    </div>
</body>
</html>
