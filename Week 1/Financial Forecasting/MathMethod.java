public class MathMethod {
    public static double futureValue(double pv, double rate, int years) {
        return pv * Math.pow(1 + rate, years);
    }
}
