package collection.iterable;

import java.util.Iterator;

public class MyArrayMain {

    public static void main(String[] args) {
        MyArray myArray = new MyArray(new int[]{1, 2, 3, 4});
        Iterator<Integer> iterator = myArray.iterator();

        System.out.println("iterator 사용");

        while(iterator.hasNext()){
            Integer value = iterator.next();
            System.out.println("value = " + value);
        }

        // 배열이거나 iterable 인터페이스를 구현한 객체는 향상된 for문 사용 가능
        // 컴파일 시점에 아래 코드를 위 while문으로 변경해줌
        System.out.println("for-each 사용");
        for(int value : myArray){
            System.out.println("value = " + value);
        }
    }
}
