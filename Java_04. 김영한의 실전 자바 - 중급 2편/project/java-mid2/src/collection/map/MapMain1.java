package collection.map;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class MapMain1 {

    public static void main(String[] args) {
        Map<String, Integer> studentMep = new HashMap<>();

        // 학생 성적 데이터 추가
        studentMep.put("studentA", 90);
        studentMep.put("studentB", 80);
        studentMep.put("studentC", 80);
        studentMep.put("studentD", 100);
        System.out.println(studentMep);

        // 특정 학생의 값 조회
        Integer result = studentMep.get("studentD");
        System.out.println("result = " + result);

        System.out.println("keySet 활용");
        Set<String> keySet = studentMep.keySet();
        for(String key : keySet){
            Integer value = studentMep.get(key);
            System.out.println("key=" + key + ", value=" + value);
        }

        System.out.println("entrySet 활용");
        Set<Map.Entry<String, Integer>> entries = studentMep.entrySet();
        for (Map.Entry<String, Integer> entry : entries) {
            String key = entry.getKey();
            Integer value = entry.getValue();
            System.out.println("key=" + key + ", value=" + value);
        }

        System.out.println("values 활용");
        Collection<Integer> values = studentMep.values();
        for (Integer value : values) {
            System.out.println("value = " + value);
        }
    }
}
