package collection.deque.test;

import java.util.ArrayDeque;
import java.util.Queue;

public class PriterQueueTest {
    public static void main(String[] args) {
        Queue<String> printQueue = new ArrayDeque<>();

        printQueue.offer("doc1");
        printQueue.offer("doc2");
        printQueue.offer("doc3");

        System.out.println(printQueue.poll());
        System.out.println(printQueue.poll());
        System.out.println(printQueue.poll());
    }
}
