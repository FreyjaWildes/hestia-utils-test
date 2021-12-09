from hestia_earth.utils.table import pivot_csv
import sys
"""
Very simple script the just calls pivot_csv on the received data from standard input
The received input is assumed to be a CSV file. No check is done for simplicity
In a real case scenario, some sanitization would be required.
"""
pivot_csv(sys.stdin).to_csv(sys.stdout, index=None)
