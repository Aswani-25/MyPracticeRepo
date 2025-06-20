public class DocumentFactory {
    public Document getDocument(String type) {
        if (type.equals("word")) return new WordDoc();
        else if (type.equals("pdf")) return new PdfDoc();
        else if (type.equals("excel")) return new ExcelDoc();
        else return null;
    }
}