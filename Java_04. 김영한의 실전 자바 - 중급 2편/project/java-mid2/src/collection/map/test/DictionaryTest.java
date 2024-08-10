package collection.map.test;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class DictionaryTest {
    public static void main(String[] args) {
        Map<String, String> dictionary = new HashMap<>();

        while(true){
            boolean flag = inputWord(dictionary);

            if(!flag) break;
        }

        while(true){
            boolean flag = searchWord(dictionary);

            if(!flag) break;
        }
    }

    private static boolean inputWord(Map<String, String> map){
        Scanner sc = new Scanner(System.in);

        System.out.println("==단어 입력 단계==");
        System.out.print("영어 단어를 입력하세요 (종료는 'q'): ");
        String engWord = sc.nextLine();

        if(engWord.equals("q")){
            return false;
        }

        System.out.print("한글 뜻을 입력하세요: ");
        String korWord = sc.nextLine();

        map.put(engWord, korWord);

        return true;
    }

    private static boolean searchWord(Map<String, String> map){
        Scanner sc = new Scanner(System.in);

        System.out.println("==단어 검색 단계==");
        System.out.print("찾을 영어 단어를 입력하세요 (종료는 'q'): ");
        String engWord = sc.nextLine();

        if(engWord.equals("q")){
            sc.close();
            return false;
        }

        if(!map.containsKey(engWord)){
            System.out.println(engWord + "은(는) 사전에 없는 단어입니다.");
            return true;
        }

        System.out.println(engWord + "의 뜻: " + map.get(engWord));

        return true;
    }
}
