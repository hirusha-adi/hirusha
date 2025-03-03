---
title: Genode Free Proxies API Wrapper
authors: [hirusha]
tags: [api,development,python]
---

API wrapper for [https://geonode.com/free-proxy-list](https://geonode.com/free-proxy-list)

Gitub repo: [@hirusha-adi/Geonode-Free-Proxies-API-Wrapper](https://github.com/hirusha-adi/Geonode-Free-Proxies-API-Wrapper)

This tool will help you to scrape free proxies from geonode, quickly and easily!

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
