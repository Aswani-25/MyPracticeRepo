public class FactoryExample {
    public static void main(String[] args) {
        DocumentFactory factory = new DocumentFactory();

        Document d1 = factory.getDocument("word");
        d1.open();

        Document d2 = factory.getDocument("pdf");
        d2.open();

        Document d3 = factory.getDocument("excel");
        d3.open();
    }
}