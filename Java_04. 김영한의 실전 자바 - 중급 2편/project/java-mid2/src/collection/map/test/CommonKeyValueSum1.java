package collection.map.test;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class CommonKeyValueSum1 {
    public static void main(String[] args) {
        Map<String, Integer> map1 = new HashMap<>();
        map1.put("A", 1);
        map1.put("B", 2);
        map1.put("C", 3);

        Map<String, Integer> map2 = new HashMap<>();
        map2.put("B", 4);
        map2.put("C", 5);
        map2.put("D", 6);

        Map<String, Integer> map = new HashMap<>();
        Set<String> commonSet = map1.keySet();
        commonSet.retainAll(map2.keySet());

        for (String key : commonSet) {
            map.put(key, map1.get(key) + map2.get(key));
        }

        System.out.println(map);
    }
}
