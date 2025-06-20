public class IterativeMethod {
    public static double futureValue(double pv, double rate, int years) {
        double result = pv;
        for (int i = 0; i < years; i++) {
            result *= (1 + rate);
        }
        return result;
    }
}