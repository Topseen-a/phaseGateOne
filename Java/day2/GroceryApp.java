import java.util.Scanner;
public class GroceryApp{
    public static void main(String[] args){

    Scanner input = new Scanner(System.in);
    
    while (true){
        System.out.println("Welcome to Grocery App");
        System.out.println("1. Add Item");
        System.out.println("2. Remove Item");
        System.out.println("3. Show all available items");
        System.out.println("0. Exit");
        
        System.out.print("Enter a number: ");        
        int choice = input.nextInt();

        if (choice == 1){
            System.out.println("Hello");
            }
        else if (choice == 2){
            System.out.println("Hi");
            }
        else if (choice == 3){
            System.out.println("Topseen");
            }
        else{
            break;            
            }
        }   
    }

public static String addItem(int array){

//    String[] newList = new String(array.length); 

    Scanner input = new Scanner(System.in);
    
    System.out.print("Enter a grocery to be added: ");
    String groceryName = input.nextLine();

//    newList = groceryName;
    return groceryName;
}

}
