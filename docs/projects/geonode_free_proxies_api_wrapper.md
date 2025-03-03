---
title: Genode Free Proxies API Wrapper
---

API wrapper for [https://geonode.com/free-proxy-list](https://geonode.com/free-proxy-list)

Scrape proxies easily with a basic understanding of Python 3 (knowledge of `for` loops is sufficient to use this API wrapper). This wrapper facilitates the scraping of the Genode Free Proxies API and returns the results.

## Usage

Use the wrapper in your Python script:

```python
import geonode

# Initialize the Proxylist object
prox = geonode.Proxylist()

# Get a list of proxies
proxies = prox.get_proxies_only()

# Print the obtained proxies
for proxy in proxies:
    print(proxy)
```

Ensure that you have an active internet connection while using this wrapper, as it fetches data from an online API.
