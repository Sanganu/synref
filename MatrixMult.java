/******************************************************************************

                            Online Java Compiler.
                Code, Compile, Run and Debug java program online.
Write your code in this editor and press "Run" button to execute it.

*******************************************************************************/
import java.util.Arrays;
public class Main
{
	public static void main(String[] args) {
	    int[][] matrix1 = {{1,2,3},{5,6,7},{9,3,4}};
	    int[][] matrix2 = {{1,13,4},{9,16,17},{12,4,2}};
	    int[][] result={{0,0,0},{0,0,0},{0,0,0}};
	   
	    System.out.println("The First Matrix given:");
         System.out.println("\n======================");
	     for(int i=0;i<matrix1.length;i++)
	    {
	        System.out.println("");
	        for(int j=0;j<matrix1[i].length;j++)
	        {
	            System.out.print("("+i+","+j+")= "+matrix1[i][j]);
	        }
	    }
	     System.out.println("======================");
	    System.out.println(Arrays.deepToString(matrix1));
	    System.out.println("======================");
	     System.out.println("The Second Matrix given:");
          System.out.println("\n======================");
           System.out.println(Arrays.deepToString(matrix2));
             System.out.println("======================");
	     for(int i=0;i<matrix2.length;i++)
	    {
	        System.out.println("");
	        for(int j=0;j<matrix2[i].length;j++)
	        {
	            System.out.print("("+i+","+j+")= "+matrix2[i][j]);
	        }
	    }
	   
	  
	    System.out.println("======================");
		System.out.println("The Matrix Multiplication");
		 for(int i=0;i<result.length;i++)
	    {
	        System.out.println("");
	        for(int j=0;j<result[i].length;j++)
	        {
	            result[i][j] = (matrix1[i][j]*matrix2[j][i]);
	            System.out.print(result[i][j]);
	        }
	    }
	}
}
