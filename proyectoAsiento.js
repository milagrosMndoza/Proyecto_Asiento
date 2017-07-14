//Mi código para mostrar asienetos
/*function mostrar(asientos){
   var str = "";
   for(var j = 0; j < 2; j++){
   for (var i = 0; i < asientos.length; i++) {
      if (asientos[i] == undefined &&  i%2== j)   
         str += (i+1) + "(" + ")";
      else  if (i%2== j) 
         str += (i+1) + "(*)";
   }
   str+="\n"
}
   return "[" + str + "]\n";
} */ 

function buscar (asientos, dni) {
   for (var i = 0; i < asientos.length; i++) {
      if (asientos[i] != undefined ) 
         if (asientos[i].dni == dni)
            return asientos[i];
   }
   return '';
}

//Codigo del profesor para mostrar asientos
function mostrar(asientos){
   var s1 = "", s2 = "";
   for (var i = 0; i < asientos.length; i++) {
      var e =  (asientos[i] != undefined)  ?  '*' : '';
      if ( i % 2 == 0)
         s1 += (i+1) + "[" + e + "] ";
      else
         s2 += (i+1) + "[" + e + "] ";
   }
   return "\n" + s1 + "\n" + s2 + "\n";
}  

function reserva () {
   var N = 10; // Número de asientos
   var asientos = [];
   for (var i = 0; i < N; i++) {
      asientos[i] = undefined;
   }
   var mensaje = "0: Salir\n" +
                 "1: Reservar  asiento\n" +
                 "2: Liberar asiento \n" + 
                 "3: Seleccionar asiento \n" +
                 "4: Buscar por DNI \n";
   
   var option = 0;
   while (true){
      var str = mostrar(asientos) + mensaje + " >> ingrese opcion:" ;
      option = parseInt( prompt( str )  );
      if (option == 0) {
         break;
      }else if (option == 1) {
         str = "seleccione asiento: " + mostrar(asientos);
         var nro = parseInt( prompt( str )  );
         if (nro > 0 && nro <= N) {
            var name =  prompt( "nombre del pasajero" )  ;
            var id = parseInt( prompt( "dni del pasajero"  ) );
            asientos[nro - 1] = {
               nombre : name,
               dni: id
            };
         }
      }else if (option == 2) {
         str = "seleccione asiento: " + mostrar(asientos);
         var nro = parseInt( prompt( str )  );
         if (nro >0 && nro <= N) {
            asientos[nro - 1] = undefined;
         }
       }else if (option == 3) {
         str = "seleccione asiento: " + mostrar(asientos);
         var nro = parseInt( prompt( str )  );
         if (nro > 0 && nro <= N) {
            str = mostrar(asientos) +
                     "Nombre del pasajero: " + asientos [nro - 1].nombre + 
                     "DNI del pasajero: " + asientos [nro - 1].dni;
                
            alert (str);
         }
      }
      else if (option == 4) {
         str = "ingrese dni: ";
         var dni = parseInt( prompt( str )  );
         
         alert ( "usuario encontrado: " +  buscar (asientos, dni).nombre +"  :) ");
       }
      
   } 
   imprimir(asientos);
}

reserva();
       /*else if (option == 4) {
         str = "Ingrese DNI: " ;
         var nro = parseInt( prompt( str )  );
         for (var i = 0; i < asientos.length; i++ ){
            if(asientos[i].dni == dni)
            return asientos[i];
            "Nombre del pasajero: " + asientos [nro - 1].nombre + 
            "DNI del pasajero: " + asientos [nro - 1].dni;
         }
            return '';
         }
          
   } */


    
