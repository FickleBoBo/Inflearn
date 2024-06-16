package generic.test.ex3;

import generic.test.ex3.unit.BioUnit;

public class UnitPrinter {

    static <T extends BioUnit> void printV1(Shuttle<T> shuttle){
        System.out.println("이름: " + shuttle.out().getName() + ", HP: " + shuttle.out().getHp());
    }

    static void printV2(Shuttle<? extends BioUnit> shuttle){
        System.out.println("이름: " + shuttle.out().getName() + ", HP: " + shuttle.out().getHp());
    }
}
