function calculate()
{
   // 1. Set up a blank array to contain the final multiplication table.
   let multiplicationTable = [];

   /*
      2. Set a value variable to specify how many values you want to multiply
         with one another and show the results for.
   */
   let input = document.getElementById("input");

   // converts HTML value into a numerical value
   let multiplyByX = parseFloat(input.value);

   /*
      3. Create an outer for loop to iterate through each row and a temp array
         to store the row values. Each row will be an array of cells that
         will be nested into the final table.
   */
   for (let row = 1; row <= multiplyByX; row++)
   {
      let tempRows = [];

      /*
         4. Add an inner for loop for the column values, which will push the
            multiplied row and column values to the temp array.
      */
      for (let col = 1; col <= multiplyByX; col++)
            { tempRows.push(row * col); }

      /*
         5. Add the temporary row data that contains the calculated solutions 
            to the main array of the final table. The final result will add a 
            row of values for the calculations.
      */
      multiplicationTable.push(tempRows);
   }

   // print to console
   console.log(multiplicationTable);
}