import java.util.Random;
import java.util.Scanner;
public class SimpleArithmetic{
    public static void main(String[] args){


    Scanner input = new Scanner(System.in);
    
    final int NUMBER_OF_QUESTIONS = 10;

    int countCorrect = 0;
    int answer = 0;
    int countNumberAnswered = 0;
    int countWrong = 0;
    int correctAnswer = 0;
    int firstNumber;
    int secondNumber;

    while (countNumberAnswered != NUMBER_OF_QUESTIONS){

        correctAnswer = firstNumber - secondNumber;

    if (firstNumber < secondNumber){
        int change = firstNumber;
        secondNumber = change;
        firstNumber = secondNumber;
        
        }
    System.out.print(firstNumber + "-" + secondNumber + "=");
    answer = input.nextInt();
    countNumberAnswered += 1;
    
    if (answer == correctAnswer){
        countCorrect += 1;
        }
    if (answer != correctAnswer){
        countWrong += 1;
        }
    if (countWrong == 2){
        break;
        }

        }

    System.out.println("Correct answered questions is " + countCorrect);
        


    }



}
