public class MainClass {
    public static void main(String[] args) {
        double pv = 1000;
        double rate = 0.1;
        int years = 3;

        double result = RecursiveMethod.futureValue(pv, rate, years);
        System.out.println("Future Value = " + result);
    }
}