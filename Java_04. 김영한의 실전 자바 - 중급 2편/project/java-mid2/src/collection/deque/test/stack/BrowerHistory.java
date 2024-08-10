package collection.deque.test.stack;

import java.util.ArrayDeque;
import java.util.Deque;

public class BrowerHistory {
    private Deque<String> deque = new ArrayDeque<>();

    public void visitPage(String page) {
        deque.push(page);
    }

    public String goBack() {
        return deque.pop();
    }
}
