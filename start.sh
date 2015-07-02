#!/usr/bin/env bash
nohup meteor 0<&- &> logs/meteor.log &
exit