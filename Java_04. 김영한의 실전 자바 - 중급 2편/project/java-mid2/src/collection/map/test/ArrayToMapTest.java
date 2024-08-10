package collection.map.test;

import java.util.HashMap;
import java.util.Map;

public class ArrayToMapTest {
    public static void main(String[] args) {
        String[][] productArr = {{"Java", "10000"}, {"Spring", "20000"}, {"JPA", "30000"}};

        // 주어진 배열로부터 Map 생성
        Map<String, Integer> map = new HashMap<>();
        for(String[] product : productArr){
            map.put(product[0], Integer.parseInt(product[1]));
        }

        // Map의 모든 데이터 출력
        for (Map.Entry<String, Integer> entry : map.entrySet()) {
            String key = entry.getKey();
            Integer value = entry.getValue();
            System.out.println("제품: " + key + ", 가격: " + value);
        }
    }
}
