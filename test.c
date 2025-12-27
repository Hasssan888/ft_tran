#include <unistd.h>
#include <stdio.h>
// abc = abbccc av[1][0] = a 
//97, 98, 99, 100

void ft_putchar(char c) {
    write(1, &c, 1);
}
int main(int ac, char *av[]) {

    int i = 0;
    // int asc = 97;
    while (av[1][i]) {
        int sum = (av[1][i] - 97) + 1;
        for(int j = sum; j > 0; j--){
            write(1, &av[1][i], 1);
        }
        i++;
    }
}
