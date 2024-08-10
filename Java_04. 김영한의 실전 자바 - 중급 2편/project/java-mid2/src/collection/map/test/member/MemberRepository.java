package collection.map.test.member;

import java.util.HashMap;
import java.util.Map;

public class MemberRepository {
    private Map<String, Member> map = new HashMap<>();

    public void save(Member member){
        map.put(member.getId(), member);
    }

    public Member findById(String id) {
        return map.getOrDefault(id, null);
    }

    public Member findByName(String name) {
        for(String key : map.keySet()){
            if(map.get(key).getName().equals(name)){
                return map.get(key);
            }
        }

        return null;
    }

    public void remove(String id) {
        map.remove(id);
    }
}
