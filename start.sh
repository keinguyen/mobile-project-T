#!/bin/bash
localip=$(osascript -e "IPv4 address of (system info)")

echo -e "\n"
echo "Start Metro bundle with LOCAL_IP =" $localip
echo -e "\n"
echo "MODE" $1

MODE=$1 LOCAL_IP=$localip node node_modules/react-native/local-cli/cli.js start
