#! /usr/bin/env python3
# -*- coding: UTF-8 -*-
import sys


def main():
    if len(sys.argv) > 1:
        n = int(sys.argv[1])
    else:
        n = int(sys.stdin.read())

    for i in range(1, n + 1):
        print(f" {i}")


if __name__ == "__main__":
    main()
