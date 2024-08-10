package collection.map.test.cart;

import java.util.HashMap;
import java.util.Map;

public class Cart {
    private Map<Product, Integer> map = new HashMap<>();

    public void printAll() {
        System.out.println(map);
    }

    public void add(Product product, int count) {
        map.put(product, map.getOrDefault(product, 0) + count);
    }

    public void minus(Product product, int count) {
        map.put(product, map.get(product) - count);
        if(map.get(product) == 0){
            map.remove(product);
        }
    }
}
