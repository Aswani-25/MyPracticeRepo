public class RecursiveMethod {
    public static double futureValue(double pv, double rate, int years) {
        if (years == 0) {
            return pv;
        }
        return (1 + rate) * futureValue(pv, rate, years - 1);
    }
}