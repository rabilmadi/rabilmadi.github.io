package main

import (
	"fmt"
	"sort"
	"strings"
)

func areAnagrams(str1, str2 string) bool {

	str1 = strings.ReplaceAll(strings.ToLower(str1), " ", "")
	str2 = strings.ReplaceAll(strings.ToLower(str2), " ", "")

	
	str1Runes := []rune(str1)
	str2Runes := []rune(str2)
	sort.Slice(str1Runes, func(i, j int) bool { return str1Runes[i] < str1Runes[j] })
	sort.Slice(str2Runes, func(i, j int) bool { return str2Runes[i] < str2Runes[j] })

	
	sortedStr1 := string(str1Runes)
	sortedStr2 := string(str2Runes)

	return sortedStr1 == sortedStr2
}

func main() {
	
	var str1, str2 string
	fmt.Print("Enter the first string: ")
	fmt.Scanln(&str1)
	fmt.Print("Enter the second string: ")
	fmt.Scanln(&str2)

	
	if areAnagrams(str1, str2) {
		fmt.Println("The two strings are anagrams of each other.")
	} else {
		fmt.Println("The two strings are not anagrams of each other.")
	}
}