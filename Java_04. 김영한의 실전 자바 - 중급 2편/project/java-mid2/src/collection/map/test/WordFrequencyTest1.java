package collection.map.test;

import java.util.HashMap;
import java.util.Map;
import java.util.StringTokenizer;

public class WordFrequencyTest1 {
    public static void main(String[] args) {
        String text = "orange banana apple apple banana apple";

        // 코드 작성
        Map<String, Integer> map = new HashMap<>();

        StringTokenizer st = new StringTokenizer(text);
        while(st.hasMoreTokens()){
            String word = st.nextToken();
            map.put(word, map.getOrDefault(word, 0) + 1);
        }

        System.out.println(map);
    }
}
