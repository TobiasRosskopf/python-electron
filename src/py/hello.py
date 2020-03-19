#! /usr/bin/env python3
# -*- coding: UTF-8 -*-
import sys


def fac(n):
    product = 1
    for i in range(1, n + 1):
        product *= i
    
    return product


def main():
    if len(sys.argv) > 1:
        args = sys.argv[1]
    else:
        args = sys.stdin.read()

    try:
        print(fac(int(args)))
    except:
        print("ERROR")


if __name__ == "__main__":
    main()
