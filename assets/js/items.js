 
 $(function () {
     $('form').on('click', function (e) {
         e.preventDefault();
     });
     $('form').hide();
     $('#add-item').on('click', function () {
         $('#add-item').hide();
         $('form').show();
         $('table').hide();
     });
 });
 
 $(function () {
     $("#submit").on("click", function(){
         var name = $('#name').val();
         var quantity = $('#quantity').val();
         var price = $('#price').val();
         
         $.ajax({
              url: 'session.php',
              method: 'POST',
              dataType: 'json',
              data:
                items = {
                    name: name,
                    quantity: quantity,
                    price: price
                }
            })
            .done(function (response) {
                var addName = '<td>'+ response.name +'</td>';
                var addQuantity = '<td>' + response.quantity +'</td>';
                var addPrice = '<td>' + response.price + '</td>';
                var td = '<td id="hidden"></td>';
                var btnDel = '<td><button class="delete">delete</button></td>';
                //var btnEdit = '<td><button class="delete">delete</button></td>';
                    
                $('#add-item').show(); 
                
                $('form').hide();
                $('table').show();
                $('table').append(
                    '<tr>'+ td + addName + addQuantity + addPrice + btnDel + '</tr>');
            });
    });
});


 $(function () {
     $('#container').on('click', '.delete', function () {
         $(this).closest('tr').remove();
     });
 });
 
 
 /*
 $(function () {
     $('#container').on('click', '.edit', function () {
         
     });
 });
*/