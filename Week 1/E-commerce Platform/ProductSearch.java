public class ProductSearch {

    static int linearSearch(Product[] arr, int id) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i].productId == id)
                return i;
        }
        return -1;
    }

    static int binarySearch(Product[] arr, int id) {
        int low = 0, high = arr.length - 1;
        while (low <= high) {
            int mid = (low + high) / 2;
            if (arr[mid].productId == id)
                return mid;
            else if (arr[mid].productId < id)
                low = mid + 1;
            else
                high = mid - 1;
        }
        return -1;
    }

    public static void main(String[] args) {
        Product[] products = {
            new Product(101, "Pen"),
            new Product(104, "Pencil"),
            new Product(108, "Book"),
            new Product(110, "Shoes"),
            new Product(120, "Bag")
        };

        int index1 = linearSearch(products, 108);
        if (index1 != -1)
            System.out.println("Linear Search: Found " + products[index1].productName);
        else
            System.out.println("Linear Search: Not found");

        int index2 = binarySearch(products, 108);
        if (index2 != -1)
            System.out.println("Binary Search: Found " + products[index2].productName);
        else
            System.out.println("Binary Search: Not found");
    }
}