{
  "name": "vidly",
  "version": "1.0.0",
  "lockfileVersion": 2,
  "requires": true,
  "packages": {
    "": {
      "version": "1.0.0",
      "license": "ISC",
      "dependencies": {
        "@aws-sdk/client-s3": "^3.20.0",
        "@hapi/joi": "^15.0.3",
        "aws-sdk": "^2.941.0",
        "bcrypt": "^5.0.1",
        "compression": "^1.7.4",
        "config": "^3.3.6",
        "cors": "^2.8.5",
        "express": "^4.17.1",
        "express-async-errors": "^3.1.1",
        "fawn": "^2.1.5",
        "helmet": "^4.6.0",
        "joi": "^13.1.0",
        "joi-objectid": "^3.0.1",
        "jsonwebtoken": "^8.5.1",
        "lodash": "^4.17.21",
        "moment": "^2.29.1",
        "mongoose": "^5.12.5",
        "multer": "^1.4.2",
        "multer-s3": "^2.9.0",
        "node": "^14.17.3",
        "nodemailer": "^6.6.1",
        "nodemon": "^2.0.7",
        "passport": "^0.4.1",
        "passport-google-oauth": "^2.0.0",
        "querystring": "^0.2.1",
        "winston": "^3.3.3",
        "winston-mongodb": "^5.0.7"
      },
      "devDependencies": {
        "jest": "^22.2.2",
        "supertest": "^6.1.3"
      },
      "engines": {
        "node": "14.17.3"
      }
    },
    "node_modules/@aws-crypto/crc32": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/@aws-crypto/crc32/-/crc32-1.0.0.tgz",
      "integrity": "sha512-wr4EyCv3ZfLH3Sg7FErV6e/cLhpk9rUP/l5322y8PRgpQsItdieaLbtE4aDOR+dxl8U7BG9FIwWXH4TleTDZ9A==",
      "dependencies": {
        "tslib": "^1.11.1"
      }
    },
    "node_modules/@aws-crypto/crc32/node_modules/tslib": {
      "version": "1.14.1",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-1.14.1.tgz",
      "integrity": "sha512-Xni35NKzjgMrwevysHTCArtLDpPvye8zV/0E4EyYn43P7/7qvQwPh9BGkHewbMulVntbigmcT7rdX3BNo9wRJg=="
    },
    "node_modules/@aws-crypto/ie11-detection": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/@aws-crypto/ie11-detection/-/ie11-detection-1.0.0.tgz",
      "integrity": "sha512-kCKVhCF1oDxFYgQrxXmIrS5oaWulkvRcPz+QBDMsUr2crbF4VGgGT6+uQhSwJFdUAQ2A//Vq+uT83eJrkzFgXA==",
      "dependencies": {
        "tslib": "^1.11.1"
      }
    },
    "node_modules/@aws-crypto/ie11-detection/node_modules/tslib": {
      "version": "1.14.1",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-1.14.1.tgz",
      "integrity": "sha512-Xni35NKzjgMrwevysHTCArtLDpPvye8zV/0E4EyYn43P7/7qvQwPh9BGkHewbMulVntbigmcT7rdX3BNo9wRJg=="
    },
    "node_modules/@aws-crypto/sha256-browser": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@aws-crypto/sha256-browser/-/sha256-browser-1.1.0.tgz",
      "integrity": "sha512-VIpuLRDonMAHgomrsm/zKbeXTnxpr4aHDQmS4pF+NcpvBp64l675yjGA9hyUYs/QJwBjUl8WqMjh9tIRgi85Sg==",
      "dependencies": {
        "@aws-crypto/ie11-detection": "^1.0.0",
        "@aws-crypto/sha256-js": "^1.1.0",
        "@aws-crypto/supports-web-crypto": "^1.0.0",
        "@aws-sdk/types": "^3.1.0",
        "@aws-sdk/util-locate-window": "^3.0.0",
        "@aws-sdk/util-utf8-browser": "^3.0.0",
        "tslib": "^1.11.1"
      }
    },
    "node_modules/@aws-crypto/sha256-browser/node_modules/tslib": {
      "version": "1.14.1",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-1.14.1.tgz",
      "integrity": "sha512-Xni35NKzjgMrwevysHTCArtLDpPvye8zV/0E4EyYn43P7/7qvQwPh9BGkHewbMulVntbigmcT7rdX3BNo9wRJg=="
    },
    "node_modules/@aws-crypto/sha256-js": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@aws-crypto/sha256-js/-/sha256-js-1.1.0.tgz",
      "integrity": "sha512-VIhuqbPgXDVr8sZe2yhgQcDRRmzf4CI8fmC1A3bHiRfE6wlz1d8KpeemqbuoEHotz/Dch9yOxlshyQDNjNFeHA==",
      "dependencies": {
        "@aws-sdk/types": "^3.1.0",
        "@aws-sdk/util-utf8-browser": "^3.0.0",
        "tslib": "^1.11.1"
      }
    },
    "node_modules/@aws-crypto/sha256-js/node_modules/tslib": {
      "version": "1.14.1",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-1.14.1.tgz",
      "integrity": "sha512-Xni35NKzjgMrwevysHTCArtLDpPvye8zV/0E4EyYn43P7/7qvQwPh9BGkHewbMulVntbigmcT7rdX3BNo9wRJg=="
    },
    "node_modules/@aws-crypto/supports-web-crypto": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/@aws-crypto/supports-web-crypto/-/supports-web-crypto-1.0.0.tgz",
      "integrity": "sha512-IHLfv+WmVH89EW4n6a5eE8/hUlz6qkWGMn/v4r5ZgzcXdTC5nolii2z3k46y01hWRiC2PPhOdeSLzMUCUMco7g==",
      "dependencies": {
        "tslib": "^1.11.1"
      }
    },
    "node_modules/@aws-crypto/supports-web-crypto/node_modules/tslib": {
      "version": "1.14.1",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-1.14.1.tgz",
      "integrity": "sha512-Xni35NKzjgMrwevysHTCArtLDpPvye8zV/0E4EyYn43P7/7qvQwPh9BGkHewbMulVntbigmcT7rdX3BNo9wRJg=="
    },
    "node_modules/@aws-sdk/abort-controller": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/abort-controller/-/abort-controller-3.20.0.tgz",
      "integrity": "sha512-DnJbLzICjB6NyZXFi5wv1m9Rd/+8GN+aeti76rFEunykG+O0+GQcqOxC/lH58MkLBjaLrQhGhC2H1/L4Z75TPw==",
      "dependencies": {
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/@aws-sdk/chunked-blob-reader": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/chunked-blob-reader/-/chunked-blob-reader-3.20.0.tgz",
      "integrity": "sha512-fNXUt3rZsQyJhUR0yMog+lNqyMqyh0BzwEz67jW4sC7ExSnchRzwKo9C4XBXm1JMeBALaI5hY7Axwf1pE0ANzQ==",
      "dependencies": {
        "tslib": "^2.0.0"
      }
    },
    "node_modules/@aws-sdk/chunked-blob-reader-native": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/chunked-blob-reader-native/-/chunked-blob-reader-native-3.20.0.tgz",
      "integrity": "sha512-GeN6rWJw8Z7iZLu6XTrkGGspmxwF8c3jR2HM2UdGlia0XR6AUaa1b1bdz1ACmVA1iG0sVA3YvnPy6LgsQaraGg==",
      "dependencies": {
        "@aws-sdk/util-base64-browser": "3.20.0",
        "tslib": "^2.0.0"
      }
    },
    "node_modules/@aws-sdk/client-s3": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/client-s3/-/client-s3-3.20.0.tgz",
      "integrity": "sha512-ueyIICBi8i57KOfKk0mRNk0HV6wOgcj5p7TodrjuMJP0JAqxNG0NVsHSvowhb/8LPrDKTSlK0pikBn7niJv1GQ==",
      "dependencies": {
        "@aws-crypto/sha256-browser": "^1.0.0",
        "@aws-crypto/sha256-js": "^1.0.0",
        "@aws-sdk/client-sts": "3.20.0",
        "@aws-sdk/config-resolver": "3.20.0",
        "@aws-sdk/credential-provider-node": "3.20.0",
        "@aws-sdk/eventstream-serde-browser": "3.20.0",
        "@aws-sdk/eventstream-serde-config-resolver": "3.20.0",
        "@aws-sdk/eventstream-serde-node": "3.20.0",
        "@aws-sdk/fetch-http-handler": "3.20.0",
        "@aws-sdk/hash-blob-browser": "3.20.0",
        "@aws-sdk/hash-node": "3.20.0",
        "@aws-sdk/hash-stream-node": "3.20.0",
        "@aws-sdk/invalid-dependency": "3.20.0",
        "@aws-sdk/md5-js": "3.20.0",
        "@aws-sdk/middleware-apply-body-checksum": "3.20.0",
        "@aws-sdk/middleware-bucket-endpoint": "3.20.0",
        "@aws-sdk/middleware-content-length": "3.20.0",
        "@aws-sdk/middleware-expect-continue": "3.20.0",
        "@aws-sdk/middleware-host-header": "3.20.0",
        "@aws-sdk/middleware-location-constraint": "3.20.0",
        "@aws-sdk/middleware-logger": "3.20.0",
        "@aws-sdk/middleware-retry": "3.20.0",
        "@aws-sdk/middleware-sdk-s3": "3.20.0",
        "@aws-sdk/middleware-serde": "3.20.0",
        "@aws-sdk/middleware-signing": "3.20.0",
        "@aws-sdk/middleware-ssec": "3.20.0",
        "@aws-sdk/middleware-stack": "3.20.0",
        "@aws-sdk/middleware-user-agent": "3.20.0",
        "@aws-sdk/node-config-provider": "3.20.0",
        "@aws-sdk/node-http-handler": "3.20.0",
        "@aws-sdk/protocol-http": "3.20.0",
        "@aws-sdk/smithy-client": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "@aws-sdk/url-parser": "3.20.0",
        "@aws-sdk/util-base64-browser": "3.20.0",
        "@aws-sdk/util-base64-node": "3.20.0",
        "@aws-sdk/util-body-length-browser": "3.20.0",
        "@aws-sdk/util-body-length-node": "3.20.0",
        "@aws-sdk/util-user-agent-browser": "3.20.0",
        "@aws-sdk/util-user-agent-node": "3.20.0",
        "@aws-sdk/util-utf8-browser": "3.20.0",
        "@aws-sdk/util-utf8-node": "3.20.0",
        "@aws-sdk/util-waiter": "3.20.0",
        "@aws-sdk/xml-builder": "3.20.0",
        "entities": "2.2.0",
        "fast-xml-parser": "3.19.0",
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">=10.0.0"
      }
    },
    "node_modules/@aws-sdk/client-sso": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/client-sso/-/client-sso-3.20.0.tgz",
      "integrity": "sha512-pqLzjj9QIcsllFzakpZU8iPD38zkmfPq7EyLRLWwrR8GhRo+mBvmyG5D3rRDqmkR6G869OBa/hZngg9HmSfHDw==",
      "dependencies": {
        "@aws-crypto/sha256-browser": "^1.0.0",
        "@aws-crypto/sha256-js": "^1.0.0",
        "@aws-sdk/config-resolver": "3.20.0",
        "@aws-sdk/fetch-http-handler": "3.20.0",
        "@aws-sdk/hash-node": "3.20.0",
        "@aws-sdk/invalid-dependency": "3.20.0",
        "@aws-sdk/middleware-content-length": "3.20.0",
        "@aws-sdk/middleware-host-header": "3.20.0",
        "@aws-sdk/middleware-logger": "3.20.0",
        "@aws-sdk/middleware-retry": "3.20.0",
        "@aws-sdk/middleware-serde": "3.20.0",
        "@aws-sdk/middleware-stack": "3.20.0",
        "@aws-sdk/middleware-user-agent": "3.20.0",
        "@aws-sdk/node-config-provider": "3.20.0",
        "@aws-sdk/node-http-handler": "3.20.0",
        "@aws-sdk/protocol-http": "3.20.0",
        "@aws-sdk/smithy-client": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "@aws-sdk/url-parser": "3.20.0",
        "@aws-sdk/util-base64-browser": "3.20.0",
        "@aws-sdk/util-base64-node": "3.20.0",
        "@aws-sdk/util-body-length-browser": "3.20.0",
        "@aws-sdk/util-body-length-node": "3.20.0",
        "@aws-sdk/util-user-agent-browser": "3.20.0",
        "@aws-sdk/util-user-agent-node": "3.20.0",
        "@aws-sdk/util-utf8-browser": "3.20.0",
        "@aws-sdk/util-utf8-node": "3.20.0",
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">=10.0.0"
      }
    },
    "node_modules/@aws-sdk/client-sts": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/client-sts/-/client-sts-3.20.0.tgz",
      "integrity": "sha512-Do3cg1p0c68mIAypDjLKJX12TQjWyM82Zh5XUbMFlYpQu4zKGkpG29nVSRXlBkCpHFS1T7WJUgqQjW36Xln6mg==",
      "dependencies": {
        "@aws-crypto/sha256-browser": "^1.0.0",
        "@aws-crypto/sha256-js": "^1.0.0",
        "@aws-sdk/config-resolver": "3.20.0",
        "@aws-sdk/credential-provider-node": "3.20.0",
        "@aws-sdk/fetch-http-handler": "3.20.0",
        "@aws-sdk/hash-node": "3.20.0",
        "@aws-sdk/invalid-dependency": "3.20.0",
        "@aws-sdk/middleware-content-length": "3.20.0",
        "@aws-sdk/middleware-host-header": "3.20.0",
        "@aws-sdk/middleware-logger": "3.20.0",
        "@aws-sdk/middleware-retry": "3.20.0",
        "@aws-sdk/middleware-sdk-sts": "3.20.0",
        "@aws-sdk/middleware-serde": "3.20.0",
        "@aws-sdk/middleware-signing": "3.20.0",
        "@aws-sdk/middleware-stack": "3.20.0",
        "@aws-sdk/middleware-user-agent": "3.20.0",
        "@aws-sdk/node-config-provider": "3.20.0",
        "@aws-sdk/node-http-handler": "3.20.0",
        "@aws-sdk/protocol-http": "3.20.0",
        "@aws-sdk/smithy-client": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "@aws-sdk/url-parser": "3.20.0",
        "@aws-sdk/util-base64-browser": "3.20.0",
        "@aws-sdk/util-base64-node": "3.20.0",
        "@aws-sdk/util-body-length-browser": "3.20.0",
        "@aws-sdk/util-body-length-node": "3.20.0",
        "@aws-sdk/util-user-agent-browser": "3.20.0",
        "@aws-sdk/util-user-agent-node": "3.20.0",
        "@aws-sdk/util-utf8-browser": "3.20.0",
        "@aws-sdk/util-utf8-node": "3.20.0",
        "entities": "2.2.0",
        "fast-xml-parser": "3.19.0",
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">=10.0.0"
      }
    },
    "node_modules/@aws-sdk/config-resolver": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/config-resolver/-/config-resolver-3.20.0.tgz",
      "integrity": "sha512-mOq2RZIQHdZJxHWeNT0u3ulaWHAXr4NHuB/TBW66dJ8rRr5OlumnPHqbVb7x4qRbJqpzWvc1dj4RGR1x9NcIJA==",
      "dependencies": {
        "@aws-sdk/signature-v4": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/@aws-sdk/credential-provider-env": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/credential-provider-env/-/credential-provider-env-3.20.0.tgz",
      "integrity": "sha512-6jSgVUw3eZfU8ufCsCeJf5k+AJVDdKobK9Hkg0nTA07zOObo/xElri8a3XmjYj5iVuAcK/ErP5SXEEB3h/fjrQ==",
      "dependencies": {
        "@aws-sdk/property-provider": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/@aws-sdk/credential-provider-imds": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/credential-provider-imds/-/credential-provider-imds-3.20.0.tgz",
      "integrity": "sha512-l2R3HSwSb3Pm4jwMo0YWcbbapoK2/gBgb4h68JcsNXBI2yTthU41vioTNdMoWWlyCR0ii6QX3IUnB4NJY7RlLQ==",
      "dependencies": {
        "@aws-sdk/property-provider": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/@aws-sdk/credential-provider-ini": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/credential-provider-ini/-/credential-provider-ini-3.20.0.tgz",
      "integrity": "sha512-03HAQq9iP5YW+XnRw59LCPov0v9J7yovYIinmOGDiUaqNJl1aoizoryVqt5cLwZNjF+Xdxh2+41rP/u+agSfwA==",
      "dependencies": {
        "@aws-sdk/credential-provider-env": "3.20.0",
        "@aws-sdk/credential-provider-imds": "3.20.0",
        "@aws-sdk/credential-provider-web-identity": "3.20.0",
        "@aws-sdk/property-provider": "3.20.0",
        "@aws-sdk/shared-ini-file-loader": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/@aws-sdk/credential-provider-node": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/credential-provider-node/-/credential-provider-node-3.20.0.tgz",
      "integrity": "sha512-Pbcr0YYUQ8Y/o8xjHTF/TxnHEft+3FMqlN5WMTvA4yCQJowDKzcsAXp8m/FpHo55I0oC02PfVWHSAHZ86PmohQ==",
      "dependencies": {
        "@aws-sdk/credential-provider-env": "3.20.0",
        "@aws-sdk/credential-provider-imds": "3.20.0",
        "@aws-sdk/credential-provider-ini": "3.20.0",
        "@aws-sdk/credential-provider-process": "3.20.0",
        "@aws-sdk/credential-provider-sso": "3.20.0",
        "@aws-sdk/credential-provider-web-identity": "3.20.0",
        "@aws-sdk/property-provider": "3.20.0",
        "@aws-sdk/shared-ini-file-loader": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">=10.0.0"
      }
    },
    "node_modules/@aws-sdk/credential-provider-process": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/credential-provider-process/-/credential-provider-process-3.20.0.tgz",
      "integrity": "sha512-GV6XCR5/tKgJVKyMhplsCh8vo5GhKBkmvB2HNZYBE0KQzh7Km8+raYQlzcfow++CZKddHN0PPuIfL94C0hpdtw==",
      "dependencies": {
        "@aws-sdk/credential-provider-ini": "3.20.0",
        "@aws-sdk/property-provider": "3.20.0",
        "@aws-sdk/shared-ini-file-loader": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/@aws-sdk/credential-provider-sso": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/credential-provider-sso/-/credential-provider-sso-3.20.0.tgz",
      "integrity": "sha512-EJ+QiB+OXftY3fNNaFO8vaJm/Xe6x15iyl7W9qaUrPzifIBzFjkOQb4uhCM83S6OS/icWXZeMjbgsrGIqrtMHA==",
      "dependencies": {
        "@aws-sdk/client-sso": "3.20.0",
        "@aws-sdk/credential-provider-ini": "3.20.0",
        "@aws-sdk/property-provider": "3.20.0",
        "@aws-sdk/shared-ini-file-loader": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/@aws-sdk/credential-provider-web-identity": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/credential-provider-web-identity/-/credential-provider-web-identity-3.20.0.tgz",
      "integrity": "sha512-JJ1RQW5byI7FWSZOhWkTsrcs1wPdC6uG5JERQmcdPXOx9jCpBo8gETwYjlKxls/MbE+NSLCq5pQQKJs7Yz6K5g==",
      "dependencies": {
        "@aws-sdk/property-provider": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/@aws-sdk/eventstream-marshaller": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/eventstream-marshaller/-/eventstream-marshaller-3.20.0.tgz",
      "integrity": "sha512-2Yw7u/YO4XFPiXnADxNGM6bU2qqP1ZTv7vfiCtykqLYZwVElPSVPjbXdEykLwb4vPVsZvInD+6z1P5qzF9m8TQ==",
      "dependencies": {
        "@aws-crypto/crc32": "^1.0.0",
        "@aws-sdk/types": "3.20.0",
        "@aws-sdk/util-hex-encoding": "3.20.0",
        "tslib": "^2.0.0"
      }
    },
    "node_modules/@aws-sdk/eventstream-serde-browser": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/eventstream-serde-browser/-/eventstream-serde-browser-3.20.0.tgz",
      "integrity": "sha512-Zvi6ItVaxRDKfe+U6stYhxnljoY0NTm6Mq+8/KeERrSO304f9ldXuvszSVaoeM4b7BXq1Qd3swr5VZocEEa0rw==",
      "dependencies": {
        "@aws-sdk/eventstream-marshaller": "3.20.0",
        "@aws-sdk/eventstream-serde-universal": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/@aws-sdk/eventstream-serde-config-resolver": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/eventstream-serde-config-resolver/-/eventstream-serde-config-resolver-3.20.0.tgz",
      "integrity": "sha512-LOCaAvhGclqpiUlNO6ZcShqqENnbTjLnR4x3PYDsud5rc8x5RF0159InwxOURoSvN05XDpgHDnOmfFQaiTlMcQ==",
      "dependencies": {
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/@aws-sdk/eventstream-serde-node": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/eventstream-serde-node/-/eventstream-serde-node-3.20.0.tgz",
      "integrity": "sha512-xPIUpVpVB4pCy9w3J/p2nDcBD04K00dsGzbQFamO38k+EPCsqdgdneUY/dl4aKeVC9B5gotOOf7iDQYLlIm2xA==",
      "dependencies": {
        "@aws-sdk/eventstream-marshaller": "3.20.0",
        "@aws-sdk/eventstream-serde-universal": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/@aws-sdk/eventstream-serde-universal": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/eventstream-serde-universal/-/eventstream-serde-universal-3.20.0.tgz",
      "integrity": "sha512-fLc6lG2migDkTVqRt52xfHcQkLxCFLzQNEA9/+8lf06AyGJP6aMU9erTjg1xhaM3+dnVgHiwayv3UK75FnpnnA==",
      "dependencies": {
        "@aws-sdk/eventstream-marshaller": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/@aws-sdk/fetch-http-handler": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/fetch-http-handler/-/fetch-http-handler-3.20.0.tgz",
      "integrity": "sha512-VWCalEondhOsd5inE9W+p8jNVQAwgxR/k8yZys8ZuAQERhCKJcimgu7j9t5ruoGprmqnGcFmyFqZynxBZj6Urw==",
      "dependencies": {
        "@aws-sdk/protocol-http": "3.20.0",
        "@aws-sdk/querystring-builder": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "@aws-sdk/util-base64-browser": "3.20.0",
        "tslib": "^2.0.0"
      }
    },
    "node_modules/@aws-sdk/hash-blob-browser": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/hash-blob-browser/-/hash-blob-browser-3.20.0.tgz",
      "integrity": "sha512-d2TnhlaBrSzGS8h20Q5goTHcczD9se9xX45D09hQ0M6I6LUbwuDt3K0oNGgteUbl2V3yRLAQY3lMH4vX8uXpIA==",
      "dependencies": {
        "@aws-sdk/chunked-blob-reader": "3.20.0",
        "@aws-sdk/chunked-blob-reader-native": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      }
    },
    "node_modules/@aws-sdk/hash-node": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/hash-node/-/hash-node-3.20.0.tgz",
      "integrity": "sha512-PMRbrgkvXzWhmY2w/+rXG76tgCEB4+m7CM+OrXtbOdwwG6hyxPgdbvGwOLzbZXo4uxCcjQGpOUZTV54rW2rqgQ==",
      "dependencies": {
        "@aws-sdk/types": "3.20.0",
        "@aws-sdk/util-buffer-from": "3.20.0",
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/@aws-sdk/hash-stream-node": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/hash-stream-node/-/hash-stream-node-3.20.0.tgz",
      "integrity": "sha512-FsXotjWaLTIkLBSS5EEYaFpdPjwVQuH9FavOVRES2hKJPmFOmNyvGP40hBRXOjwGAWCIYDPWFI2oAfzUb0HhlQ==",
      "dependencies": {
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/@aws-sdk/invalid-dependency": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/invalid-dependency/-/invalid-dependency-3.20.0.tgz",
      "integrity": "sha512-++0e6Z4m0qZXMbhiezJroJhh1x4rWgTm2AI6k0+Jkl6gTN8TzLHFXLoaK1UGKzhouSleL982b1DeJoNLVgE5zA==",
      "dependencies": {
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      }
    },
    "node_modules/@aws-sdk/is-array-buffer": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/is-array-buffer/-/is-array-buffer-3.20.0.tgz",
      "integrity": "sha512-l7A254/SA+DE1kNWcNHDKGUbpmmR3fjr65LPJeiB88Rnh+3M7F103JCNoA5x1Heb7QfUd4GMAUaYkaUlaWmnJw==",
      "dependencies": {
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/@aws-sdk/md5-js": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/md5-js/-/md5-js-3.20.0.tgz",
      "integrity": "sha512-82h0L3F6lxh+MqZn7DxoxokdORCiVGll6zYrwKKZe/iZb3IfKbPlgq/2uSILVU2OzWK6+aAYNXRAcykvMp19ng==",
      "dependencies": {
        "@aws-sdk/types": "3.20.0",
        "@aws-sdk/util-utf8-browser": "3.20.0",
        "tslib": "^2.0.0"
      }
    },
    "node_modules/@aws-sdk/middleware-apply-body-checksum": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/middleware-apply-body-checksum/-/middleware-apply-body-checksum-3.20.0.tgz",
      "integrity": "sha512-4//sJ0FcaMXplfHEzxcn3gzMqfJcM9JY3VbXsmyvfkveh8UfCQ0VOa+SgIPYQGLafMbEPZy+jL1s3DdBwaeVAQ==",
      "dependencies": {
        "@aws-sdk/is-array-buffer": "3.20.0",
        "@aws-sdk/protocol-http": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/@aws-sdk/middleware-bucket-endpoint": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/middleware-bucket-endpoint/-/middleware-bucket-endpoint-3.20.0.tgz",
      "integrity": "sha512-smvLGrfz3xC6BzHfv9BnleJ1cS28Bt6RSIF072DIXvlSU9UhZRIplLgi9ncq5lvifSXE8Hd0932VZpBe1ReSzA==",
      "dependencies": {
        "@aws-sdk/protocol-http": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "@aws-sdk/util-arn-parser": "3.20.0",
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/@aws-sdk/middleware-content-length": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/middleware-content-length/-/middleware-content-length-3.20.0.tgz",
      "integrity": "sha512-UXp+RQOHfv18EpPcELBtB4WktOqQnICW5JsGWkYfVv/WAxeZD1C2SC7wiNfeSLRsHfcfefAW5zznvFtdzke4AA==",
      "dependencies": {
        "@aws-sdk/protocol-http": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/@aws-sdk/middleware-expect-continue": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/middleware-expect-continue/-/middleware-expect-continue-3.20.0.tgz",
      "integrity": "sha512-FRyNUlIJZxfQgpzv0AOOSHrWxk0+d/k6Sy9fAPDimZHFqJaD7ok/AhHhLs6m1C9ihyBY9hLSn4/xN+/t3lQNyg==",
      "dependencies": {
        "@aws-sdk/middleware-header-default": "3.20.0",
        "@aws-sdk/protocol-http": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/@aws-sdk/middleware-header-default": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/middleware-header-default/-/middleware-header-default-3.20.0.tgz",
      "integrity": "sha512-Zj9a11jtJgpxsf+RyZ84vSPvNSxR/0A+Tjl/pIRqguVTxT11c2yH9d18/Flopg3juibKHKoQ3YwSjYslMer78A==",
      "dependencies": {
        "@aws-sdk/protocol-http": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/@aws-sdk/middleware-host-header": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/middleware-host-header/-/middleware-host-header-3.20.0.tgz",
      "integrity": "sha512-7FNZlfahz7J1aoJxdsPS49dYtBYJLap8WofQw8fJodOEGsVDvphCEApInfCVIqiGcpqMcQaR9mGPsKIbV1qZQw==",
      "dependencies": {
        "@aws-sdk/protocol-http": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/@aws-sdk/middleware-location-constraint": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/middleware-location-constraint/-/middleware-location-constraint-3.20.0.tgz",
      "integrity": "sha512-m1qtd3B5v6hkeRiH0znFFqJMOO6YO8SAYMp+Lnc0x7UYTngRWT420manqsFqavrD7q0K++WQEHJ23XR93b36yw==",
      "dependencies": {
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/@aws-sdk/middleware-logger": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/middleware-logger/-/middleware-logger-3.20.0.tgz",
      "integrity": "sha512-0zYQJsBHRwop8N3uKtoa8rm58Y1Wkz2TADnWXSkMQg+vX4SgWE/1fYMb23I7p0tjTp8jZ0nRbxaO59DGu73kxQ==",
      "dependencies": {
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/@aws-sdk/middleware-retry": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/middleware-retry/-/middleware-retry-3.20.0.tgz",
      "integrity": "sha512-Cyu9GDJ/TcxQDw/O5iZckHRzRs9ystvf5nEWB40QT5++485Lpkh/mz2WPdsboTmcPSGlPM8llaboyI8/DvAUJg==",
      "dependencies": {
        "@aws-sdk/protocol-http": "3.20.0",
        "@aws-sdk/service-error-classification": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0",
        "uuid": "^8.3.2"
      },
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/@aws-sdk/middleware-retry/node_modules/uuid": {
      "version": "8.3.2",
      "resolved": "https://registry.npmjs.org/uuid/-/uuid-8.3.2.tgz",
      "integrity": "sha512-+NYs2QeMWy+GWFOEm9xnn6HCDp0l7QBD7ml8zLUmJ+93Q5NF0NocErnwkTkXVFNiX3/fpC6afS8Dhb/gz7R7eg==",
      "bin": {
        "uuid": "dist/bin/uuid"
      }
    },
    "node_modules/@aws-sdk/middleware-sdk-s3": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/middleware-sdk-s3/-/middleware-sdk-s3-3.20.0.tgz",
      "integrity": "sha512-dxCVeWscgWgHaC3Ci4coIuNjCcA9Uad+u5xpPafGDsBeH9RPSPwODBKKnpNEyBbm4qfYN6t7OUaEJXHVdpi5Ow==",
      "dependencies": {
        "@aws-sdk/protocol-http": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "@aws-sdk/util-arn-parser": "3.20.0",
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/@aws-sdk/middleware-sdk-sts": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/middleware-sdk-sts/-/middleware-sdk-sts-3.20.0.tgz",
      "integrity": "sha512-dHsWL3aryeCl2BX3UVHFQPCsIQdx3Y2bWlY+6dUZdd65YWxvrrpoR5m5LrubUvt7SD+KQ++K/6h8A3gFGKs4UA==",
      "dependencies": {
        "@aws-sdk/middleware-signing": "3.20.0",
        "@aws-sdk/property-provider": "3.20.0",
        "@aws-sdk/protocol-http": "3.20.0",
        "@aws-sdk/signature-v4": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/@aws-sdk/middleware-serde": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/middleware-serde/-/middleware-serde-3.20.0.tgz",
      "integrity": "sha512-Hz5fmo0APcfkyqQGiGof7fNOcvi4CS7m9Gb+iJMiIzpVPSsve3tVe45rqYHo7NOj4Jed5E6/lujUprNHRxFEMQ==",
      "dependencies": {
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/@aws-sdk/middleware-signing": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/middleware-signing/-/middleware-signing-3.20.0.tgz",
      "integrity": "sha512-ittOpXvHFRLUteWPEeemJeqyvi+lYlkXXF60dqnpza8sJOtsRP03VSeN9aLGNGcIKeg97WkejVCiobRoJnE4ig==",
      "dependencies": {
        "@aws-sdk/property-provider": "3.20.0",
        "@aws-sdk/protocol-http": "3.20.0",
        "@aws-sdk/signature-v4": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/@aws-sdk/middleware-ssec": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/middleware-ssec/-/middleware-ssec-3.20.0.tgz",
      "integrity": "sha512-MziaXbSxmIackNvwIr2I2VpMeso0f2oxWq5Kth63n9BLxyCsLYINDixJdqF01vMt9549iXjArhQSv7Zu1rI8DA==",
      "dependencies": {
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/@aws-sdk/middleware-stack": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/middleware-stack/-/middleware-stack-3.20.0.tgz",
      "integrity": "sha512-1lYl93BuYWQ7rWyTtIlaPTCvAnabMQ2kbJFH5j76ag7esRLownObmcqWNMEJ4bbw5TXXY4nG7BdRoTlmo47Mow==",
      "dependencies": {
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/@aws-sdk/middleware-user-agent": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/middleware-user-agent/-/middleware-user-agent-3.20.0.tgz",
      "integrity": "sha512-EBiTXpUAjimSdzkEwHgcH96fWg8hDbtmus9ABf6Cor6EHUlHVeRAFULGIYo5ZFTy7DXbeHxjzPE7CcWEaUBvQQ==",
      "dependencies": {
        "@aws-sdk/protocol-http": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/@aws-sdk/node-config-provider": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/node-config-provider/-/node-config-provider-3.20.0.tgz",
      "integrity": "sha512-bHevyN3hHbtrAg3EQ85MFHKfCwSr481vgd3nQL1zhzGOAp2DWM0C3w7otV8H+ejcplwDwtL+9JVhhEFTFROniw==",
      "dependencies": {
        "@aws-sdk/property-provider": "3.20.0",
        "@aws-sdk/shared-ini-file-loader": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/@aws-sdk/node-http-handler": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/node-http-handler/-/node-http-handler-3.20.0.tgz",
      "integrity": "sha512-uK6qVeWFoNZfZTutj6RAAJjrlDMSp3dGzuF2xIbxSLjITNPtaXszssxVgaBYDZdDIaqe8I5DuyjGPoEW/xxJ1A==",
      "dependencies": {
        "@aws-sdk/abort-controller": "3.20.0",
        "@aws-sdk/protocol-http": "3.20.0",
        "@aws-sdk/querystring-builder": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/@aws-sdk/property-provider": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/property-provider/-/property-provider-3.20.0.tgz",
      "integrity": "sha512-mShEXLj9ZsAOu1VL+XlqssBr7TNVRKvkaAovzifxaHaLP91jFltWlSmAPFc2Yuc8MsVToHfpfTYc2dSFTBqGtw==",
      "dependencies": {
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/@aws-sdk/protocol-http": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/protocol-http/-/protocol-http-3.20.0.tgz",
      "integrity": "sha512-ZW9uyVk1Zbbaqo8LYc+MJ1EynZVQsa08o2I6Pho1fvheMcF/prcz+1HLQcJnfyNG76lM3Z/qQaEL7gGy2Ve6Cg==",
      "dependencies": {
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/@aws-sdk/querystring-builder": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/querystring-builder/-/querystring-builder-3.20.0.tgz",
      "integrity": "sha512-iImp9CEQHtJkVhchuH9dZWkhiCWcPSsEbeeNctydigB9RMAaThtkGJ/423mQFkzXuOplbYkpwlfW9hu4gutSOQ==",
      "dependencies": {
        "@aws-sdk/types": "3.20.0",
        "@aws-sdk/util-uri-escape": "3.20.0",
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/@aws-sdk/querystring-parser": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/querystring-parser/-/querystring-parser-3.20.0.tgz",
      "integrity": "sha512-Ven5A56SDDRJHCt84jzjrnW85LRzE9nClzbY14MjuITBo+azkbjZhyTutxK8/q8GQZMa2lhjnXLtfcT5rj1YjQ==",
      "dependencies": {
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/@aws-sdk/service-error-classification": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/service-error-classification/-/service-error-classification-3.20.0.tgz",
      "integrity": "sha512-mJb465doN5yq+XxP4bPnAubriewEPoICNQZouDVKZ44Q48USn6e7zX0OrYqBT56Inw8JrSD9u5VHqGsFiubnSA==",
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/@aws-sdk/shared-ini-file-loader": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/shared-ini-file-loader/-/shared-ini-file-loader-3.20.0.tgz",
      "integrity": "sha512-yUjSo5epgytDEaGSN+Sp/vY0HEdt9FU03KC3ON/q99+XEWVU2Y4045khXXWPHJ1wlvq3EOcRKG3u/0MDUJPnTg==",
      "dependencies": {
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/@aws-sdk/signature-v4": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/signature-v4/-/signature-v4-3.20.0.tgz",
      "integrity": "sha512-LvbRMPlTt7X55EEE/cYcXm/VoCtr0frEC3KoAiq1zSNHXkiw741NK0d44W0RyJciBcXYfnYYBocNH+wIkjFZEQ==",
      "dependencies": {
        "@aws-sdk/is-array-buffer": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "@aws-sdk/util-hex-encoding": "3.20.0",
        "@aws-sdk/util-uri-escape": "3.20.0",
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/@aws-sdk/smithy-client": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/smithy-client/-/smithy-client-3.20.0.tgz",
      "integrity": "sha512-co8VEuod5QoFbdXGouO+Kem6knj0NW302zUmYILk3r2UX5RJ/eVcaFJGS8oV89a8qZ7debazNS6IXZUxhlWUSg==",
      "dependencies": {
        "@aws-sdk/middleware-stack": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/@aws-sdk/types": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/types/-/types-3.20.0.tgz",
      "integrity": "sha512-ztrHBTJM0wU4rrt51Kff8DjGT5ReoEdY1IUu6T0lN7aH9113235WnBE44y+z/Y+nMC+t5+r74CkldkLf/vngNg==",
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/@aws-sdk/url-parser": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/url-parser/-/url-parser-3.20.0.tgz",
      "integrity": "sha512-9IvUtQ0p044KaVp7bdiXNB2vjhc6nZ02ph75e1wF1ISQiisDpQdTfAEy+TLFaw+95dBjyEG3PF6ybmFx6hNFxA==",
      "dependencies": {
        "@aws-sdk/querystring-parser": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      }
    },
    "node_modules/@aws-sdk/util-arn-parser": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/util-arn-parser/-/util-arn-parser-3.20.0.tgz",
      "integrity": "sha512-E698STtAcfBwkogMCQVKoHYc1B1XxtoDpqwfGII5dGYBmXR2N41Ct5Zlb4uO7uqL89A7L3Zbc/83h99CRLFWaQ==",
      "dependencies": {
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/@aws-sdk/util-base64-browser": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/util-base64-browser/-/util-base64-browser-3.20.0.tgz",
      "integrity": "sha512-55ubHL6AyskjVg/gi21XubmGP11eHY1QG912L3ZZuf83IQOT5ApLXEJ8KZIReMCH62sFMrUl3Q/G3zB3daTyiQ==",
      "dependencies": {
        "tslib": "^2.0.0"
      }
    },
    "node_modules/@aws-sdk/util-base64-node": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/util-base64-node/-/util-base64-node-3.20.0.tgz",
      "integrity": "sha512-okeDxYT+hUoWAWB0QIMDry8NoTXNrK7bFtFoyRL+GUI98NCe5R8Md1SSm4aQZCoc4eaW4TKrM0gKB98VHXGZYA==",
      "dependencies": {
        "@aws-sdk/util-buffer-from": "3.20.0",
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/@aws-sdk/util-body-length-browser": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/util-body-length-browser/-/util-body-length-browser-3.20.0.tgz",
      "integrity": "sha512-/VnDExoqYwuEwlLMO1UHkmJpN+ujNgU7T+q4kVoTlcK90PZBjzRS0X+2c/xC005ArSwDDFxSyc8QNq4DWjZCsQ==",
      "dependencies": {
        "tslib": "^2.0.0"
      }
    },
    "node_modules/@aws-sdk/util-body-length-node": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/util-body-length-node/-/util-body-length-node-3.20.0.tgz",
      "integrity": "sha512-qn1ZGzaCULDwZTOsAXySp0b6lRBSinIujnRJM0155H8O1N8CDfvSeNPO9EUI/1M7u9zCS8zZ7jVO+MSVjn65ww==",
      "dependencies": {
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/@aws-sdk/util-buffer-from": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/util-buffer-from/-/util-buffer-from-3.20.0.tgz",
      "integrity": "sha512-nNed2o88c/Dagkszz0A75ARGOrmnpI+Ep4MopcAQ7tcLn5IXAHIAx7Hbs5pLxBVceh8d9nMu6xY516txRBgG+A==",
      "dependencies": {
        "@aws-sdk/is-array-buffer": "3.20.0",
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/@aws-sdk/util-hex-encoding": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/util-hex-encoding/-/util-hex-encoding-3.20.0.tgz",
      "integrity": "sha512-hUXgUVNpN61+F26qdBCQCclTGRWER/H1O8axuPKoyC7PPJPzxrHZbst7o/hEAIUYq76iJLGCSCC+dXlxvRN4HQ==",
      "dependencies": {
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/@aws-sdk/util-locate-window": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/util-locate-window/-/util-locate-window-3.20.0.tgz",
      "integrity": "sha512-AqSMOm+hwxdywQ/jmprZXJY8uftHTi4p9JuftxTnP7Nl28+G8+RrVmoGcOtYf9VfWRDo/AM7zhvDwu4jB9yclg==",
      "dependencies": {
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/@aws-sdk/util-uri-escape": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/util-uri-escape/-/util-uri-escape-3.20.0.tgz",
      "integrity": "sha512-BmlmK0zCAehj7V6Kql9vsXY0GTJZgXzSsyAVeXMvXq6D2JHU1UuJq0PAtxtGD4E8+CoSeowAaGyfUrqiCjJFBw==",
      "dependencies": {
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/@aws-sdk/util-user-agent-browser": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/util-user-agent-browser/-/util-user-agent-browser-3.20.0.tgz",
      "integrity": "sha512-DSXJsihYDk2QiBUjgeAf/oTOnALAPWiKbeLIF4aPMcTKBsY5MCbZjEtoODLGxY5V2TpWFlfcKNjhYSesZIDIqA==",
      "dependencies": {
        "@aws-sdk/types": "3.20.0",
        "bowser": "^2.11.0",
        "tslib": "^2.0.0"
      }
    },
    "node_modules/@aws-sdk/util-user-agent-node": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/util-user-agent-node/-/util-user-agent-node-3.20.0.tgz",
      "integrity": "sha512-WfC8p+ofygAhFArtXu/u6BZQDwrC/E5MffyoHdxbm4KpRznAOmEM/vzwrUFS8e93/OPYP8bFRMJCLRlER35a7g==",
      "dependencies": {
        "@aws-sdk/node-config-provider": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/@aws-sdk/util-utf8-browser": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/util-utf8-browser/-/util-utf8-browser-3.20.0.tgz",
      "integrity": "sha512-9ZSirHLA8RtNkrZj9jLcxujQCsflNY3PWyuRArce5OpPv6+vVzL2QvdG191xfTSi5EMIHvwlRl56bNo64D7dLg==",
      "dependencies": {
        "tslib": "^2.0.0"
      }
    },
    "node_modules/@aws-sdk/util-utf8-node": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/util-utf8-node/-/util-utf8-node-3.20.0.tgz",
      "integrity": "sha512-rEgl9slmtKYQkGgUmyMeqKzbaRq0YUtVqp+KddV9k12xvDJ05aJWw65YS83m4oX8bAeODKRUe7a1JuY2CIOzNQ==",
      "dependencies": {
        "@aws-sdk/util-buffer-from": "3.20.0",
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/@aws-sdk/util-waiter": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/util-waiter/-/util-waiter-3.20.0.tgz",
      "integrity": "sha512-LwRVZ7mlFkrMaPdmYl4XxJqv2d0M/Knygwmd8glYn03UU26Zjli5ZI1t0Jr6du71FChxAG/X4ko4TWh2zDD1hw==",
      "dependencies": {
        "@aws-sdk/abort-controller": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/@aws-sdk/xml-builder": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/xml-builder/-/xml-builder-3.20.0.tgz",
      "integrity": "sha512-ejQwpqfA2/vvJ2qhPHcs6KtLgM+1rKkvQ6xuXC/2C6vEpTKc6Bcm8szk1MXYikaPYiQNgoi2nQ1C+Yw4zmlc+A==",
      "dependencies": {
        "tslib": "^2.0.0"
      },
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/@babel/code-frame": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.12.13.tgz",
      "integrity": "sha512-HV1Cm0Q3ZrpCR93tkWOYiuYIgLxZXZFVG2VgK+MBWjUqZTundupbfx2aXarXuw5Ko5aMcjtJgbSs4vUGBS5v6g==",
      "dev": true,
      "dependencies": {
        "@babel/highlight": "^7.12.13"
      }
    },
    "node_modules/@babel/helper-validator-identifier": {
      "version": "7.14.0",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.14.0.tgz",
      "integrity": "sha512-V3ts7zMSu5lfiwWDVWzRDGIN+lnCEUdaXgtVHJgLb1rGaA6jMrtB9EmE7L18foXJIE8Un/A/h6NJfGQp/e1J4A==",
      "dev": true
    },
    "node_modules/@babel/highlight": {
      "version": "7.14.0",
      "resolved": "https://registry.npmjs.org/@babel/highlight/-/highlight-7.14.0.tgz",
      "integrity": "sha512-YSCOwxvTYEIMSGaBQb5kDDsCopDdiUGsqpatp3fOlI4+2HQSkTmEVWnVuySdAC5EWCqSWWTv0ib63RjR7dTBdg==",
      "dev": true,
      "dependencies": {
        "@babel/helper-validator-identifier": "^7.14.0",
        "chalk": "^2.0.0",
        "js-tokens": "^4.0.0"
      }
    },
    "node_modules/@babel/highlight/node_modules/ansi-styles": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
      "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
      "dev": true,
      "dependencies": {
        "color-convert": "^1.9.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/@babel/highlight/node_modules/chalk": {
      "version": "2.4.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
      "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
      "dev": true,
      "dependencies": {
        "ansi-styles": "^3.2.1",
        "escape-string-regexp": "^1.0.5",
        "supports-color": "^5.3.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/@babel/highlight/node_modules/color-convert": {
      "version": "1.9.3",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
      "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
      "dev": true,
      "dependencies": {
        "color-name": "1.1.3"
      }
    },
    "node_modules/@babel/highlight/node_modules/color-name": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
      "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU=",
      "dev": true
    },
    "node_modules/@babel/highlight/node_modules/js-tokens": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
      "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==",
      "dev": true
    },
    "node_modules/@dabh/diagnostics": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/@dabh/diagnostics/-/diagnostics-2.0.2.tgz",
      "integrity": "sha512-+A1YivoVDNNVCdfozHSR8v/jyuuLTMXwjWuxPFlFlUapXoGc+Gj9mDlTDDfrwl7rXCl2tNZ0kE8sIBO6YOn96Q==",
      "dependencies": {
        "colorspace": "1.1.x",
        "enabled": "2.0.x",
        "kuler": "^2.0.0"
      }
    },
    "node_modules/@hapi/address": {
      "version": "2.1.4",
      "resolved": "https://registry.npmjs.org/@hapi/address/-/address-2.1.4.tgz",
      "integrity": "sha512-QD1PhQk+s31P1ixsX0H0Suoupp3VMXzIVMSwobR3F3MSUO2YCV0B7xqLcUw/Bh8yuvd3LhpyqLQWTNcRmp6IdQ==",
      "deprecated": "Moved to 'npm install @sideway/address'"
    },
    "node_modules/@hapi/hoek": {
      "version": "6.2.4",
      "resolved": "https://registry.npmjs.org/@hapi/hoek/-/hoek-6.2.4.tgz",
      "integrity": "sha512-HOJ20Kc93DkDVvjwHyHawPwPkX44sIrbXazAUDiUXaY2R9JwQGo2PhFfnQtdrsIe4igjG2fPgMra7NYw7qhy0A==",
      "deprecated": "This version has been deprecated in accordance with the hapi support policy (hapi.im/support). Please upgrade to the latest version to get the best features, bug fixes, and security patches. If you are unable to upgrade at this time, paid support is available for older versions (hapi.im/commercial)."
    },
    "node_modules/@hapi/joi": {
      "version": "15.0.3",
      "resolved": "https://registry.npmjs.org/@hapi/joi/-/joi-15.0.3.tgz",
      "integrity": "sha512-z6CesJ2YBwgVCi+ci8SI8zixoj8bGFn/vZb9MBPbSyoxsS2PnWYjHcyTM17VLK6tx64YVK38SDIh10hJypB+ig==",
      "deprecated": "Switch to 'npm install joi'",
      "dependencies": {
        "@hapi/address": "2.x.x",
        "@hapi/hoek": "6.x.x",
        "@hapi/topo": "3.x.x"
      }
    },
    "node_modules/@hapi/topo": {
      "version": "3.1.6",
      "resolved": "https://registry.npmjs.org/@hapi/topo/-/topo-3.1.6.tgz",
      "integrity": "sha512-tAag0jEcjwH+P2quUfipd7liWCNX2F8NvYjQp2wtInsZxnMlypdw0FtAOLxtvvkO+GSRRbmNi8m/5y42PQJYCQ==",
      "deprecated": "This version has been deprecated and is no longer supported or maintained",
      "dependencies": {
        "@hapi/hoek": "^8.3.0"
      }
    },
    "node_modules/@hapi/topo/node_modules/@hapi/hoek": {
      "version": "8.5.1",
      "resolved": "https://registry.npmjs.org/@hapi/hoek/-/hoek-8.5.1.tgz",
      "integrity": "sha512-yN7kbciD87WzLGc5539Tn0sApjyiGHAJgKvG9W8C7O+6c7qmoQMfVs0W4bX17eqz6C78QJqqFrtgdK5EWf6Qow==",
      "deprecated": "This version has been deprecated and is no longer supported or maintained"
    },
    "node_modules/@mapbox/node-pre-gyp": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/@mapbox/node-pre-gyp/-/node-pre-gyp-1.0.5.tgz",
      "integrity": "sha512-4srsKPXWlIxp5Vbqz5uLfBN+du2fJChBoYn/f2h991WLdk7jUvcSk/McVLSv/X+xQIPI8eGD5GjrnygdyHnhPA==",
      "dependencies": {
        "detect-libc": "^1.0.3",
        "https-proxy-agent": "^5.0.0",
        "make-dir": "^3.1.0",
        "node-fetch": "^2.6.1",
        "nopt": "^5.0.0",
        "npmlog": "^4.1.2",
        "rimraf": "^3.0.2",
        "semver": "^7.3.4",
        "tar": "^6.1.0"
      },
      "bin": {
        "node-pre-gyp": "bin/node-pre-gyp"
      }
    },
    "node_modules/@mapbox/node-pre-gyp/node_modules/nopt": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/nopt/-/nopt-5.0.0.tgz",
      "integrity": "sha512-Tbj67rffqceeLpcRXrT7vKAN8CwfPeIBgM7E6iBkmKLV7bEMwpGgYLGv0jACUsECaa/vuxP0IjEont6umdMgtQ==",
      "dependencies": {
        "abbrev": "1"
      },
      "bin": {
        "nopt": "bin/nopt.js"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/@mapbox/node-pre-gyp/node_modules/semver": {
      "version": "7.3.5",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.3.5.tgz",
      "integrity": "sha512-PoeGJYh8HK4BTO/a9Tf6ZG3veo/A7ZVsYrSA6J8ny9nb3B1VrpkuN+z9OE5wfE5p6H4LchYZsegiQgbJD94ZFQ==",
      "dependencies": {
        "lru-cache": "^6.0.0"
      },
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/@sindresorhus/is": {
      "version": "0.14.0",
      "resolved": "https://registry.npmjs.org/@sindresorhus/is/-/is-0.14.0.tgz",
      "integrity": "sha512-9NET910DNaIPngYnLLPeg+Ogzqsi9uM4mSboU5y6p8S5DzMTVEsJZrawi+BoDNUVBa2DhJqQYUFvMDfgU062LQ==",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/@szmarczak/http-timer": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/@szmarczak/http-timer/-/http-timer-1.1.2.tgz",
      "integrity": "sha512-XIB2XbzHTN6ieIjfIMV9hlVcfPU26s2vafYWQcZHWXHOxiaRZYEDKEwdl129Zyg50+foYV2jCgtrqSA6qNuNSA==",
      "dependencies": {
        "defer-to-connect": "^1.0.1"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/@types/bson": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/@types/bson/-/bson-4.0.3.tgz",
      "integrity": "sha512-mVRvYnTOZJz3ccpxhr3wgxVmSeiYinW+zlzQz3SXWaJmD1DuL05Jeq7nKw3SnbKmbleW5qrLG5vdyWe/A9sXhw==",
      "dependencies": {
        "@types/node": "*"
      }
    },
    "node_modules/@types/mongodb": {
      "version": "3.6.12",
      "resolved": "https://registry.npmjs.org/@types/mongodb/-/mongodb-3.6.12.tgz",
      "integrity": "sha512-49aEzQD5VdHPxyd5dRyQdqEveAg9LanwrH8RQipnMuulwzKmODXIZRp0umtxi1eBUfEusRkoy8AVOMr+kVuFog==",
      "dependencies": {
        "@types/bson": "*",
        "@types/node": "*"
      }
    },
    "node_modules/@types/node": {
      "version": "14.14.41",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-14.14.41.tgz",
      "integrity": "sha512-dueRKfaJL4RTtSa7bWeTK1M+VH+Gns73oCgzvYfHZywRCoPSd8EkXBL0mZ9unPTveBn+D9phZBaxuzpwjWkW0g=="
    },
    "node_modules/abab": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/abab/-/abab-2.0.5.tgz",
      "integrity": "sha512-9IK9EadsbHo6jLWIpxpR6pL0sazTXV6+SQv25ZB+F7Bj9mJNaOc4nCRabwd5M/JwmUa8idz6Eci6eKfJryPs6Q==",
      "dev": true
    },
    "node_modules/abbrev": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
      "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q=="
    },
    "node_modules/accepts": {
      "version": "1.3.7",
      "resolved": "https://registry.npmjs.org/accepts/-/accepts-1.3.7.tgz",
      "integrity": "sha512-Il80Qs2WjYlJIBNzNkK6KYqlVMTbZLXgHx2oT0pU/fjRHyEp+PEfEPY0R3WCwAGVOtauxh1hOxNgIf5bv7dQpA==",
      "dependencies": {
        "mime-types": "~2.1.24",
        "negotiator": "0.6.2"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/acorn": {
      "version": "5.7.4",
      "resolved": "https://registry.npmjs.org/acorn/-/acorn-5.7.4.tgz",
      "integrity": "sha512-1D++VG7BhrtvQpNbBzovKNc1FLGGEE/oGe7b9xJm/RFHMBeUaUGpluV9RLjZa47YFdPcDAenEYuq9pQPcMdLJg==",
      "dev": true,
      "bin": {
        "acorn": "bin/acorn"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/acorn-globals": {
      "version": "4.3.4",
      "resolved": "https://registry.npmjs.org/acorn-globals/-/acorn-globals-4.3.4.tgz",
      "integrity": "sha512-clfQEh21R+D0leSbUdWf3OcfqyaCSAQ8Ryq00bofSekfr9W8u1jyYZo6ir0xu9Gtcf7BjcHJpnbZH7JOCpP60A==",
      "dev": true,
      "dependencies": {
        "acorn": "^6.0.1",
        "acorn-walk": "^6.0.1"
      }
    },
    "node_modules/acorn-globals/node_modules/acorn": {
      "version": "6.4.2",
      "resolved": "https://registry.npmjs.org/acorn/-/acorn-6.4.2.tgz",
      "integrity": "sha512-XtGIhXwF8YM8bJhGxG5kXgjkEuNGLTkoYqVE+KMR+aspr4KGYmKYg7yUe3KghyQ9yheNwLnjmzh/7+gfDBmHCQ==",
      "dev": true,
      "bin": {
        "acorn": "bin/acorn"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/acorn-walk": {
      "version": "6.2.0",
      "resolved": "https://registry.npmjs.org/acorn-walk/-/acorn-walk-6.2.0.tgz",
      "integrity": "sha512-7evsyfH1cLOCdAzZAd43Cic04yKydNx0cF+7tiA19p1XnLLPU4dpCQOqpjqwokFe//vS0QqfqqjCS2JkiIs0cA==",
      "dev": true,
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/agent-base": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/agent-base/-/agent-base-6.0.2.tgz",
      "integrity": "sha512-RZNwNclF7+MS/8bDg70amg32dyeZGZxiDuQmZxKLAlQjr3jGyLx+4Kkk58UO7D2QdgFIQCovuSuZESne6RG6XQ==",
      "dependencies": {
        "debug": "4"
      },
      "engines": {
        "node": ">= 6.0.0"
      }
    },
    "node_modules/agent-base/node_modules/debug": {
      "version": "4.3.1",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.1.tgz",
      "integrity": "sha512-doEwdvm4PCeK4K3RQN2ZC2BYUBaxwLARCqZmMjtF8a51J2Rb0xpVloFRnCODwqjpwnAoao4pelN8l3RJdv3gRQ==",
      "dependencies": {
        "ms": "2.1.2"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/agent-base/node_modules/ms": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
      "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
    },
    "node_modules/ajv": {
      "version": "6.12.6",
      "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.12.6.tgz",
      "integrity": "sha512-j3fVLgvTo527anyYyJOGTYJbG+vnnQYvE0m5mmkc1TK+nxAppkCLMIL0aZ4dblVCNoGShhm+kzE4ZUykBoMg4g==",
      "dev": true,
      "dependencies": {
        "fast-deep-equal": "^3.1.1",
        "fast-json-stable-stringify": "^2.0.0",
        "json-schema-traverse": "^0.4.1",
        "uri-js": "^4.2.2"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/epoberezkin"
      }
    },
    "node_modules/ansi-align": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/ansi-align/-/ansi-align-3.0.0.tgz",
      "integrity": "sha512-ZpClVKqXN3RGBmKibdfWzqCY4lnjEuoNzU5T0oEFpfd/z5qJHVarukridD4juLO2FXMiwUQxr9WqQtaYa8XRYw==",
      "dependencies": {
        "string-width": "^3.0.0"
      }
    },
    "node_modules/ansi-align/node_modules/string-width": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-3.1.0.tgz",
      "integrity": "sha512-vafcv6KjVZKSgz06oM/H6GDBrAtz8vdhQakGjFIvNrHA6y3HCF1CInLy+QLq8dTJPQ1b+KDUqDFctkdRW44e1w==",
      "dependencies": {
        "emoji-regex": "^7.0.1",
        "is-fullwidth-code-point": "^2.0.0",
        "strip-ansi": "^5.1.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/ansi-escapes": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/ansi-escapes/-/ansi-escapes-3.2.0.tgz",
      "integrity": "sha512-cBhpre4ma+U0T1oM5fXg7Dy1Jw7zzwv7lt/GoCpr+hDQJoYnKVPLL4dCvSEFMmQurOQvSrwT7SL/DAlhBI97RQ==",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/ansi-regex": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-4.1.0.tgz",
      "integrity": "sha512-1apePfXM1UOSqw0o9IiFAovVz9M5S1Dg+4TrDwfMewQ6p/rmMueb7tWZjQ1rx4Loy1ArBggoqGpfqqdI4rondg==",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/anymatch": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.2.tgz",
      "integrity": "sha512-P43ePfOAIupkguHUycrc4qJ9kz8ZiuOUijaETwX7THt0Y/GNK7v0aa8rY816xWjZ7rJdA5XdMcpVFTKMq+RvWg==",
      "dependencies": {
        "normalize-path": "^3.0.0",
        "picomatch": "^2.0.4"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/append-field": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/append-field/-/append-field-1.0.0.tgz",
      "integrity": "sha1-HjRA6RXwsSA9I3SOeO3XubW0PlY="
    },
    "node_modules/append-transform": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/append-transform/-/append-transform-0.4.0.tgz",
      "integrity": "sha1-126/jKlNJ24keja61EpLdKthGZE=",
      "dev": true,
      "dependencies": {
        "default-require-extensions": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/aproba": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/aproba/-/aproba-1.2.0.tgz",
      "integrity": "sha512-Y9J6ZjXtoYh8RnXVCMOU/ttDmk1aBjunq9vO0ta5x85WDQiQfUF9sIPBITdbiiIVcBo03Hi3jMxigBtsddlXRw=="
    },
    "node_modules/are-we-there-yet": {
      "version": "1.1.5",
      "resolved": "https://registry.npmjs.org/are-we-there-yet/-/are-we-there-yet-1.1.5.tgz",
      "integrity": "sha512-5hYdAkZlcG8tOLujVDTgCT+uPX0VnpAH28gWsLfzpXYm7wP6mp5Q/gYyR7YQ0cKVJcXJnl3j2kpBan13PtQf6w==",
      "dependencies": {
        "delegates": "^1.0.0",
        "readable-stream": "^2.0.6"
      }
    },
    "node_modules/argparse": {
      "version": "1.0.10",
      "resolved": "https://registry.npmjs.org/argparse/-/argparse-1.0.10.tgz",
      "integrity": "sha512-o5Roy6tNG4SL/FOkCAN6RzjiakZS25RLYFrcMttJqbdd8BWrnA+fGz57iN5Pb06pvBGvl5gQ0B48dJlslXvoTg==",
      "dev": true,
      "dependencies": {
        "sprintf-js": "~1.0.2"
      }
    },
    "node_modules/arr-diff": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/arr-diff/-/arr-diff-2.0.0.tgz",
      "integrity": "sha1-jzuCf5Vai9ZpaX5KQlasPOrjVs8=",
      "dev": true,
      "dependencies": {
        "arr-flatten": "^1.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/arr-flatten": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/arr-flatten/-/arr-flatten-1.1.0.tgz",
      "integrity": "sha512-L3hKV5R/p5o81R7O02IGnwpDmkp6E982XhtbuwSe3O4qOtMMMtodicASA1Cny2U+aCXcNpml+m4dPsvsJ3jatg==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/arr-union": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/arr-union/-/arr-union-3.1.0.tgz",
      "integrity": "sha1-45sJrqne+Gao8gbiiK9jkZuuOcQ=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/array-equal": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/array-equal/-/array-equal-1.0.0.tgz",
      "integrity": "sha1-jCpe8kcv2ep0KwTHenUJO6J1fJM=",
      "dev": true
    },
    "node_modules/array-flatten": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/array-flatten/-/array-flatten-1.1.1.tgz",
      "integrity": "sha1-ml9pkFGx5wczKPKgCJaLZOopVdI="
    },
    "node_modules/array-unique": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/array-unique/-/array-unique-0.2.1.tgz",
      "integrity": "sha1-odl8yvy8JiXMcPrc6zalDFiwGlM=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/arrify": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/arrify/-/arrify-1.0.1.tgz",
      "integrity": "sha1-iYUI2iIm84DfkEcoRWhJwVAaSw0=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/asn1": {
      "version": "0.2.4",
      "resolved": "https://registry.npmjs.org/asn1/-/asn1-0.2.4.tgz",
      "integrity": "sha512-jxwzQpLQjSmWXgwaCZE9Nz+glAG01yF1QnWgbhGwHI5A6FRIEY6IVqtHhIepHqI7/kyEyQEagBC5mBEFlIYvdg==",
      "dev": true,
      "dependencies": {
        "safer-buffer": "~2.1.0"
      }
    },
    "node_modules/assert-plus": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/assert-plus/-/assert-plus-1.0.0.tgz",
      "integrity": "sha1-8S4PPF13sLHN2RRpQuTpbB5N1SU=",
      "dev": true,
      "engines": {
        "node": ">=0.8"
      }
    },
    "node_modules/assign-symbols": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/assign-symbols/-/assign-symbols-1.0.0.tgz",
      "integrity": "sha1-WWZ/QfrdTyDMvCu5a41Pf3jsA2c=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/astral-regex": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/astral-regex/-/astral-regex-1.0.0.tgz",
      "integrity": "sha512-+Ryf6g3BKoRc7jfp7ad8tM4TtMiaWvbF/1/sQcZPkkS7ag3D5nMBCe2UfOTONtAkaG0tO0ij3C5Lwmf1EiyjHg==",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/async": {
      "version": "2.1.4",
      "resolved": "https://registry.npmjs.org/async/-/async-2.1.4.tgz",
      "integrity": "sha1-LSFgx3iAMuTdbL4lAvH5osj2zeQ=",
      "dependencies": {
        "lodash": "^4.14.0"
      }
    },
    "node_modules/async-limiter": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/async-limiter/-/async-limiter-1.0.1.tgz",
      "integrity": "sha512-csOlWGAcRFJaI6m+F2WKdnMKr4HhdhFVBk0H/QbJFMCr+uO2kwohwXQPxw/9OCxp05r5ghVBFSyioixx3gfkNQ==",
      "dev": true
    },
    "node_modules/asynckit": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/asynckit/-/asynckit-0.4.0.tgz",
      "integrity": "sha1-x57Zf380y48robyXkLzDZkdLS3k=",
      "dev": true
    },
    "node_modules/atob": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/atob/-/atob-2.1.2.tgz",
      "integrity": "sha512-Wm6ukoaOGJi/73p/cl2GvLjTI5JM1k/O14isD73YML8StrH/7/lRFgmg8nICZgD3bZZvjwCGxtMOD3wWNAu8cg==",
      "dev": true,
      "bin": {
        "atob": "bin/atob.js"
      },
      "engines": {
        "node": ">= 4.5.0"
      }
    },
    "node_modules/aws-sdk": {
      "version": "2.941.0",
      "resolved": "https://registry.npmjs.org/aws-sdk/-/aws-sdk-2.941.0.tgz",
      "integrity": "sha512-MzVYHaZNtWy7UgFnCBg8rXFfSd4svjUVkLpQnPb/XJb3Qq4082SN5ZjaDITFFAQs/xttV3jm5jtbbcc5dpICYg==",
      "hasInstallScript": true,
      "dependencies": {
        "buffer": "4.9.2",
        "events": "1.1.1",
        "ieee754": "1.1.13",
        "jmespath": "0.15.0",
        "querystring": "0.2.0",
        "sax": "1.2.1",
        "url": "0.10.3",
        "uuid": "3.3.2",
        "xml2js": "0.4.19"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/aws-sdk/node_modules/querystring": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/querystring/-/querystring-0.2.0.tgz",
      "integrity": "sha1-sgmEkgO7Jd+CDadW50cAWHhSFiA=",
      "deprecated": "The",
      "engines": {
        "node": ">=0.4.x"
      }
    },
    "node_modules/aws-sdk/node_modules/sax": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/sax/-/sax-1.2.1.tgz",
      "integrity": "sha1-e45lYZCyKOgaZq6nSEgNgozS03o="
    },
    "node_modules/aws-sdk/node_modules/uuid": {
      "version": "3.3.2",
      "resolved": "https://registry.npmjs.org/uuid/-/uuid-3.3.2.tgz",
      "integrity": "sha512-yXJmeNaw3DnnKAOKJE51sL/ZaYfWJRl1pK9dr19YFCu0ObS231AB1/LbqTKRAQ5kw8A90rA6fr4riOUpTZvQZA==",
      "deprecated": "Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.",
      "bin": {
        "uuid": "bin/uuid"
      }
    },
    "node_modules/aws-sign2": {
      "version": "0.7.0",
      "resolved": "https://registry.npmjs.org/aws-sign2/-/aws-sign2-0.7.0.tgz",
      "integrity": "sha1-tG6JCTSpWR8tL2+G1+ap8bP+dqg=",
      "dev": true,
      "engines": {
        "node": "*"
      }
    },
    "node_modules/aws4": {
      "version": "1.11.0",
      "resolved": "https://registry.npmjs.org/aws4/-/aws4-1.11.0.tgz",
      "integrity": "sha512-xh1Rl34h6Fi1DC2WWKfxUTVqRsNnr6LsKz2+hfwDxQJWmrx8+c7ylaqBMcHfl1U1r2dsifOvKX3LQuLNZ+XSvA==",
      "dev": true
    },
    "node_modules/babel-code-frame": {
      "version": "6.26.0",
      "resolved": "https://registry.npmjs.org/babel-code-frame/-/babel-code-frame-6.26.0.tgz",
      "integrity": "sha1-Y/1D99weO7fONZR9uP42mj9Yx0s=",
      "dev": true,
      "dependencies": {
        "chalk": "^1.1.3",
        "esutils": "^2.0.2",
        "js-tokens": "^3.0.2"
      }
    },
    "node_modules/babel-code-frame/node_modules/ansi-regex": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz",
      "integrity": "sha1-w7M6te42DYbg5ijwRorn7yfWVN8=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/babel-code-frame/node_modules/ansi-styles": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-2.2.1.tgz",
      "integrity": "sha1-tDLdM1i2NM914eRmQ2gkBTPB3b4=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/babel-code-frame/node_modules/chalk": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-1.1.3.tgz",
      "integrity": "sha1-qBFcVeSnAv5NFQq9OHKCKn4J/Jg=",
      "dev": true,
      "dependencies": {
        "ansi-styles": "^2.2.1",
        "escape-string-regexp": "^1.0.2",
        "has-ansi": "^2.0.0",
        "strip-ansi": "^3.0.0",
        "supports-color": "^2.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/babel-code-frame/node_modules/strip-ansi": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-3.0.1.tgz",
      "integrity": "sha1-ajhfuIU9lS1f8F0Oiq+UJ43GPc8=",
      "dev": true,
      "dependencies": {
        "ansi-regex": "^2.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/babel-code-frame/node_modules/supports-color": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-2.0.0.tgz",
      "integrity": "sha1-U10EXOa2Nj+kARcIRimZXp3zJMc=",
      "dev": true,
      "engines": {
        "node": ">=0.8.0"
      }
    },
    "node_modules/babel-core": {
      "version": "6.26.3",
      "resolved": "https://registry.npmjs.org/babel-core/-/babel-core-6.26.3.tgz",
      "integrity": "sha512-6jyFLuDmeidKmUEb3NM+/yawG0M2bDZ9Z1qbZP59cyHLz8kYGKYwpJP0UwUKKUiTRNvxfLesJnTedqczP7cTDA==",
      "dev": true,
      "dependencies": {
        "babel-code-frame": "^6.26.0",
        "babel-generator": "^6.26.0",
        "babel-helpers": "^6.24.1",
        "babel-messages": "^6.23.0",
        "babel-register": "^6.26.0",
        "babel-runtime": "^6.26.0",
        "babel-template": "^6.26.0",
        "babel-traverse": "^6.26.0",
        "babel-types": "^6.26.0",
        "babylon": "^6.18.0",
        "convert-source-map": "^1.5.1",
        "debug": "^2.6.9",
        "json5": "^0.5.1",
        "lodash": "^4.17.4",
        "minimatch": "^3.0.4",
        "path-is-absolute": "^1.0.1",
        "private": "^0.1.8",
        "slash": "^1.0.0",
        "source-map": "^0.5.7"
      }
    },
    "node_modules/babel-core/node_modules/json5": {
      "version": "0.5.1",
      "resolved": "https://registry.npmjs.org/json5/-/json5-0.5.1.tgz",
      "integrity": "sha1-Hq3nrMASA0rYTiOWdn6tn6VJWCE=",
      "dev": true,
      "bin": {
        "json5": "lib/cli.js"
      }
    },
    "node_modules/babel-generator": {
      "version": "6.26.1",
      "resolved": "https://registry.npmjs.org/babel-generator/-/babel-generator-6.26.1.tgz",
      "integrity": "sha512-HyfwY6ApZj7BYTcJURpM5tznulaBvyio7/0d4zFOeMPUmfxkCjHocCuoLa2SAGzBI8AREcH3eP3758F672DppA==",
      "dev": true,
      "dependencies": {
        "babel-messages": "^6.23.0",
        "babel-runtime": "^6.26.0",
        "babel-types": "^6.26.0",
        "detect-indent": "^4.0.0",
        "jsesc": "^1.3.0",
        "lodash": "^4.17.4",
        "source-map": "^0.5.7",
        "trim-right": "^1.0.1"
      }
    },
    "node_modules/babel-helpers": {
      "version": "6.24.1",
      "resolved": "https://registry.npmjs.org/babel-helpers/-/babel-helpers-6.24.1.tgz",
      "integrity": "sha1-NHHenK7DiOXIUOWX5Yom3fN2ArI=",
      "dev": true,
      "dependencies": {
        "babel-runtime": "^6.22.0",
        "babel-template": "^6.24.1"
      }
    },
    "node_modules/babel-jest": {
      "version": "22.4.4",
      "resolved": "https://registry.npmjs.org/babel-jest/-/babel-jest-22.4.4.tgz",
      "integrity": "sha512-A9NB6/lZhYyypR9ATryOSDcqBaqNdzq4U+CN+/wcMsLcmKkPxQEoTKLajGfd3IkxNyVBT8NewUK2nWyGbSzHEQ==",
      "dev": true,
      "dependencies": {
        "babel-plugin-istanbul": "^4.1.5",
        "babel-preset-jest": "^22.4.4"
      },
      "peerDependencies": {
        "babel-core": "^6.0.0 || ^7.0.0-0"
      }
    },
    "node_modules/babel-messages": {
      "version": "6.23.0",
      "resolved": "https://registry.npmjs.org/babel-messages/-/babel-messages-6.23.0.tgz",
      "integrity": "sha1-8830cDhYA1sqKVHG7F7fbGLyYw4=",
      "dev": true,
      "dependencies": {
        "babel-runtime": "^6.22.0"
      }
    },
    "node_modules/babel-plugin-istanbul": {
      "version": "4.1.6",
      "resolved": "https://registry.npmjs.org/babel-plugin-istanbul/-/babel-plugin-istanbul-4.1.6.tgz",
      "integrity": "sha512-PWP9FQ1AhZhS01T/4qLSKoHGY/xvkZdVBGlKM/HuxxS3+sC66HhTNR7+MpbO/so/cz/wY94MeSWJuP1hXIPfwQ==",
      "dev": true,
      "dependencies": {
        "babel-plugin-syntax-object-rest-spread": "^6.13.0",
        "find-up": "^2.1.0",
        "istanbul-lib-instrument": "^1.10.1",
        "test-exclude": "^4.2.1"
      }
    },
    "node_modules/babel-plugin-jest-hoist": {
      "version": "22.4.4",
      "resolved": "https://registry.npmjs.org/babel-plugin-jest-hoist/-/babel-plugin-jest-hoist-22.4.4.tgz",
      "integrity": "sha512-DUvGfYaAIlkdnygVIEl0O4Av69NtuQWcrjMOv6DODPuhuGLDnbsARz3AwiiI/EkIMMlxQDUcrZ9yoyJvTNjcVQ==",
      "dev": true
    },
    "node_modules/babel-plugin-syntax-object-rest-spread": {
      "version": "6.13.0",
      "resolved": "https://registry.npmjs.org/babel-plugin-syntax-object-rest-spread/-/babel-plugin-syntax-object-rest-spread-6.13.0.tgz",
      "integrity": "sha1-/WU28rzhODb/o6VFjEkDpZe7O/U=",
      "dev": true
    },
    "node_modules/babel-preset-jest": {
      "version": "22.4.4",
      "resolved": "https://registry.npmjs.org/babel-preset-jest/-/babel-preset-jest-22.4.4.tgz",
      "integrity": "sha512-+dxMtOFwnSYWfum0NaEc0O03oSdwBsjx4tMSChRDPGwu/4wSY6Q6ANW3wkjKpJzzguaovRs/DODcT4hbSN8yiA==",
      "dev": true,
      "dependencies": {
        "babel-plugin-jest-hoist": "^22.4.4",
        "babel-plugin-syntax-object-rest-spread": "^6.13.0"
      }
    },
    "node_modules/babel-register": {
      "version": "6.26.0",
      "resolved": "https://registry.npmjs.org/babel-register/-/babel-register-6.26.0.tgz",
      "integrity": "sha1-btAhFz4vy0htestFxgCahW9kcHE=",
      "dev": true,
      "dependencies": {
        "babel-core": "^6.26.0",
        "babel-runtime": "^6.26.0",
        "core-js": "^2.5.0",
        "home-or-tmp": "^2.0.0",
        "lodash": "^4.17.4",
        "mkdirp": "^0.5.1",
        "source-map-support": "^0.4.15"
      }
    },
    "node_modules/babel-register/node_modules/mkdirp": {
      "version": "0.5.5",
      "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-0.5.5.tgz",
      "integrity": "sha512-NKmAlESf6jMGym1++R0Ra7wvhV+wFW63FaSOFPwRahvea0gMUcGUhVeAg/0BC0wiv9ih5NYPB1Wn1UEI1/L+xQ==",
      "dev": true,
      "dependencies": {
        "minimist": "^1.2.5"
      },
      "bin": {
        "mkdirp": "bin/cmd.js"
      }
    },
    "node_modules/babel-register/node_modules/source-map-support": {
      "version": "0.4.18",
      "resolved": "https://registry.npmjs.org/source-map-support/-/source-map-support-0.4.18.tgz",
      "integrity": "sha512-try0/JqxPLF9nOjvSta7tVondkP5dwgyLDjVoyMDlmjugT2lRZ1OfsrYTkCd2hkDnJTKRbO/Rl3orm8vlsUzbA==",
      "dev": true,
      "dependencies": {
        "source-map": "^0.5.6"
      }
    },
    "node_modules/babel-runtime": {
      "version": "6.26.0",
      "resolved": "https://registry.npmjs.org/babel-runtime/-/babel-runtime-6.26.0.tgz",
      "integrity": "sha1-llxwWGaOgrVde/4E/yM3vItWR/4=",
      "dev": true,
      "dependencies": {
        "core-js": "^2.4.0",
        "regenerator-runtime": "^0.11.0"
      }
    },
    "node_modules/babel-template": {
      "version": "6.26.0",
      "resolved": "https://registry.npmjs.org/babel-template/-/babel-template-6.26.0.tgz",
      "integrity": "sha1-3gPi0WOWsGn0bdn/+FIfsaDjXgI=",
      "dev": true,
      "dependencies": {
        "babel-runtime": "^6.26.0",
        "babel-traverse": "^6.26.0",
        "babel-types": "^6.26.0",
        "babylon": "^6.18.0",
        "lodash": "^4.17.4"
      }
    },
    "node_modules/babel-traverse": {
      "version": "6.26.0",
      "resolved": "https://registry.npmjs.org/babel-traverse/-/babel-traverse-6.26.0.tgz",
      "integrity": "sha1-RqnL1+3MYsjlwGTi0tjQ9ANXZu4=",
      "dev": true,
      "dependencies": {
        "babel-code-frame": "^6.26.0",
        "babel-messages": "^6.23.0",
        "babel-runtime": "^6.26.0",
        "babel-types": "^6.26.0",
        "babylon": "^6.18.0",
        "debug": "^2.6.8",
        "globals": "^9.18.0",
        "invariant": "^2.2.2",
        "lodash": "^4.17.4"
      }
    },
    "node_modules/babel-types": {
      "version": "6.26.0",
      "resolved": "https://registry.npmjs.org/babel-types/-/babel-types-6.26.0.tgz",
      "integrity": "sha1-o7Bz+Uq0nrb6Vc1lInozQ4BjJJc=",
      "dev": true,
      "dependencies": {
        "babel-runtime": "^6.26.0",
        "esutils": "^2.0.2",
        "lodash": "^4.17.4",
        "to-fast-properties": "^1.0.3"
      }
    },
    "node_modules/babylon": {
      "version": "6.18.0",
      "resolved": "https://registry.npmjs.org/babylon/-/babylon-6.18.0.tgz",
      "integrity": "sha512-q/UEjfGJ2Cm3oKV71DJz9d25TPnq5rhBVL2Q4fA5wcC3jcrdn7+SssEybFIxwAvvP+YCsCYNKughoF33GxgycQ==",
      "dev": true,
      "bin": {
        "babylon": "bin/babylon.js"
      }
    },
    "node_modules/balanced-match": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
      "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw=="
    },
    "node_modules/base": {
      "version": "0.11.2",
      "resolved": "https://registry.npmjs.org/base/-/base-0.11.2.tgz",
      "integrity": "sha512-5T6P4xPgpp0YDFvSWwEZ4NoE3aM4QBQXDzmVbraCkFj8zHM+mba8SyqB5DbZWyR7mYHo6Y7BdQo3MoA4m0TeQg==",
      "dev": true,
      "dependencies": {
        "cache-base": "^1.0.1",
        "class-utils": "^0.3.5",
        "component-emitter": "^1.2.1",
        "define-property": "^1.0.0",
        "isobject": "^3.0.1",
        "mixin-deep": "^1.2.0",
        "pascalcase": "^0.1.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/base/node_modules/define-property": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
      "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
      "dev": true,
      "dependencies": {
        "is-descriptor": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/base/node_modules/is-accessor-descriptor": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
      "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
      "dev": true,
      "dependencies": {
        "kind-of": "^6.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/base/node_modules/is-data-descriptor": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
      "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
      "dev": true,
      "dependencies": {
        "kind-of": "^6.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/base/node_modules/is-descriptor": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
      "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
      "dev": true,
      "dependencies": {
        "is-accessor-descriptor": "^1.0.0",
        "is-data-descriptor": "^1.0.0",
        "kind-of": "^6.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/base/node_modules/isobject": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
      "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/base/node_modules/kind-of": {
      "version": "6.0.3",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",
      "integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/base64-js": {
      "version": "1.5.1",
      "resolved": "https://registry.npmjs.org/base64-js/-/base64-js-1.5.1.tgz",
      "integrity": "sha512-AKpaYlHn8t4SVbOHCy+b5+KKgvR4vrsD8vbvrbiQJps7fKDTkjkDry6ji0rUJjC0kzbNePLwzxq8iypo41qeWA==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ]
    },
    "node_modules/base64url": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/base64url/-/base64url-3.0.1.tgz",
      "integrity": "sha512-ir1UPr3dkwexU7FdV8qBBbNDRUhMmIekYMFZfi+C/sLNnRESKPl23nB9b2pltqfOQNnGzsDdId90AEtG5tCx4A==",
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/bcrypt": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/bcrypt/-/bcrypt-5.0.1.tgz",
      "integrity": "sha512-9BTgmrhZM2t1bNuDtrtIMVSmmxZBrJ71n8Wg+YgdjHuIWYF7SjjmCPZFB+/5i/o/PIeRpwVJR3P+NrpIItUjqw==",
      "hasInstallScript": true,
      "dependencies": {
        "@mapbox/node-pre-gyp": "^1.0.0",
        "node-addon-api": "^3.1.0"
      },
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/bcrypt-pbkdf": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/bcrypt-pbkdf/-/bcrypt-pbkdf-1.0.2.tgz",
      "integrity": "sha1-pDAdOJtqQ/m2f/PKEaP2Y342Dp4=",
      "dev": true,
      "dependencies": {
        "tweetnacl": "^0.14.3"
      }
    },
    "node_modules/binary-extensions": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.2.0.tgz",
      "integrity": "sha512-jDctJ/IVQbZoJykoeHbhXpOlNBqGNcwXJKJog42E5HDPUwQTSdjCHdihjj0DlnheQ7blbT6dHOafNAiS8ooQKA==",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/bl": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/bl/-/bl-2.2.1.tgz",
      "integrity": "sha512-6Pesp1w0DEX1N550i/uGV/TqucVL4AM/pgThFSN/Qq9si1/DF9aIHs1BxD8V/QU0HoeHO6cQRTAuYnLPKq1e4g==",
      "dependencies": {
        "readable-stream": "^2.3.5",
        "safe-buffer": "^5.1.1"
      }
    },
    "node_modules/bluebird": {
      "version": "3.5.1",
      "resolved": "https://registry.npmjs.org/bluebird/-/bluebird-3.5.1.tgz",
      "integrity": "sha512-MKiLiV+I1AA596t9w1sQJ8jkiSr5+ZKi0WKrYGUn6d1Fx+Ij4tIj+m2WMQSGczs5jZVxV339chE8iwk6F64wjA=="
    },
    "node_modules/body-parser": {
      "version": "1.19.0",
      "resolved": "https://registry.npmjs.org/body-parser/-/body-parser-1.19.0.tgz",
      "integrity": "sha512-dhEPs72UPbDnAQJ9ZKMNTP6ptJaionhP5cBb541nXPlW60Jepo9RV/a4fX4XWW9CuFNK22krhrj1+rgzifNCsw==",
      "dependencies": {
        "bytes": "3.1.0",
        "content-type": "~1.0.4",
        "debug": "2.6.9",
        "depd": "~1.1.2",
        "http-errors": "1.7.2",
        "iconv-lite": "0.4.24",
        "on-finished": "~2.3.0",
        "qs": "6.7.0",
        "raw-body": "2.4.0",
        "type-is": "~1.6.17"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/bowser": {
      "version": "2.11.0",
      "resolved": "https://registry.npmjs.org/bowser/-/bowser-2.11.0.tgz",
      "integrity": "sha512-AlcaJBi/pqqJBIQ8U9Mcpc9i8Aqxn88Skv5d+xBX006BY5u8N3mGLHa5Lgppa7L/HfwgwLgZ6NYs+Ag6uUmJRA=="
    },
    "node_modules/boxen": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/boxen/-/boxen-4.2.0.tgz",
      "integrity": "sha512-eB4uT9RGzg2odpER62bBwSLvUeGC+WbRjjyyFhGsKnc8wp/m0+hQsMUvUe3H2V0D5vw0nBdO1hCJoZo5mKeuIQ==",
      "dependencies": {
        "ansi-align": "^3.0.0",
        "camelcase": "^5.3.1",
        "chalk": "^3.0.0",
        "cli-boxes": "^2.2.0",
        "string-width": "^4.1.0",
        "term-size": "^2.1.0",
        "type-fest": "^0.8.1",
        "widest-line": "^3.1.0"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/brace-expansion": {
      "version": "1.1.11",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
      "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
      "dependencies": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "node_modules/braces": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.2.tgz",
      "integrity": "sha512-b8um+L1RzM3WDSzvhm6gIz1yfTbBt6YTlcEKAvsmqCZZFw46z626lVj9j1yEPW33H5H+lBQpZMP1k8l+78Ha0A==",
      "dependencies": {
        "fill-range": "^7.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/browser-process-hrtime": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/browser-process-hrtime/-/browser-process-hrtime-1.0.0.tgz",
      "integrity": "sha512-9o5UecI3GhkpM6DrXr69PblIuWxPKk9Y0jHBRhdocZ2y7YECBFCsHm79Pr3OyR2AvjhDkabFJaDJMYRazHgsow==",
      "dev": true
    },
    "node_modules/browser-resolve": {
      "version": "1.11.3",
      "resolved": "https://registry.npmjs.org/browser-resolve/-/browser-resolve-1.11.3.tgz",
      "integrity": "sha512-exDi1BYWB/6raKHmDTCicQfTkqwN5fioMFV4j8BsfMU4R2DK/QfZfK7kOVkmWCNANf0snkBzqGqAJBao9gZMdQ==",
      "dev": true,
      "dependencies": {
        "resolve": "1.1.7"
      }
    },
    "node_modules/bser": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/bser/-/bser-2.1.1.tgz",
      "integrity": "sha512-gQxTNE/GAfIIrmHLUE3oJyp5FO6HRBfhjnw4/wMmA63ZGDJnWBmgY/lyQBpnDUkGmAhbSe39tx2d/iTOAfglwQ==",
      "dev": true,
      "dependencies": {
        "node-int64": "^0.4.0"
      }
    },
    "node_modules/bson": {
      "version": "1.1.6",
      "resolved": "https://registry.npmjs.org/bson/-/bson-1.1.6.tgz",
      "integrity": "sha512-EvVNVeGo4tHxwi8L6bPj3y3itEvStdwvvlojVxxbyYfoaxJ6keLgrTuKdyfEAszFK+H3olzBuafE0yoh0D1gdg==",
      "engines": {
        "node": ">=0.6.19"
      }
    },
    "node_modules/buffer": {
      "version": "4.9.2",
      "resolved": "https://registry.npmjs.org/buffer/-/buffer-4.9.2.tgz",
      "integrity": "sha512-xq+q3SRMOxGivLhBNaUdC64hDTQwejJ+H0T/NB1XMtTVEwNTrfFF3gAxiyW0Bu/xWEGhjVKgUcMhCrUy2+uCWg==",
      "dependencies": {
        "base64-js": "^1.0.2",
        "ieee754": "^1.1.4",
        "isarray": "^1.0.0"
      }
    },
    "node_modules/buffer-equal-constant-time": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/buffer-equal-constant-time/-/buffer-equal-constant-time-1.0.1.tgz",
      "integrity": "sha1-+OcRMvf/5uAaXJaXpMbz5I1cyBk="
    },
    "node_modules/buffer-from": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/buffer-from/-/buffer-from-1.1.1.tgz",
      "integrity": "sha512-MQcXEUbCKtEo7bhqEs6560Hyd4XaovZlO/k9V3hjVUF/zwW7KBVdSK4gIt/bzwS9MbR5qob+F5jusZsb0YQK2A=="
    },
    "node_modules/buffer-shims": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/buffer-shims/-/buffer-shims-1.0.0.tgz",
      "integrity": "sha1-mXjOMXOIxkmth5MCjDR37wRKi1E="
    },
    "node_modules/busboy": {
      "version": "0.2.14",
      "resolved": "https://registry.npmjs.org/busboy/-/busboy-0.2.14.tgz",
      "integrity": "sha1-bCpiLvz0fFe7vh4qnDetNseSVFM=",
      "dependencies": {
        "dicer": "0.2.5",
        "readable-stream": "1.1.x"
      },
      "engines": {
        "node": ">=0.8.0"
      }
    },
    "node_modules/busboy/node_modules/isarray": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/isarray/-/isarray-0.0.1.tgz",
      "integrity": "sha1-ihis/Kmo9Bd+Cav8YDiTmwXR7t8="
    },
    "node_modules/busboy/node_modules/readable-stream": {
      "version": "1.1.14",
      "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-1.1.14.tgz",
      "integrity": "sha1-fPTFTvZI44EwhMY23SB54WbAgdk=",
      "dependencies": {
        "core-util-is": "~1.0.0",
        "inherits": "~2.0.1",
        "isarray": "0.0.1",
        "string_decoder": "~0.10.x"
      }
    },
    "node_modules/busboy/node_modules/string_decoder": {
      "version": "0.10.31",
      "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-0.10.31.tgz",
      "integrity": "sha1-YuIDvEF2bGwoyfyEMB2rHFMQ+pQ="
    },
    "node_modules/bytes": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.0.tgz",
      "integrity": "sha512-zauLjrfCG+xvoyaqLoV8bLVXXNGC4JqlxFCutSDWA6fJrTo2ZuvLYTqZ7aHBLZSMOopbzwv8f+wZcVzfVTI2Dg==",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/cache-base": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/cache-base/-/cache-base-1.0.1.tgz",
      "integrity": "sha512-AKcdTnFSWATd5/GCPRxr2ChwIJ85CeyrEyjRHlKxQ56d4XJMGym0uAiKn0xbLOGOl3+yRpOTi484dVCEc5AUzQ==",
      "dev": true,
      "dependencies": {
        "collection-visit": "^1.0.0",
        "component-emitter": "^1.2.1",
        "get-value": "^2.0.6",
        "has-value": "^1.0.0",
        "isobject": "^3.0.1",
        "set-value": "^2.0.0",
        "to-object-path": "^0.3.0",
        "union-value": "^1.0.0",
        "unset-value": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/cache-base/node_modules/isobject": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
      "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/cacheable-request": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/cacheable-request/-/cacheable-request-6.1.0.tgz",
      "integrity": "sha512-Oj3cAGPCqOZX7Rz64Uny2GYAZNliQSqfbePrgAQ1wKAihYmCUnraBtJtKcGR4xz7wF+LoJC+ssFZvv5BgF9Igg==",
      "dependencies": {
        "clone-response": "^1.0.2",
        "get-stream": "^5.1.0",
        "http-cache-semantics": "^4.0.0",
        "keyv": "^3.0.0",
        "lowercase-keys": "^2.0.0",
        "normalize-url": "^4.1.0",
        "responselike": "^1.0.2"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/cacheable-request/node_modules/get-stream": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-5.2.0.tgz",
      "integrity": "sha512-nBF+F1rAZVCu/p7rjzgA+Yb4lfYXrpl7a6VmJrU8wF9I1CKvP/QwPNZHnOlwbTkY6dvtFIzFMSyQXbLoTQPRpA==",
      "dependencies": {
        "pump": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/cacheable-request/node_modules/lowercase-keys": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/lowercase-keys/-/lowercase-keys-2.0.0.tgz",
      "integrity": "sha512-tqNXrS78oMOE73NMxK4EMLQsQowWf8jKooH9g7xPavRT706R6bkQJ6DY2Te7QukaZsulxa30wQ7bk0pm4XiHmA==",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/call-bind": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/call-bind/-/call-bind-1.0.2.tgz",
      "integrity": "sha512-7O+FbCihrB5WGbFYesctwmTKae6rOiIzmz1icreWJ+0aA7LJfuqhEso2T9ncpcFtzMQtzXf2QGGueWJGTYsqrA==",
      "dev": true,
      "dependencies": {
        "function-bind": "^1.1.1",
        "get-intrinsic": "^1.0.2"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/callsites": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/callsites/-/callsites-2.0.0.tgz",
      "integrity": "sha1-BuuE8A7qQT2oav/vrL/7Ngk7PFA=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/camelcase": {
      "version": "5.3.1",
      "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-5.3.1.tgz",
      "integrity": "sha512-L28STB170nwWS63UjtlEOE3dldQApaJXZkOI1uMFfzf3rRuPegHaHesyee+YxQ+W6SvRDQV6UrdOdRiR153wJg==",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/capture-exit": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/capture-exit/-/capture-exit-1.2.0.tgz",
      "integrity": "sha1-HF/MSJ/QqwDU8ax64QcuMXP7q28=",
      "dev": true,
      "dependencies": {
        "rsvp": "^3.3.3"
      }
    },
    "node_modules/caseless": {
      "version": "0.12.0",
      "resolved": "https://registry.npmjs.org/caseless/-/caseless-0.12.0.tgz",
      "integrity": "sha1-G2gcIf+EAzyCZUMJBolCDRhxUdw=",
      "dev": true
    },
    "node_modules/chalk": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-3.0.0.tgz",
      "integrity": "sha512-4D3B6Wf41KOYRFdszmDqMCGq5VV/uMAB273JILmO+3jAlh8X4qDtdtgCR3fxtbLEMzSx22QdhnDcJvu2u1fVwg==",
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/chalk/node_modules/has-flag": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
      "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/chalk/node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/chokidar": {
      "version": "3.5.1",
      "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.5.1.tgz",
      "integrity": "sha512-9+s+Od+W0VJJzawDma/gvBNQqkTiqYTWLuZoyAsivsI4AaWTCzHG06/TMjsf1cYe9Cb97UCEhjz7HvnPk2p/tw==",
      "dependencies": {
        "anymatch": "~3.1.1",
        "braces": "~3.0.2",
        "glob-parent": "~5.1.0",
        "is-binary-path": "~2.1.0",
        "is-glob": "~4.0.1",
        "normalize-path": "~3.0.0",
        "readdirp": "~3.5.0"
      },
      "engines": {
        "node": ">= 8.10.0"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.1"
      }
    },
    "node_modules/chownr": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/chownr/-/chownr-2.0.0.tgz",
      "integrity": "sha512-bIomtDF5KGpdogkLd9VspvFzk9KfpyyGlS8YFVZl7TGPBHL5snIOnxeshwVgPteQ9b4Eydl+pVbIyE1DcvCWgQ==",
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/ci-info": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/ci-info/-/ci-info-2.0.0.tgz",
      "integrity": "sha512-5tK7EtrZ0N+OLFMthtqOj4fI2Jeb88C4CAZPu25LDVUgXJ0A3Js4PMGqrn0JU1W0Mh1/Z8wZzYPxqUrXeBboCQ=="
    },
    "node_modules/class-utils": {
      "version": "0.3.6",
      "resolved": "https://registry.npmjs.org/class-utils/-/class-utils-0.3.6.tgz",
      "integrity": "sha512-qOhPa/Fj7s6TY8H8esGu5QNpMMQxz79h+urzrNYN6mn+9BnxlDGf5QZ+XeCDsxSjPqsSR56XOZOJmpeurnLMeg==",
      "dev": true,
      "dependencies": {
        "arr-union": "^3.1.0",
        "define-property": "^0.2.5",
        "isobject": "^3.0.0",
        "static-extend": "^0.1.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/class-utils/node_modules/define-property": {
      "version": "0.2.5",
      "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
      "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
      "dev": true,
      "dependencies": {
        "is-descriptor": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/class-utils/node_modules/isobject": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
      "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/cli-boxes": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/cli-boxes/-/cli-boxes-2.2.1.tgz",
      "integrity": "sha512-y4coMcylgSCdVinjiDBuR8PCC2bLjyGTwEmPb9NHR/QaNU6EUOXcTY/s6VjGMD6ENSEaeQYHCY0GNGS5jfMwPw==",
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/cliui": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/cliui/-/cliui-4.1.0.tgz",
      "integrity": "sha512-4FG+RSG9DL7uEwRUZXZn3SS34DiDPfzP0VOiEwtUWlE+AR2EIg+hSyvrIgUUfhdgR/UkAeW2QHgeP+hWrXs7jQ==",
      "dev": true,
      "dependencies": {
        "string-width": "^2.1.1",
        "strip-ansi": "^4.0.0",
        "wrap-ansi": "^2.0.0"
      }
    },
    "node_modules/cliui/node_modules/ansi-regex": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-3.0.0.tgz",
      "integrity": "sha1-7QMXwyIGT3lGbAKWa922Bas32Zg=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/cliui/node_modules/string-width": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-2.1.1.tgz",
      "integrity": "sha512-nOqH59deCq9SRHlxq1Aw85Jnt4w6KvLKqWVik6oA9ZklXLNIOlqg4F2yrT1MVaTjAqvVwdfeZ7w7aCvJD7ugkw==",
      "dev": true,
      "dependencies": {
        "is-fullwidth-code-point": "^2.0.0",
        "strip-ansi": "^4.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/cliui/node_modules/strip-ansi": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-4.0.0.tgz",
      "integrity": "sha1-qEeQIusaw2iocTibY1JixQXuNo8=",
      "dev": true,
      "dependencies": {
        "ansi-regex": "^3.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/clone-response": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/clone-response/-/clone-response-1.0.2.tgz",
      "integrity": "sha1-0dyXOSAxTfZ/vrlCI7TuNQI56Ws=",
      "dependencies": {
        "mimic-response": "^1.0.0"
      }
    },
    "node_modules/co": {
      "version": "4.6.0",
      "resolved": "https://registry.npmjs.org/co/-/co-4.6.0.tgz",
      "integrity": "sha1-bqa989hTrlTMuOR7+gvz+QMfsYQ=",
      "dev": true,
      "engines": {
        "iojs": ">= 1.0.0",
        "node": ">= 0.12.0"
      }
    },
    "node_modules/code-point-at": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/code-point-at/-/code-point-at-1.1.0.tgz",
      "integrity": "sha1-DQcLTQQ6W+ozovGkDi7bPZpMz3c=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/collection-visit": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/collection-visit/-/collection-visit-1.0.0.tgz",
      "integrity": "sha1-S8A3PBZLwykbTTaMgpzxqApZ3KA=",
      "dev": true,
      "dependencies": {
        "map-visit": "^1.0.0",
        "object-visit": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/color": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/color/-/color-3.0.0.tgz",
      "integrity": "sha512-jCpd5+s0s0t7p3pHQKpnJ0TpQKKdleP71LWcA0aqiljpiuAkOSUFN/dyH8ZwF0hRmFlrIuRhufds1QyEP9EB+w==",
      "dependencies": {
        "color-convert": "^1.9.1",
        "color-string": "^1.5.2"
      }
    },
    "node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
    },
    "node_modules/color-string": {
      "version": "1.5.5",
      "resolved": "https://registry.npmjs.org/color-string/-/color-string-1.5.5.tgz",
      "integrity": "sha512-jgIoum0OfQfq9Whcfc2z/VhCNcmQjWbey6qBX0vqt7YICflUmBCh9E9CiQD5GSJ+Uehixm3NUwHVhqUAWRivZg==",
      "dependencies": {
        "color-name": "^1.0.0",
        "simple-swizzle": "^0.2.2"
      }
    },
    "node_modules/color/node_modules/color-convert": {
      "version": "1.9.3",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
      "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
      "dependencies": {
        "color-name": "1.1.3"
      }
    },
    "node_modules/color/node_modules/color-name": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
      "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU="
    },
    "node_modules/colors": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/colors/-/colors-1.4.0.tgz",
      "integrity": "sha512-a+UqTh4kgZg/SlGvfbzDHpgRu7AAQOmmqRHJnxhRZICKFUT91brVhNNt58CMWU9PsBbv3PDCZUHbVxuDiH2mtA==",
      "engines": {
        "node": ">=0.1.90"
      }
    },
    "node_modules/colorspace": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/colorspace/-/colorspace-1.1.2.tgz",
      "integrity": "sha512-vt+OoIP2d76xLhjwbBaucYlNSpPsrJWPlBTtwCpQKIu6/CSMutyzX93O/Do0qzpH3YoHEes8YEFXyZ797rEhzQ==",
      "dependencies": {
        "color": "3.0.x",
        "text-hex": "1.0.x"
      }
    },
    "node_modules/combined-stream": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/combined-stream/-/combined-stream-1.0.8.tgz",
      "integrity": "sha512-FQN4MRfuJeHf7cBbBMJFXhKSDq+2kAArBlmRBvcvFE5BB1HZKXtSFASDhdlz9zOYwxh8lDdnvmMOe/+5cdoEdg==",
      "dev": true,
      "dependencies": {
        "delayed-stream": "~1.0.0"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/component-emitter": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/component-emitter/-/component-emitter-1.3.0.tgz",
      "integrity": "sha512-Rd3se6QB+sO1TwqZjscQrurpEPIfO0/yYnSin6Q/rD3mOutHvUrCAhJub3r90uNb+SESBuE0QYoB90YdfatsRg==",
      "dev": true
    },
    "node_modules/compressible": {
      "version": "2.0.18",
      "resolved": "https://registry.npmjs.org/compressible/-/compressible-2.0.18.tgz",
      "integrity": "sha512-AF3r7P5dWxL8MxyITRMlORQNaOA2IkAFaTr4k7BUumjPtRpGDTZpl0Pb1XCO6JeDCBdp126Cgs9sMxqSjgYyRg==",
      "dependencies": {
        "mime-db": ">= 1.43.0 < 2"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/compression": {
      "version": "1.7.4",
      "resolved": "https://registry.npmjs.org/compression/-/compression-1.7.4.tgz",
      "integrity": "sha512-jaSIDzP9pZVS4ZfQ+TzvtiWhdpFhE2RDHz8QJkpX9SIpLq88VueF5jJw6t+6CUQcAoA6t+x89MLrWAqpfDE8iQ==",
      "dependencies": {
        "accepts": "~1.3.5",
        "bytes": "3.0.0",
        "compressible": "~2.0.16",
        "debug": "2.6.9",
        "on-headers": "~1.0.2",
        "safe-buffer": "5.1.2",
        "vary": "~1.1.2"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/compression/node_modules/bytes": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.0.0.tgz",
      "integrity": "sha1-0ygVQE1olpn4Wk6k+odV3ROpYEg=",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/concat-map": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
      "integrity": "sha1-2Klr13/Wjfd5OnMDajug1UBdR3s="
    },
    "node_modules/concat-stream": {
      "version": "1.6.2",
      "resolved": "https://registry.npmjs.org/concat-stream/-/concat-stream-1.6.2.tgz",
      "integrity": "sha512-27HBghJxjiZtIk3Ycvn/4kbJk/1uZuJFfuPEns6LaEvpvG1f0hTea8lilrouyo9mVc2GWdcEZ8OLoGmSADlrCw==",
      "engines": [
        "node >= 0.8"
      ],
      "dependencies": {
        "buffer-from": "^1.0.0",
        "inherits": "^2.0.3",
        "readable-stream": "^2.2.2",
        "typedarray": "^0.0.6"
      }
    },
    "node_modules/config": {
      "version": "3.3.6",
      "resolved": "https://registry.npmjs.org/config/-/config-3.3.6.tgz",
      "integrity": "sha512-Hj5916C5HFawjYJat1epbyY2PlAgLpBtDUlr0MxGLgo3p5+7kylyvnRY18PqJHgnNWXcdd0eWDemT7eYWuFgwg==",
      "dependencies": {
        "json5": "^2.1.1"
      },
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/configstore": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/configstore/-/configstore-5.0.1.tgz",
      "integrity": "sha512-aMKprgk5YhBNyH25hj8wGt2+D52Sw1DRRIzqBwLp2Ya9mFmY8KPvvtvmna8SxVR9JMZ4kzMD68N22vlaRpkeFA==",
      "dependencies": {
        "dot-prop": "^5.2.0",
        "graceful-fs": "^4.1.2",
        "make-dir": "^3.0.0",
        "unique-string": "^2.0.0",
        "write-file-atomic": "^3.0.0",
        "xdg-basedir": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/console-control-strings": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/console-control-strings/-/console-control-strings-1.1.0.tgz",
      "integrity": "sha1-PXz0Rk22RG6mRL9LOVB/mFEAjo4="
    },
    "node_modules/content-disposition": {
      "version": "0.5.3",
      "resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-0.5.3.tgz",
      "integrity": "sha512-ExO0774ikEObIAEV9kDo50o+79VCUdEB6n6lzKgGwupcVeRlhrj3qGAfwq8G6uBJjkqLrhT0qEYFcWng8z1z0g==",
      "dependencies": {
        "safe-buffer": "5.1.2"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/content-type": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/content-type/-/content-type-1.0.4.tgz",
      "integrity": "sha512-hIP3EEPs8tB9AT1L+NUqtwOAps4mk2Zob89MWXMHjHWg9milF/j4osnnQLXBCBFBk/tvIG/tUc9mOUJiPBhPXA==",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/convert-source-map": {
      "version": "1.7.0",
      "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-1.7.0.tgz",
      "integrity": "sha512-4FJkXzKXEDB1snCFZlLP4gpC3JILicCpGbzG9f9G7tGqGCzETQ2hWPrcinA9oU4wtf2biUaEH5065UnMeR33oA==",
      "dev": true,
      "dependencies": {
        "safe-buffer": "~5.1.1"
      }
    },
    "node_modules/cookie": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.4.0.tgz",
      "integrity": "sha512-+Hp8fLp57wnUSt0tY0tHEXh4voZRDnoIrZPqlo3DPiI4y9lwg/jqx+1Om94/W6ZaPDOUbnjOt/99w66zk+l1Xg==",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/cookie-signature": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.0.6.tgz",
      "integrity": "sha1-4wOogrNCzD7oylE6eZmXNNqzriw="
    },
    "node_modules/cookiejar": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/cookiejar/-/cookiejar-2.1.2.tgz",
      "integrity": "sha512-Mw+adcfzPxcPeI+0WlvRrr/3lGVO0bD75SxX6811cxSh1Wbxx7xZBGK1eVtDf6si8rg2lhnUjsVLMFMfbRIuwA==",
      "dev": true
    },
    "node_modules/copy-descriptor": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/copy-descriptor/-/copy-descriptor-0.1.1.tgz",
      "integrity": "sha1-Z29us8OZl8LuGsOpJP1hJHSPV40=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/core-js": {
      "version": "2.6.12",
      "resolved": "https://registry.npmjs.org/core-js/-/core-js-2.6.12.tgz",
      "integrity": "sha512-Kb2wC0fvsWfQrgk8HU5lW6U/Lcs8+9aaYcy4ZFc6DDlo4nZ7n70dEgE5rtR0oG6ufKDUnrwfWL1mXR5ljDatrQ==",
      "deprecated": "core-js@<3.3 is no longer maintained and not recommended for usage due to the number of issues. Because of the V8 engine whims, feature detection in old core-js versions could cause a slowdown up to 100x even if nothing is polyfilled. Please, upgrade your dependencies to the actual version of core-js.",
      "dev": true,
      "hasInstallScript": true
    },
    "node_modules/core-util-is": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.2.tgz",
      "integrity": "sha1-tf1UIgqivFq1eqtxQMlAdUUDwac="
    },
    "node_modules/cors": {
      "version": "2.8.5",
      "resolved": "https://registry.npmjs.org/cors/-/cors-2.8.5.tgz",
      "integrity": "sha512-KIHbLJqu73RGr/hnbrO9uBeixNGuvSQjul/jdFvS/KFSIH1hWVd1ng7zOHx+YrEfInLG7q4n6GHQ9cDtxv/P6g==",
      "dependencies": {
        "object-assign": "^4",
        "vary": "^1"
      },
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/cross-spawn": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-5.1.0.tgz",
      "integrity": "sha1-6L0O/uWPz/b4+UUQoKVUu/ojVEk=",
      "dev": true,
      "dependencies": {
        "lru-cache": "^4.0.1",
        "shebang-command": "^1.2.0",
        "which": "^1.2.9"
      }
    },
    "node_modules/cross-spawn/node_modules/lru-cache": {
      "version": "4.1.5",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-4.1.5.tgz",
      "integrity": "sha512-sWZlbEP2OsHNkXrMl5GYk/jKk70MBng6UU4YI/qGDYbgf6YbP4EvmqISbXCoJiRKs+1bSpFHVgQxvJ17F2li5g==",
      "dev": true,
      "dependencies": {
        "pseudomap": "^1.0.2",
        "yallist": "^2.1.2"
      }
    },
    "node_modules/cross-spawn/node_modules/yallist": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-2.1.2.tgz",
      "integrity": "sha1-HBH5IY8HYImkfdUS+TxmmaaoHVI=",
      "dev": true
    },
    "node_modules/crypto-random-string": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/crypto-random-string/-/crypto-random-string-2.0.0.tgz",
      "integrity": "sha512-v1plID3y9r/lPhviJ1wrXpLeyUIGAZ2SHNYTEapm7/8A9nLPoyvVp3RK/EPFqn5kEznyWgYZNsRtYYIWbuG8KA==",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/cssom": {
      "version": "0.3.8",
      "resolved": "https://registry.npmjs.org/cssom/-/cssom-0.3.8.tgz",
      "integrity": "sha512-b0tGHbfegbhPJpxpiBPU2sCkigAqtM9O121le6bbOlgyV+NyGyCmVfJ6QW9eRjz8CpNfWEOYBIMIGRYkLwsIYg==",
      "dev": true
    },
    "node_modules/cssstyle": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/cssstyle/-/cssstyle-1.4.0.tgz",
      "integrity": "sha512-GBrLZYZ4X4x6/QEoBnIrqb8B/f5l4+8me2dkom/j1Gtbxy0kBv6OGzKuAsGM75bkGwGAFkt56Iwg28S3XTZgSA==",
      "dev": true,
      "dependencies": {
        "cssom": "0.3.x"
      }
    },
    "node_modules/dashdash": {
      "version": "1.14.1",
      "resolved": "https://registry.npmjs.org/dashdash/-/dashdash-1.14.1.tgz",
      "integrity": "sha1-hTz6D3y+L+1d4gMmuN1YEDX24vA=",
      "dev": true,
      "dependencies": {
        "assert-plus": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/data-urls": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/data-urls/-/data-urls-1.1.0.tgz",
      "integrity": "sha512-YTWYI9se1P55u58gL5GkQHW4P6VJBJ5iBT+B5a7i2Tjadhv52paJG0qHX4A0OR6/t52odI64KP2YvFpkDOi3eQ==",
      "dev": true,
      "dependencies": {
        "abab": "^2.0.0",
        "whatwg-mimetype": "^2.2.0",
        "whatwg-url": "^7.0.0"
      }
    },
    "node_modules/data-urls/node_modules/whatwg-url": {
      "version": "7.1.0",
      "resolved": "https://registry.npmjs.org/whatwg-url/-/whatwg-url-7.1.0.tgz",
      "integrity": "sha512-WUu7Rg1DroM7oQvGWfOiAK21n74Gg+T4elXEQYkOhtyLeWiJFoOGLXPKI/9gzIie9CtwVLm8wtw6YJdKyxSjeg==",
      "dev": true,
      "dependencies": {
        "lodash.sortby": "^4.7.0",
        "tr46": "^1.0.1",
        "webidl-conversions": "^4.0.2"
      }
    },
    "node_modules/debug": {
      "version": "2.6.9",
      "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
      "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
      "dependencies": {
        "ms": "2.0.0"
      }
    },
    "node_modules/decamelize": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/decamelize/-/decamelize-1.2.0.tgz",
      "integrity": "sha1-9lNNFRSCabIDUue+4m9QH5oZEpA=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/decode-uri-component": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/decode-uri-component/-/decode-uri-component-0.2.0.tgz",
      "integrity": "sha1-6zkTMzRYd1y4TNGh+uBiEGu4dUU=",
      "dev": true,
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/decompress-response": {
      "version": "3.3.0",
      "resolved": "https://registry.npmjs.org/decompress-response/-/decompress-response-3.3.0.tgz",
      "integrity": "sha1-gKTdMjdIOEv6JICDYirt7Jgq3/M=",
      "dependencies": {
        "mimic-response": "^1.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/deep-extend": {
      "version": "0.6.0",
      "resolved": "https://registry.npmjs.org/deep-extend/-/deep-extend-0.6.0.tgz",
      "integrity": "sha512-LOHxIOaPYdHlJRtCQfDIVZtfw/ufM8+rVj649RIHzcm/vGwQRXFt6OPqIFWsm2XEMrNIEtWR64sY1LEKD2vAOA==",
      "engines": {
        "node": ">=4.0.0"
      }
    },
    "node_modules/deep-is": {
      "version": "0.1.3",
      "resolved": "https://registry.npmjs.org/deep-is/-/deep-is-0.1.3.tgz",
      "integrity": "sha1-s2nW+128E+7PUk+RsHD+7cNXzzQ=",
      "dev": true
    },
    "node_modules/default-require-extensions": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/default-require-extensions/-/default-require-extensions-1.0.0.tgz",
      "integrity": "sha1-836hXT4T/9m0N9M+GnW1+5eHTLg=",
      "dev": true,
      "dependencies": {
        "strip-bom": "^2.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/defer-to-connect": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/defer-to-connect/-/defer-to-connect-1.1.3.tgz",
      "integrity": "sha512-0ISdNousHvZT2EiFlZeZAHBUvSxmKswVCEf8hW7KWgG4a8MVEu/3Vb6uWYozkjylyCxe0JBIiRB1jV45S70WVQ=="
    },
    "node_modules/define-properties": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/define-properties/-/define-properties-1.1.3.tgz",
      "integrity": "sha512-3MqfYKj2lLzdMSf8ZIZE/V+Zuy+BgD6f164e8K2w7dgnpKArBDerGYpM46IYYcjnkdPNMjPk9A6VFB8+3SKlXQ==",
      "dev": true,
      "dependencies": {
        "object-keys": "^1.0.12"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/define-property": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/define-property/-/define-property-2.0.2.tgz",
      "integrity": "sha512-jwK2UV4cnPpbcG7+VRARKTZPUWowwXA8bzH5NP6ud0oeAxyYPuGZUAC7hMugpCdz4BeSZl2Dl9k66CHJ/46ZYQ==",
      "dev": true,
      "dependencies": {
        "is-descriptor": "^1.0.2",
        "isobject": "^3.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/define-property/node_modules/is-accessor-descriptor": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
      "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
      "dev": true,
      "dependencies": {
        "kind-of": "^6.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/define-property/node_modules/is-data-descriptor": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
      "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
      "dev": true,
      "dependencies": {
        "kind-of": "^6.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/define-property/node_modules/is-descriptor": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
      "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
      "dev": true,
      "dependencies": {
        "is-accessor-descriptor": "^1.0.0",
        "is-data-descriptor": "^1.0.0",
        "kind-of": "^6.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/define-property/node_modules/isobject": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
      "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/define-property/node_modules/kind-of": {
      "version": "6.0.3",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",
      "integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/delayed-stream": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/delayed-stream/-/delayed-stream-1.0.0.tgz",
      "integrity": "sha1-3zrhmayt+31ECqrgsp4icrJOxhk=",
      "dev": true,
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/delegates": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/delegates/-/delegates-1.0.0.tgz",
      "integrity": "sha1-hMbhWbgZBP3KWaDvRM2HDTElD5o="
    },
    "node_modules/denque": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/denque/-/denque-1.5.0.tgz",
      "integrity": "sha512-CYiCSgIF1p6EUByQPlGkKnP1M9g0ZV3qMIrqMqZqdwazygIA/YP2vrbcyl1h/WppKJTdl1F85cXIle+394iDAQ==",
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/depd": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/depd/-/depd-1.1.2.tgz",
      "integrity": "sha1-m81S4UwJd2PnSbJ0xDRu0uVgtak=",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/destroy": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/destroy/-/destroy-1.0.4.tgz",
      "integrity": "sha1-l4hXRCxEdJ5CBmE+N5RiBYJqvYA="
    },
    "node_modules/detect-indent": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/detect-indent/-/detect-indent-4.0.0.tgz",
      "integrity": "sha1-920GQ1LN9Docts5hnE7jqUdd4gg=",
      "dev": true,
      "dependencies": {
        "repeating": "^2.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/detect-libc": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-1.0.3.tgz",
      "integrity": "sha1-+hN8S9aY7fVc1c0CrFWfkaTEups=",
      "bin": {
        "detect-libc": "bin/detect-libc.js"
      },
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/detect-newline": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/detect-newline/-/detect-newline-2.1.0.tgz",
      "integrity": "sha1-9B8cEL5LAOh7XxPaaAdZ8sW/0+I=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/dicer": {
      "version": "0.2.5",
      "resolved": "https://registry.npmjs.org/dicer/-/dicer-0.2.5.tgz",
      "integrity": "sha1-WZbAhrszIYyBLAkL3cCc0S+stw8=",
      "dependencies": {
        "readable-stream": "1.1.x",
        "streamsearch": "0.1.2"
      },
      "engines": {
        "node": ">=0.8.0"
      }
    },
    "node_modules/dicer/node_modules/isarray": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/isarray/-/isarray-0.0.1.tgz",
      "integrity": "sha1-ihis/Kmo9Bd+Cav8YDiTmwXR7t8="
    },
    "node_modules/dicer/node_modules/readable-stream": {
      "version": "1.1.14",
      "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-1.1.14.tgz",
      "integrity": "sha1-fPTFTvZI44EwhMY23SB54WbAgdk=",
      "dependencies": {
        "core-util-is": "~1.0.0",
        "inherits": "~2.0.1",
        "isarray": "0.0.1",
        "string_decoder": "~0.10.x"
      }
    },
    "node_modules/dicer/node_modules/string_decoder": {
      "version": "0.10.31",
      "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-0.10.31.tgz",
      "integrity": "sha1-YuIDvEF2bGwoyfyEMB2rHFMQ+pQ="
    },
    "node_modules/diff": {
      "version": "3.5.0",
      "resolved": "https://registry.npmjs.org/diff/-/diff-3.5.0.tgz",
      "integrity": "sha512-A46qtFgd+g7pDZinpnwiRJtxbC1hpgf0uzP3iG89scHk0AUC7A1TGxf5OiiOUv/JMZR8GOt8hL900hV0bOy5xA==",
      "dev": true,
      "engines": {
        "node": ">=0.3.1"
      }
    },
    "node_modules/domexception": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/domexception/-/domexception-1.0.1.tgz",
      "integrity": "sha512-raigMkn7CJNNo6Ihro1fzG7wr3fHuYVytzquZKX5n0yizGsTcYgzdIUwj1X9pK0VvjeihV+XiclP+DjwbsSKug==",
      "dev": true,
      "dependencies": {
        "webidl-conversions": "^4.0.2"
      }
    },
    "node_modules/dot-prop": {
      "version": "5.3.0",
      "resolved": "https://registry.npmjs.org/dot-prop/-/dot-prop-5.3.0.tgz",
      "integrity": "sha512-QM8q3zDe58hqUqjraQOmzZ1LIH9SWQJTlEKCH4kJ2oQvLZk7RbQXvtDM2XEq3fwkV9CCvvH4LA0AV+ogFsBM2Q==",
      "dependencies": {
        "is-obj": "^2.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/duplexer3": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/duplexer3/-/duplexer3-0.1.4.tgz",
      "integrity": "sha1-7gHdHKwO08vH/b6jfcCo8c4ALOI="
    },
    "node_modules/ecc-jsbn": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/ecc-jsbn/-/ecc-jsbn-0.1.2.tgz",
      "integrity": "sha1-OoOpBOVDUyh4dMVkt1SThoSamMk=",
      "dev": true,
      "dependencies": {
        "jsbn": "~0.1.0",
        "safer-buffer": "^2.1.0"
      }
    },
    "node_modules/ecdsa-sig-formatter": {
      "version": "1.0.11",
      "resolved": "https://registry.npmjs.org/ecdsa-sig-formatter/-/ecdsa-sig-formatter-1.0.11.tgz",
      "integrity": "sha512-nagl3RYrbNv6kQkeJIpt6NJZy8twLB/2vtz6yN9Z4vRKHN4/QZJIEbqohALSgwKdnksuY3k5Addp5lg8sVoVcQ==",
      "dependencies": {
        "safe-buffer": "^5.0.1"
      }
    },
    "node_modules/ee-first": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",
      "integrity": "sha1-WQxhFWsK4vTwJVcyoViyZrxWsh0="
    },
    "node_modules/emoji-regex": {
      "version": "7.0.3",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-7.0.3.tgz",
      "integrity": "sha512-CwBLREIQ7LvYFB0WyRvwhq5N5qPhc6PMjD6bYggFlI5YyDgl+0vxq5VHbMOFqLg7hfWzmu8T5Z1QofhmTIhItA=="
    },
    "node_modules/enabled": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/enabled/-/enabled-2.0.0.tgz",
      "integrity": "sha512-AKrN98kuwOzMIdAizXGI86UFBoo26CL21UM763y1h/GMSJ4/OHU9k2YlsmBpyScFo/wbLzWQJBMCW4+IO3/+OQ=="
    },
    "node_modules/encodeurl": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-1.0.2.tgz",
      "integrity": "sha1-rT/0yG7C0CkyL1oCw6mmBslbP1k=",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/end-of-stream": {
      "version": "1.4.4",
      "resolved": "https://registry.npmjs.org/end-of-stream/-/end-of-stream-1.4.4.tgz",
      "integrity": "sha512-+uw1inIHVPQoaVuHzRyXd21icM+cnt4CzD5rW+NC1wjOUSTOs+Te7FOv7AhN7vS9x/oIyhLP5PR1H+phQAHu5Q==",
      "dependencies": {
        "once": "^1.4.0"
      }
    },
    "node_modules/entities": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/entities/-/entities-2.2.0.tgz",
      "integrity": "sha512-p92if5Nz619I0w+akJrLZH0MX0Pb5DX39XOwQTtXSdQQOaYH03S1uIQp4mhOZtAXrxq4ViO67YTiLBo2638o9A==",
      "funding": {
        "url": "https://github.com/fb55/entities?sponsor=1"
      }
    },
    "node_modules/error-ex": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/error-ex/-/error-ex-1.3.2.tgz",
      "integrity": "sha512-7dFHNmqeFSEt2ZBsCriorKnn3Z2pj+fd9kmI6QoWw4//DL+icEBfc0U7qJCisqrTsKTjw4fNFy2pW9OqStD84g==",
      "dev": true,
      "dependencies": {
        "is-arrayish": "^0.2.1"
      }
    },
    "node_modules/error-ex/node_modules/is-arrayish": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.2.1.tgz",
      "integrity": "sha1-d8mYQFJ6qOyxqLppe4BkWnqSap0=",
      "dev": true
    },
    "node_modules/es-abstract": {
      "version": "1.18.3",
      "resolved": "https://registry.npmjs.org/es-abstract/-/es-abstract-1.18.3.tgz",
      "integrity": "sha512-nQIr12dxV7SSxE6r6f1l3DtAeEYdsGpps13dR0TwJg1S8gyp4ZPgy3FZcHBgbiQqnoqSTb+oC+kO4UQ0C/J8vw==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.2",
        "es-to-primitive": "^1.2.1",
        "function-bind": "^1.1.1",
        "get-intrinsic": "^1.1.1",
        "has": "^1.0.3",
        "has-symbols": "^1.0.2",
        "is-callable": "^1.2.3",
        "is-negative-zero": "^2.0.1",
        "is-regex": "^1.1.3",
        "is-string": "^1.0.6",
        "object-inspect": "^1.10.3",
        "object-keys": "^1.1.1",
        "object.assign": "^4.1.2",
        "string.prototype.trimend": "^1.0.4",
        "string.prototype.trimstart": "^1.0.4",
        "unbox-primitive": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/es-to-primitive": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/es-to-primitive/-/es-to-primitive-1.2.1.tgz",
      "integrity": "sha512-QCOllgZJtaUo9miYBcLChTUaHNjJF3PYs1VidD7AwiEj1kYxKeQTctLAezAOH5ZKRH0g2IgPn6KwB4IT8iRpvA==",
      "dev": true,
      "dependencies": {
        "is-callable": "^1.1.4",
        "is-date-object": "^1.0.1",
        "is-symbol": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/es6-promise": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/es6-promise/-/es6-promise-3.2.1.tgz",
      "integrity": "sha1-7FYjOGgDKQkgcXDDlEjiREndH8Q="
    },
    "node_modules/escape-goat": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/escape-goat/-/escape-goat-2.1.1.tgz",
      "integrity": "sha512-8/uIhbG12Csjy2JEW7D9pHbreaVaS/OpN3ycnyvElTdwM5n6GY6W6e2IPemfvGZeUMqZ9A/3GqIZMgKnBhAw/Q==",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/escape-html": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",
      "integrity": "sha1-Aljq5NPQwJdN4cFpGI7wBR0dGYg="
    },
    "node_modules/escape-string-regexp": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
      "integrity": "sha1-G2HAViGQqN/2rjuyzwIAyhMLhtQ=",
      "dev": true,
      "engines": {
        "node": ">=0.8.0"
      }
    },
    "node_modules/escodegen": {
      "version": "1.14.3",
      "resolved": "https://registry.npmjs.org/escodegen/-/escodegen-1.14.3.tgz",
      "integrity": "sha512-qFcX0XJkdg+PB3xjZZG/wKSuT1PnQWx57+TVSjIMmILd2yC/6ByYElPwJnslDsuWuSAp4AwJGumarAAmJch5Kw==",
      "dev": true,
      "dependencies": {
        "esprima": "^4.0.1",
        "estraverse": "^4.2.0",
        "esutils": "^2.0.2",
        "optionator": "^0.8.1"
      },
      "bin": {
        "escodegen": "bin/escodegen.js",
        "esgenerate": "bin/esgenerate.js"
      },
      "engines": {
        "node": ">=4.0"
      },
      "optionalDependencies": {
        "source-map": "~0.6.1"
      }
    },
    "node_modules/escodegen/node_modules/source-map": {
      "version": "0.6.1",
      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
      "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
      "dev": true,
      "optional": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/esprima": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/esprima/-/esprima-4.0.1.tgz",
      "integrity": "sha512-eGuFFw7Upda+g4p+QHvnW0RyTX/SVeJBDM/gCtMARO0cLuT2HcEKnTPvhjV6aGeqrCB/sbNop0Kszm0jsaWU4A==",
      "dev": true,
      "bin": {
        "esparse": "bin/esparse.js",
        "esvalidate": "bin/esvalidate.js"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/estraverse": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-4.3.0.tgz",
      "integrity": "sha512-39nnKffWz8xN1BU/2c79n9nB9HDzo0niYUqx6xyqUnyoAnQyyWpOTdZEeiCch8BBu515t4wp9ZmgVfVhn9EBpw==",
      "dev": true,
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/esutils": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
      "integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/etag": {
      "version": "1.8.1",
      "resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",
      "integrity": "sha1-Qa4u62XvpiJorr/qg6x9eSmbCIc=",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/events": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/events/-/events-1.1.1.tgz",
      "integrity": "sha1-nr23Y1rQmccNzEwqH1AEKI6L2SQ=",
      "engines": {
        "node": ">=0.4.x"
      }
    },
    "node_modules/exec-sh": {
      "version": "0.2.2",
      "resolved": "https://registry.npmjs.org/exec-sh/-/exec-sh-0.2.2.tgz",
      "integrity": "sha512-FIUCJz1RbuS0FKTdaAafAByGS0CPvU3R0MeHxgtl+djzCc//F8HakL8GzmVNZanasTbTAY/3DRFA0KpVqj/eAw==",
      "dev": true,
      "dependencies": {
        "merge": "^1.2.0"
      }
    },
    "node_modules/execa": {
      "version": "0.7.0",
      "resolved": "https://registry.npmjs.org/execa/-/execa-0.7.0.tgz",
      "integrity": "sha1-lEvs00zEHuMqY6n68nrVpl/Fl3c=",
      "dev": true,
      "dependencies": {
        "cross-spawn": "^5.0.1",
        "get-stream": "^3.0.0",
        "is-stream": "^1.1.0",
        "npm-run-path": "^2.0.0",
        "p-finally": "^1.0.0",
        "signal-exit": "^3.0.0",
        "strip-eof": "^1.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/execa/node_modules/get-stream": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-3.0.0.tgz",
      "integrity": "sha1-jpQ9E1jcN1VQVOy+LtsFqhdO3hQ=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/execa/node_modules/is-stream": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-stream/-/is-stream-1.1.0.tgz",
      "integrity": "sha1-EtSj3U5o4Lec6428hBc66A2RykQ=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/exit": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/exit/-/exit-0.1.2.tgz",
      "integrity": "sha1-BjJjj42HfMghB9MKD/8aF8uhzQw=",
      "dev": true,
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/expand-brackets": {
      "version": "0.1.5",
      "resolved": "https://registry.npmjs.org/expand-brackets/-/expand-brackets-0.1.5.tgz",
      "integrity": "sha1-3wcoTjQqgHzXM6xa9yQR5YHRF3s=",
      "dev": true,
      "dependencies": {
        "is-posix-bracket": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/expand-range": {
      "version": "1.8.2",
      "resolved": "https://registry.npmjs.org/expand-range/-/expand-range-1.8.2.tgz",
      "integrity": "sha1-opnv/TNf4nIeuujiV+x5ZE/IUzc=",
      "dev": true,
      "dependencies": {
        "fill-range": "^2.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/expand-range/node_modules/fill-range": {
      "version": "2.2.4",
      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-2.2.4.tgz",
      "integrity": "sha512-cnrcCbj01+j2gTG921VZPnHbjmdAf8oQV/iGeV2kZxGSyfYjjTyY79ErsK1WJWMpw6DaApEX72binqJE+/d+5Q==",
      "dev": true,
      "dependencies": {
        "is-number": "^2.1.0",
        "isobject": "^2.0.0",
        "randomatic": "^3.0.0",
        "repeat-element": "^1.1.2",
        "repeat-string": "^1.5.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/expand-range/node_modules/is-number": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-2.1.0.tgz",
      "integrity": "sha1-Afy7s5NGOlSPL0ZszhbezknbkI8=",
      "dev": true,
      "dependencies": {
        "kind-of": "^3.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/expect": {
      "version": "22.4.3",
      "resolved": "https://registry.npmjs.org/expect/-/expect-22.4.3.tgz",
      "integrity": "sha512-XcNXEPehqn8b/jm8FYotdX0YrXn36qp4HWlrVT4ktwQas1l1LPxiVWncYnnL2eyMtKAmVIaG0XAp0QlrqJaxaA==",
      "dev": true,
      "dependencies": {
        "ansi-styles": "^3.2.0",
        "jest-diff": "^22.4.3",
        "jest-get-type": "^22.4.3",
        "jest-matcher-utils": "^22.4.3",
        "jest-message-util": "^22.4.3",
        "jest-regex-util": "^22.4.3"
      }
    },
    "node_modules/expect/node_modules/ansi-styles": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
      "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
      "dev": true,
      "dependencies": {
        "color-convert": "^1.9.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/expect/node_modules/color-convert": {
      "version": "1.9.3",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
      "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
      "dev": true,
      "dependencies": {
        "color-name": "1.1.3"
      }
    },
    "node_modules/expect/node_modules/color-name": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
      "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU=",
      "dev": true
    },
    "node_modules/express": {
      "version": "4.17.1",
      "resolved": "https://registry.npmjs.org/express/-/express-4.17.1.tgz",
      "integrity": "sha512-mHJ9O79RqluphRrcw2X/GTh3k9tVv8YcoyY4Kkh4WDMUYKRZUq0h1o0w2rrrxBqM7VoeUVqgb27xlEMXTnYt4g==",
      "dependencies": {
        "accepts": "~1.3.7",
        "array-flatten": "1.1.1",
        "body-parser": "1.19.0",
        "content-disposition": "0.5.3",
        "content-type": "~1.0.4",
        "cookie": "0.4.0",
        "cookie-signature": "1.0.6",
        "debug": "2.6.9",
        "depd": "~1.1.2",
        "encodeurl": "~1.0.2",
        "escape-html": "~1.0.3",
        "etag": "~1.8.1",
        "finalhandler": "~1.1.2",
        "fresh": "0.5.2",
        "merge-descriptors": "1.0.1",
        "methods": "~1.1.2",
        "on-finished": "~2.3.0",
        "parseurl": "~1.3.3",
        "path-to-regexp": "0.1.7",
        "proxy-addr": "~2.0.5",
        "qs": "6.7.0",
        "range-parser": "~1.2.1",
        "safe-buffer": "5.1.2",
        "send": "0.17.1",
        "serve-static": "1.14.1",
        "setprototypeof": "1.1.1",
        "statuses": "~1.5.0",
        "type-is": "~1.6.18",
        "utils-merge": "1.0.1",
        "vary": "~1.1.2"
      },
      "engines": {
        "node": ">= 0.10.0"
      }
    },
    "node_modules/express-async-errors": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/express-async-errors/-/express-async-errors-3.1.1.tgz",
      "integrity": "sha512-h6aK1da4tpqWSbyCa3FxB/V6Ehd4EEB15zyQq9qe75OZBp0krinNKuH4rAY+S/U/2I36vdLAUFSjQJ+TFmODng==",
      "peerDependencies": {
        "express": "^4.16.2"
      }
    },
    "node_modules/extend": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/extend/-/extend-3.0.2.tgz",
      "integrity": "sha512-fjquC59cD7CyW6urNXK0FBufkZcoiGG80wTuPujX590cB5Ttln20E2UB4S/WARVqhXffZl2LNgS+gQdPIIim/g==",
      "dev": true
    },
    "node_modules/extend-shallow": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-3.0.2.tgz",
      "integrity": "sha1-Jqcarwc7OfshJxcnRhMcJwQCjbg=",
      "dev": true,
      "dependencies": {
        "assign-symbols": "^1.0.0",
        "is-extendable": "^1.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/extend-shallow/node_modules/is-extendable": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-1.0.1.tgz",
      "integrity": "sha512-arnXMxT1hhoKo9k1LZdmlNyJdDDfy2v0fXjFlmok4+i8ul/6WlbVge9bhM74OpNPQPMGUToDtz+KXa1PneJxOA==",
      "dev": true,
      "dependencies": {
        "is-plain-object": "^2.0.4"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/extglob": {
      "version": "0.3.2",
      "resolved": "https://registry.npmjs.org/extglob/-/extglob-0.3.2.tgz",
      "integrity": "sha1-Lhj/PS9JqydlzskCPwEdqo2DSaE=",
      "dev": true,
      "dependencies": {
        "is-extglob": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/extglob/node_modules/is-extglob": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-1.0.0.tgz",
      "integrity": "sha1-rEaBd8SUNAWgkvyPKXYMb/xiBsA=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/extsprintf": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/extsprintf/-/extsprintf-1.3.0.tgz",
      "integrity": "sha1-lpGEQOMEGnpBT4xS48V06zw+HgU=",
      "dev": true,
      "engines": [
        "node >=0.6.0"
      ]
    },
    "node_modules/fast-deep-equal": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
      "integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==",
      "dev": true
    },
    "node_modules/fast-json-stable-stringify": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz",
      "integrity": "sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==",
      "dev": true
    },
    "node_modules/fast-levenshtein": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz",
      "integrity": "sha1-PYpcZog6FqMMqGQ+hR8Zuqd5eRc=",
      "dev": true
    },
    "node_modules/fast-safe-stringify": {
      "version": "2.0.7",
      "resolved": "https://registry.npmjs.org/fast-safe-stringify/-/fast-safe-stringify-2.0.7.tgz",
      "integrity": "sha512-Utm6CdzT+6xsDk2m8S6uL8VHxNwI6Jub+e9NYTcAms28T84pTa25GJQV9j0CY0N1rM8hK4x6grpF2BQf+2qwVA=="
    },
    "node_modules/fast-xml-parser": {
      "version": "3.19.0",
      "resolved": "https://registry.npmjs.org/fast-xml-parser/-/fast-xml-parser-3.19.0.tgz",
      "integrity": "sha512-4pXwmBplsCPv8FOY1WRakF970TjNGnGnfbOnLqjlYvMiF1SR3yOHyxMR/YCXpPTOspNF5gwudqktIP4VsWkvBg==",
      "bin": {
        "xml2js": "cli.js"
      },
      "funding": {
        "type": "paypal",
        "url": "https://paypal.me/naturalintelligence"
      }
    },
    "node_modules/fawn": {
      "version": "2.1.5",
      "resolved": "https://registry.npmjs.org/fawn/-/fawn-2.1.5.tgz",
      "integrity": "sha512-aiRBvZ0P0UtzSmNF3pcodilg9U+ofeJwa6aJzq1jPgbZqsB2k9pYa5KnXSk8KH0Dgm/99WdMoZacmUaTt2xdvw==",
      "dependencies": {
        "bluebird": "3.5.0",
        "gridfs-stream": "1.1.1",
        "mongoose": "4.12.3"
      }
    },
    "node_modules/fawn/node_modules/bluebird": {
      "version": "3.5.0",
      "resolved": "https://registry.npmjs.org/bluebird/-/bluebird-3.5.0.tgz",
      "integrity": "sha1-eRQg1/VR7qKJdFOop3ZT+WYG1nw="
    },
    "node_modules/fawn/node_modules/bson": {
      "version": "1.0.9",
      "resolved": "https://registry.npmjs.org/bson/-/bson-1.0.9.tgz",
      "integrity": "sha512-IQX9/h7WdMBIW/q/++tGd+emQr0XMdeZ6icnT/74Xk9fnabWn+gZgpE+9V+gujL3hhJOoNrnDVY7tWdzc7NUTg==",
      "deprecated": "Fixed a critical issue with BSON serialization documented in CVE-2019-2391, see https://bit.ly/2KcpXdo for more details",
      "engines": {
        "node": ">=0.6.19"
      }
    },
    "node_modules/fawn/node_modules/kareem": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/kareem/-/kareem-1.5.0.tgz",
      "integrity": "sha1-4+QQHZ3P3imXadr0tNtk2JXRdEg="
    },
    "node_modules/fawn/node_modules/mongodb": {
      "version": "2.2.33",
      "resolved": "https://registry.npmjs.org/mongodb/-/mongodb-2.2.33.tgz",
      "integrity": "sha1-tTfEcdNKZlG0jzb9vyl1A0Dgi1A=",
      "dependencies": {
        "es6-promise": "3.2.1",
        "mongodb-core": "2.1.17",
        "readable-stream": "2.2.7"
      },
      "engines": {
        "node": ">=0.10.3"
      }
    },
    "node_modules/fawn/node_modules/mongoose": {
      "version": "4.12.3",
      "resolved": "https://registry.npmjs.org/mongoose/-/mongoose-4.12.3.tgz",
      "integrity": "sha512-hZOKfZEakCvy+84MyZAv/2EL588SHghBrkhtl+LGBRv9QkPs4SY28a376q9CyN/y0JYinNcrrFMx6lgdQatz5Q==",
      "dependencies": {
        "async": "2.1.4",
        "bson": "~1.0.4",
        "hooks-fixed": "2.0.0",
        "kareem": "1.5.0",
        "mongodb": "2.2.33",
        "mpath": "0.3.0",
        "mpromise": "0.5.5",
        "mquery": "2.3.2",
        "ms": "2.0.0",
        "muri": "1.3.0",
        "regexp-clone": "0.0.1",
        "sliced": "1.0.1"
      },
      "engines": {
        "node": ">=0.6.19"
      }
    },
    "node_modules/fawn/node_modules/mpath": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/mpath/-/mpath-0.3.0.tgz",
      "integrity": "sha1-elj3iem1/TyUUgY0FXlg8mvV70Q="
    },
    "node_modules/fawn/node_modules/mquery": {
      "version": "2.3.2",
      "resolved": "https://registry.npmjs.org/mquery/-/mquery-2.3.2.tgz",
      "integrity": "sha512-KXWMypZSvhCuqRtza+HMQZdYw7PfFBjBTFvP31NNAq0OX0/NTIgpcDpkWQ2uTxk6vGQtwQ2elhwhs+ZvCA8OaA==",
      "dependencies": {
        "bluebird": "^3.5.0",
        "debug": "^2.6.9",
        "regexp-clone": "^0.0.1",
        "sliced": "0.0.5"
      }
    },
    "node_modules/fawn/node_modules/mquery/node_modules/sliced": {
      "version": "0.0.5",
      "resolved": "https://registry.npmjs.org/sliced/-/sliced-0.0.5.tgz",
      "integrity": "sha1-XtwETKTrb3gW1Qui/GPiXY/kcH8="
    },
    "node_modules/fawn/node_modules/process-nextick-args": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/process-nextick-args/-/process-nextick-args-1.0.7.tgz",
      "integrity": "sha1-FQ4gt1ZZCtP5EJPyWk8q2L/zC6M="
    },
    "node_modules/fawn/node_modules/readable-stream": {
      "version": "2.2.7",
      "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.2.7.tgz",
      "integrity": "sha1-BwV6y+JGeyIELTb5jFrVBwVOlbE=",
      "dependencies": {
        "buffer-shims": "~1.0.0",
        "core-util-is": "~1.0.0",
        "inherits": "~2.0.1",
        "isarray": "~1.0.0",
        "process-nextick-args": "~1.0.6",
        "string_decoder": "~1.0.0",
        "util-deprecate": "~1.0.1"
      }
    },
    "node_modules/fawn/node_modules/regexp-clone": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/regexp-clone/-/regexp-clone-0.0.1.tgz",
      "integrity": "sha1-p8LgmJH9vzj7sQ03b7cwA+aKxYk="
    },
    "node_modules/fawn/node_modules/string_decoder": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.0.3.tgz",
      "integrity": "sha512-4AH6Z5fzNNBcH+6XDMfA/BTt87skxqJlO0lAh3Dker5zThcAxG6mKz+iGu308UKoPPQ8Dcqx/4JhujzltRa+hQ==",
      "dependencies": {
        "safe-buffer": "~5.1.0"
      }
    },
    "node_modules/fb-watchman": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/fb-watchman/-/fb-watchman-2.0.1.tgz",
      "integrity": "sha512-DkPJKQeY6kKwmuMretBhr7G6Vodr7bFwDYTXIkfG1gjvNpaxBTQV3PbXg6bR1c1UP4jPOX0jHUbbHANL9vRjVg==",
      "dev": true,
      "dependencies": {
        "bser": "2.1.1"
      }
    },
    "node_modules/fecha": {
      "version": "4.2.1",
      "resolved": "https://registry.npmjs.org/fecha/-/fecha-4.2.1.tgz",
      "integrity": "sha512-MMMQ0ludy/nBs1/o0zVOiKTpG7qMbonKUzjJgQFEuvq6INZ1OraKPRAWkBq5vlKLOUMpmNYG1JoN3oDPUQ9m3Q=="
    },
    "node_modules/file-type": {
      "version": "3.9.0",
      "resolved": "https://registry.npmjs.org/file-type/-/file-type-3.9.0.tgz",
      "integrity": "sha1-JXoHg4TR24CHvESdEH1SpSZyuek=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/filename-regex": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/filename-regex/-/filename-regex-2.0.1.tgz",
      "integrity": "sha1-wcS5vuPglyXdsQa3XB4wH+LxiyY=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/fileset": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/fileset/-/fileset-2.0.3.tgz",
      "integrity": "sha1-jnVIqW08wjJ+5eZ0FocjozO7oqA=",
      "dev": true,
      "dependencies": {
        "glob": "^7.0.3",
        "minimatch": "^3.0.3"
      }
    },
    "node_modules/fill-range": {
      "version": "7.0.1",
      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.0.1.tgz",
      "integrity": "sha512-qOo9F+dMUmC2Lcb4BbVvnKJxTPjCm+RRpe4gDuGrzkL7mEVl/djYSu2OdQ2Pa302N4oqkSg9ir6jaLWJ2USVpQ==",
      "dependencies": {
        "to-regex-range": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/finalhandler": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-1.1.2.tgz",
      "integrity": "sha512-aAWcW57uxVNrQZqFXjITpW3sIUQmHGG3qSb9mUah9MgMC4NeWhNOlNjXEYq3HjRAvL6arUviZGGJsBg6z0zsWA==",
      "dependencies": {
        "debug": "2.6.9",
        "encodeurl": "~1.0.2",
        "escape-html": "~1.0.3",
        "on-finished": "~2.3.0",
        "parseurl": "~1.3.3",
        "statuses": "~1.5.0",
        "unpipe": "~1.0.0"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/find-up": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-2.1.0.tgz",
      "integrity": "sha1-RdG35QbHF93UgndaK3eSCjwMV6c=",
      "dev": true,
      "dependencies": {
        "locate-path": "^2.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/flushwritable": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/flushwritable/-/flushwritable-1.0.0.tgz",
      "integrity": "sha1-PjKNj95BKtR+c44751C00pAENJg="
    },
    "node_modules/fn.name": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/fn.name/-/fn.name-1.1.0.tgz",
      "integrity": "sha512-GRnmB5gPyJpAhTQdSZTSp9uaPSvl09KoYcMQtsB9rQoOmzs9dH6ffeccH+Z+cv6P68Hu5bC6JjRh4Ah/mHSNRw=="
    },
    "node_modules/for-each": {
      "version": "0.3.3",
      "resolved": "https://registry.npmjs.org/for-each/-/for-each-0.3.3.tgz",
      "integrity": "sha512-jqYfLp7mo9vIyQf8ykW2v7A+2N4QjeCeI5+Dz9XraiO1ign81wjiH7Fb9vSOWvQfNtmSa4H2RoQTrrXivdUZmw==",
      "dev": true,
      "dependencies": {
        "is-callable": "^1.1.3"
      }
    },
    "node_modules/for-in": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/for-in/-/for-in-1.0.2.tgz",
      "integrity": "sha1-gQaNKVqBQuwKxybG4iAMMPttXoA=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/for-own": {
      "version": "0.1.5",
      "resolved": "https://registry.npmjs.org/for-own/-/for-own-0.1.5.tgz",
      "integrity": "sha1-UmXGgaTylNq78XyVCbZ2OqhFEM4=",
      "dev": true,
      "dependencies": {
        "for-in": "^1.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/forever-agent": {
      "version": "0.6.1",
      "resolved": "https://registry.npmjs.org/forever-agent/-/forever-agent-0.6.1.tgz",
      "integrity": "sha1-+8cfDEGt6zf5bFd60e1C2P2sypE=",
      "dev": true,
      "engines": {
        "node": "*"
      }
    },
    "node_modules/form-data": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/form-data/-/form-data-2.3.3.tgz",
      "integrity": "sha512-1lLKB2Mu3aGP1Q/2eCOx0fNbRMe7XdwktwOruhfqqd0rIJWwN4Dh+E3hrPSlDCXnSR7UtZ1N38rVXm+6+MEhJQ==",
      "dev": true,
      "dependencies": {
        "asynckit": "^0.4.0",
        "combined-stream": "^1.0.6",
        "mime-types": "^2.1.12"
      },
      "engines": {
        "node": ">= 0.12"
      }
    },
    "node_modules/formidable": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/formidable/-/formidable-1.2.2.tgz",
      "integrity": "sha512-V8gLm+41I/8kguQ4/o1D3RIHRmhYFG4pnNyonvua+40rqcEmT4+V71yaZ3B457xbbgCsCfjSPi65u/W6vK1U5Q==",
      "dev": true,
      "funding": {
        "url": "https://ko-fi.com/tunnckoCore/commissions"
      }
    },
    "node_modules/forwarded": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/forwarded/-/forwarded-0.1.2.tgz",
      "integrity": "sha1-mMI9qxF1ZXuMBXPozszZGw/xjIQ=",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/fragment-cache": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/fragment-cache/-/fragment-cache-0.2.1.tgz",
      "integrity": "sha1-QpD60n8T6Jvn8zeZxrxaCr//DRk=",
      "dev": true,
      "dependencies": {
        "map-cache": "^0.2.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/fresh": {
      "version": "0.5.2",
      "resolved": "https://registry.npmjs.org/fresh/-/fresh-0.5.2.tgz",
      "integrity": "sha1-PYyt2Q2XZWn6g1qx+OSyOhBWBac=",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/fs-minipass": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/fs-minipass/-/fs-minipass-2.1.0.tgz",
      "integrity": "sha512-V/JgOLFCS+R6Vcq0slCuaeWEdNC3ouDlJMNIsacH2VtALiu9mV4LPrHc5cDl8k5aw6J8jwgWWpiTo5RYhmIzvg==",
      "dependencies": {
        "minipass": "^3.0.0"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/fs.realpath": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
      "integrity": "sha1-FQStJSMVjKpA20onh8sBQRmU6k8="
    },
    "node_modules/fsevents": {
      "version": "2.3.2",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.2.tgz",
      "integrity": "sha512-xiqMQR4xAeHTuB9uWm+fFRcIOgKBMiOBP+eXiyT7jsgVCq1bkVygt00oASowB7EdtpOHaaPgKt812P9ab+DDKA==",
      "hasInstallScript": true,
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/function-bind": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.1.tgz",
      "integrity": "sha512-yIovAzMX49sF8Yl58fSCWJ5svSLuaibPxXQJFLmBObTuCr0Mf1KiPopGM9NiFjiYBCbfaa2Fh6breQ6ANVTI0A==",
      "dev": true
    },
    "node_modules/gauge": {
      "version": "2.7.4",
      "resolved": "https://registry.npmjs.org/gauge/-/gauge-2.7.4.tgz",
      "integrity": "sha1-LANAXHU4w51+s3sxcCLjJfsBi/c=",
      "dependencies": {
        "aproba": "^1.0.3",
        "console-control-strings": "^1.0.0",
        "has-unicode": "^2.0.0",
        "object-assign": "^4.1.0",
        "signal-exit": "^3.0.0",
        "string-width": "^1.0.1",
        "strip-ansi": "^3.0.1",
        "wide-align": "^1.1.0"
      }
    },
    "node_modules/gauge/node_modules/ansi-regex": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz",
      "integrity": "sha1-w7M6te42DYbg5ijwRorn7yfWVN8=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/gauge/node_modules/is-fullwidth-code-point": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-1.0.0.tgz",
      "integrity": "sha1-754xOG8DGn8NZDr4L95QxFfvAMs=",
      "dependencies": {
        "number-is-nan": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/gauge/node_modules/string-width": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-1.0.2.tgz",
      "integrity": "sha1-EYvfW4zcUaKn5w0hHgfisLmxB9M=",
      "dependencies": {
        "code-point-at": "^1.0.0",
        "is-fullwidth-code-point": "^1.0.0",
        "strip-ansi": "^3.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/gauge/node_modules/strip-ansi": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-3.0.1.tgz",
      "integrity": "sha1-ajhfuIU9lS1f8F0Oiq+UJ43GPc8=",
      "dependencies": {
        "ansi-regex": "^2.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/get-caller-file": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/get-caller-file/-/get-caller-file-1.0.3.tgz",
      "integrity": "sha512-3t6rVToeoZfYSGd8YoLFR2DJkiQrIiUrGcjvFX2mDw3bn6k2OtwHN0TNCLbBO+w8qTvimhDkv+LSscbJY1vE6w==",
      "dev": true
    },
    "node_modules/get-intrinsic": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.1.1.tgz",
      "integrity": "sha512-kWZrnVM42QCiEA2Ig1bG8zjoIMOgxWwYCEeNdwY6Tv/cOSeGpcoX4pXHfKUxNKVoArnrEr2e9srnAxxGIraS9Q==",
      "dev": true,
      "dependencies": {
        "function-bind": "^1.1.1",
        "has": "^1.0.3",
        "has-symbols": "^1.0.1"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-stream": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-4.1.0.tgz",
      "integrity": "sha512-GMat4EJ5161kIy2HevLlr4luNjBgvmj413KaQA7jt4V8B4RDsfpHk7WQ9GVqfYyyx8OS/L66Kox+rJRNklLK7w==",
      "dependencies": {
        "pump": "^3.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/get-value": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/get-value/-/get-value-2.0.6.tgz",
      "integrity": "sha1-3BXKHGcjh8p2vTesCjlbogQqLCg=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/getpass": {
      "version": "0.1.7",
      "resolved": "https://registry.npmjs.org/getpass/-/getpass-0.1.7.tgz",
      "integrity": "sha1-Xv+OPmhNVprkyysSgmBOi6YhSfo=",
      "dev": true,
      "dependencies": {
        "assert-plus": "^1.0.0"
      }
    },
    "node_modules/glob": {
      "version": "7.1.7",
      "resolved": "https://registry.npmjs.org/glob/-/glob-7.1.7.tgz",
      "integrity": "sha512-OvD9ENzPLbegENnYP5UUfJIirTg4+XwMWGaQfQTY0JenxNvvIKP3U3/tAQSPIu/lHxXYSZmpXlUHeqAIdKzBLQ==",
      "dependencies": {
        "fs.realpath": "^1.0.0",
        "inflight": "^1.0.4",
        "inherits": "2",
        "minimatch": "^3.0.4",
        "once": "^1.3.0",
        "path-is-absolute": "^1.0.0"
      },
      "engines": {
        "node": "*"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/glob-base": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/glob-base/-/glob-base-0.3.0.tgz",
      "integrity": "sha1-27Fk9iIbHAscz4Kuoyi0l98Oo8Q=",
      "dev": true,
      "dependencies": {
        "glob-parent": "^2.0.0",
        "is-glob": "^2.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/glob-base/node_modules/glob-parent": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-2.0.0.tgz",
      "integrity": "sha1-gTg9ctsFT8zPUzbaqQLxgvbtuyg=",
      "dev": true,
      "dependencies": {
        "is-glob": "^2.0.0"
      }
    },
    "node_modules/glob-base/node_modules/is-extglob": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-1.0.0.tgz",
      "integrity": "sha1-rEaBd8SUNAWgkvyPKXYMb/xiBsA=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/glob-base/node_modules/is-glob": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-2.0.1.tgz",
      "integrity": "sha1-0Jb5JqPe1WAPP9/ZEZjLCIjC2GM=",
      "dev": true,
      "dependencies": {
        "is-extglob": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/glob-parent": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
      "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
      "dependencies": {
        "is-glob": "^4.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/global-dirs": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/global-dirs/-/global-dirs-2.1.0.tgz",
      "integrity": "sha512-MG6kdOUh/xBnyo9cJFeIKkLEc1AyFq42QTU4XiX51i2NEdxLxLWXIjEjmqKeSuKR7pAZjTqUVoT2b2huxVLgYQ==",
      "dependencies": {
        "ini": "1.3.7"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/globals": {
      "version": "9.18.0",
      "resolved": "https://registry.npmjs.org/globals/-/globals-9.18.0.tgz",
      "integrity": "sha512-S0nG3CLEQiY/ILxqtztTWH/3iRRdyBLw6KMDxnKMchrtbj2OFmehVh0WUCfW3DUrIgx/qFrJPICrq4Z4sTR9UQ==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/got": {
      "version": "9.6.0",
      "resolved": "https://registry.npmjs.org/got/-/got-9.6.0.tgz",
      "integrity": "sha512-R7eWptXuGYxwijs0eV+v3o6+XH1IqVK8dJOEecQfTmkncw9AV4dcw/Dhxi8MdlqPthxxpZyizMzyg8RTmEsG+Q==",
      "dependencies": {
        "@sindresorhus/is": "^0.14.0",
        "@szmarczak/http-timer": "^1.1.2",
        "cacheable-request": "^6.0.0",
        "decompress-response": "^3.3.0",
        "duplexer3": "^0.1.4",
        "get-stream": "^4.1.0",
        "lowercase-keys": "^1.0.1",
        "mimic-response": "^1.0.1",
        "p-cancelable": "^1.0.0",
        "to-readable-stream": "^1.0.0",
        "url-parse-lax": "^3.0.0"
      },
      "engines": {
        "node": ">=8.6"
      }
    },
    "node_modules/graceful-fs": {
      "version": "4.2.6",
      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.6.tgz",
      "integrity": "sha512-nTnJ528pbqxYanhpDYsi4Rd8MAeaBA67+RZ10CM1m3bTAVFEDcd5AuA4a6W5YkGZ1iNXHzZz8T6TBKLeBuNriQ=="
    },
    "node_modules/gridfs-stream": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/gridfs-stream/-/gridfs-stream-1.1.1.tgz",
      "integrity": "sha1-PdOhAOwgIaGBKC9utGcJY2B034k=",
      "dependencies": {
        "flushwritable": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4.2"
      }
    },
    "node_modules/growly": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/growly/-/growly-1.3.0.tgz",
      "integrity": "sha1-8QdIy+dq+WS3yWyTxrzCivEgwIE=",
      "dev": true
    },
    "node_modules/handlebars": {
      "version": "4.7.7",
      "resolved": "https://registry.npmjs.org/handlebars/-/handlebars-4.7.7.tgz",
      "integrity": "sha512-aAcXm5OAfE/8IXkcZvCepKU3VzW1/39Fb5ZuqMtgI/hT8X2YgoMvBY5dLhq/cpOvw7Lk1nK/UF71aLG/ZnVYRA==",
      "dev": true,
      "dependencies": {
        "minimist": "^1.2.5",
        "neo-async": "^2.6.0",
        "source-map": "^0.6.1",
        "wordwrap": "^1.0.0"
      },
      "bin": {
        "handlebars": "bin/handlebars"
      },
      "engines": {
        "node": ">=0.4.7"
      },
      "optionalDependencies": {
        "uglify-js": "^3.1.4"
      }
    },
    "node_modules/handlebars/node_modules/source-map": {
      "version": "0.6.1",
      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
      "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/har-schema": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/har-schema/-/har-schema-2.0.0.tgz",
      "integrity": "sha1-qUwiJOvKwEeCoNkDVSHyRzW37JI=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/har-validator": {
      "version": "5.1.5",
      "resolved": "https://registry.npmjs.org/har-validator/-/har-validator-5.1.5.tgz",
      "integrity": "sha512-nmT2T0lljbxdQZfspsno9hgrG3Uir6Ks5afism62poxqBM6sDnMEuPmzTq8XN0OEwqKLLdh1jQI3qyE66Nzb3w==",
      "deprecated": "this library is no longer supported",
      "dev": true,
      "dependencies": {
        "ajv": "^6.12.3",
        "har-schema": "^2.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/has": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/has/-/has-1.0.3.tgz",
      "integrity": "sha512-f2dvO0VU6Oej7RkWJGrehjbzMAjFp5/VKPp5tTpWIV4JHHZK1/BxbFRtf/siA2SWTe09caDmVtYYzWEIbBS4zw==",
      "dev": true,
      "dependencies": {
        "function-bind": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4.0"
      }
    },
    "node_modules/has-ansi": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/has-ansi/-/has-ansi-2.0.0.tgz",
      "integrity": "sha1-NPUEnOHs3ysGSa8+8k5F7TVBbZE=",
      "dev": true,
      "dependencies": {
        "ansi-regex": "^2.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/has-ansi/node_modules/ansi-regex": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz",
      "integrity": "sha1-w7M6te42DYbg5ijwRorn7yfWVN8=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/has-bigints": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/has-bigints/-/has-bigints-1.0.1.tgz",
      "integrity": "sha512-LSBS2LjbNBTf6287JEbEzvJgftkF5qFkmCo9hDRpAzKhUOlJ+hx8dd4USs00SgsUNwc4617J9ki5YtEClM2ffA==",
      "dev": true,
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-flag": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
      "integrity": "sha1-tdRU3CGZriJWmfNGfloH87lVuv0=",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/has-symbols": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.0.2.tgz",
      "integrity": "sha512-chXa79rL/UC2KlX17jo3vRGz0azaWEx5tGqZg5pO3NUyEJVB17dMruQlzCCOfUvElghKcm5194+BCRvi2Rv/Gw==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-unicode": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/has-unicode/-/has-unicode-2.0.1.tgz",
      "integrity": "sha1-4Ob+aijPUROIVeCG0Wkedx3iqLk="
    },
    "node_modules/has-value": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/has-value/-/has-value-1.0.0.tgz",
      "integrity": "sha1-GLKB2lhbHFxR3vJMkw7SmgvmsXc=",
      "dev": true,
      "dependencies": {
        "get-value": "^2.0.6",
        "has-values": "^1.0.0",
        "isobject": "^3.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/has-value/node_modules/isobject": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
      "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/has-values": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/has-values/-/has-values-1.0.0.tgz",
      "integrity": "sha1-lbC2P+whRmGab+V/51Yo1aOe/k8=",
      "dev": true,
      "dependencies": {
        "is-number": "^3.0.0",
        "kind-of": "^4.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/has-values/node_modules/is-number": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-3.0.0.tgz",
      "integrity": "sha1-JP1iAaR4LPUFYcgQJ2r8fRLXEZU=",
      "dev": true,
      "dependencies": {
        "kind-of": "^3.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/has-values/node_modules/is-number/node_modules/kind-of": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
      "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
      "dev": true,
      "dependencies": {
        "is-buffer": "^1.1.5"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/has-values/node_modules/kind-of": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-4.0.0.tgz",
      "integrity": "sha1-IIE989cSkosgc3hpGkUGb65y3Vc=",
      "dev": true,
      "dependencies": {
        "is-buffer": "^1.1.5"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/has-yarn": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/has-yarn/-/has-yarn-2.1.0.tgz",
      "integrity": "sha512-UqBRqi4ju7T+TqGNdqAO0PaSVGsDGJUBQvk9eUWNGRY1CFGDzYhLWoM7JQEemnlvVcv/YEmc2wNW8BC24EnUsw==",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/helmet": {
      "version": "4.6.0",
      "resolved": "https://registry.npmjs.org/helmet/-/helmet-4.6.0.tgz",
      "integrity": "sha512-HVqALKZlR95ROkrnesdhbbZJFi/rIVSoNq6f3jA/9u6MIbTsPh3xZwihjeI5+DO/2sOV6HMHooXcEOuwskHpTg==",
      "engines": {
        "node": ">=10.0.0"
      }
    },
    "node_modules/hoek": {
      "version": "5.0.4",
      "resolved": "https://registry.npmjs.org/hoek/-/hoek-5.0.4.tgz",
      "integrity": "sha512-Alr4ZQgoMlnere5FZJsIyfIjORBqZll5POhDsF4q64dPuJR6rNxXdDxtHSQq8OXRurhmx+PWYEE8bXRROY8h0w==",
      "deprecated": "This version has been deprecated in accordance with the hapi support policy (hapi.im/support). Please upgrade to the latest version to get the best features, bug fixes, and security patches. If you are unable to upgrade at this time, paid support is available for older versions (hapi.im/commercial).",
      "engines": {
        "node": ">=8.9.0"
      }
    },
    "node_modules/home-or-tmp": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/home-or-tmp/-/home-or-tmp-2.0.0.tgz",
      "integrity": "sha1-42w/LSyufXRqhX440Y1fMqeILbg=",
      "dev": true,
      "dependencies": {
        "os-homedir": "^1.0.0",
        "os-tmpdir": "^1.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/hooks-fixed": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/hooks-fixed/-/hooks-fixed-2.0.0.tgz",
      "integrity": "sha1-oB2JTVKsf2WZu7H2PfycQR33DLo=",
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/hosted-git-info": {
      "version": "2.8.9",
      "resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-2.8.9.tgz",
      "integrity": "sha512-mxIDAb9Lsm6DoOJ7xH+5+X4y1LU/4Hi50L9C5sIswK3JzULS4bwk1FvjdBgvYR4bzT4tuUQiC15FE2f5HbLvYw==",
      "dev": true
    },
    "node_modules/html-comment-regex": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/html-comment-regex/-/html-comment-regex-1.1.2.tgz",
      "integrity": "sha512-P+M65QY2JQ5Y0G9KKdlDpo0zK+/OHptU5AaBwUfAIDJZk1MYf32Frm84EcOytfJE0t5JvkAnKlmjsXDnWzCJmQ=="
    },
    "node_modules/html-encoding-sniffer": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/html-encoding-sniffer/-/html-encoding-sniffer-1.0.2.tgz",
      "integrity": "sha512-71lZziiDnsuabfdYiUeWdCVyKuqwWi23L8YeIgV9jSSZHCtb6wB1BKWooH7L3tn4/FuZJMVWyNaIDr4RGmaSYw==",
      "dev": true,
      "dependencies": {
        "whatwg-encoding": "^1.0.1"
      }
    },
    "node_modules/http-cache-semantics": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/http-cache-semantics/-/http-cache-semantics-4.1.0.tgz",
      "integrity": "sha512-carPklcUh7ROWRK7Cv27RPtdhYhUsela/ue5/jKzjegVvXDqM2ILE9Q2BGn9JZJh1g87cp56su/FgQSzcWS8cQ=="
    },
    "node_modules/http-errors": {
      "version": "1.7.2",
      "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-1.7.2.tgz",
      "integrity": "sha512-uUQBt3H/cSIVfch6i1EuPNy/YsRSOUBXTVfZ+yR7Zjez3qjBz6i9+i4zjNaoqcoFVI4lQJ5plg63TvGfRSDCRg==",
      "dependencies": {
        "depd": "~1.1.2",
        "inherits": "2.0.3",
        "setprototypeof": "1.1.1",
        "statuses": ">= 1.5.0 < 2",
        "toidentifier": "1.0.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/http-signature": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/http-signature/-/http-signature-1.2.0.tgz",
      "integrity": "sha1-muzZJRFHcvPZW2WmCruPfBj7rOE=",
      "dev": true,
      "dependencies": {
        "assert-plus": "^1.0.0",
        "jsprim": "^1.2.2",
        "sshpk": "^1.7.0"
      },
      "engines": {
        "node": ">=0.8",
        "npm": ">=1.3.7"
      }
    },
    "node_modules/https-proxy-agent": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/https-proxy-agent/-/https-proxy-agent-5.0.0.tgz",
      "integrity": "sha512-EkYm5BcKUGiduxzSt3Eppko+PiNWNEpa4ySk9vTC6wDsQJW9rHSa+UhGNJoRYp7bz6Ht1eaRIa6QaJqO5rCFbA==",
      "dependencies": {
        "agent-base": "6",
        "debug": "4"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/https-proxy-agent/node_modules/debug": {
      "version": "4.3.1",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.1.tgz",
      "integrity": "sha512-doEwdvm4PCeK4K3RQN2ZC2BYUBaxwLARCqZmMjtF8a51J2Rb0xpVloFRnCODwqjpwnAoao4pelN8l3RJdv3gRQ==",
      "dependencies": {
        "ms": "2.1.2"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/https-proxy-agent/node_modules/ms": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
      "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
    },
    "node_modules/iconv-lite": {
      "version": "0.4.24",
      "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz",
      "integrity": "sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==",
      "dependencies": {
        "safer-buffer": ">= 2.1.2 < 3"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/ieee754": {
      "version": "1.1.13",
      "resolved": "https://registry.npmjs.org/ieee754/-/ieee754-1.1.13.tgz",
      "integrity": "sha512-4vf7I2LYV/HaWerSo3XmlMkp5eZ83i+/CDluXi/IGTs/O1sejBNhTtnxzmRZfvOUqj7lZjqHkeTvpgSFDlWZTg=="
    },
    "node_modules/ignore-by-default": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/ignore-by-default/-/ignore-by-default-1.0.1.tgz",
      "integrity": "sha1-SMptcvbGo68Aqa1K5odr44ieKwk="
    },
    "node_modules/import-lazy": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/import-lazy/-/import-lazy-2.1.0.tgz",
      "integrity": "sha1-BWmOPUXIjo1+nZLLBYTnfwlvPkM=",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/import-local": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/import-local/-/import-local-1.0.0.tgz",
      "integrity": "sha512-vAaZHieK9qjGo58agRBg+bhHX3hoTZU/Oa3GESWLz7t1U62fk63aHuDJJEteXoDeTCcPmUT+z38gkHPZkkmpmQ==",
      "dev": true,
      "dependencies": {
        "pkg-dir": "^2.0.0",
        "resolve-cwd": "^2.0.0"
      },
      "bin": {
        "import-local-fixture": "fixtures/cli.js"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/imurmurhash": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
      "integrity": "sha1-khi5srkoojixPcT7a21XbyMUU+o=",
      "engines": {
        "node": ">=0.8.19"
      }
    },
    "node_modules/inflight": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
      "integrity": "sha1-Sb1jMdfQLQwJvJEKEHW6gWW1bfk=",
      "dependencies": {
        "once": "^1.3.0",
        "wrappy": "1"
      }
    },
    "node_modules/inherits": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.3.tgz",
      "integrity": "sha1-Yzwsg+PaQqUC9SRmAiSA9CCCYd4="
    },
    "node_modules/ini": {
      "version": "1.3.7",
      "resolved": "https://registry.npmjs.org/ini/-/ini-1.3.7.tgz",
      "integrity": "sha512-iKpRpXP+CrP2jyrxvg1kMUpXDyRUFDWurxbnVT1vQPx+Wz9uCYsMIqYuSBLV+PAaZG/d7kRLKRFc9oDMsH+mFQ=="
    },
    "node_modules/invariant": {
      "version": "2.2.4",
      "resolved": "https://registry.npmjs.org/invariant/-/invariant-2.2.4.tgz",
      "integrity": "sha512-phJfQVBuaJM5raOpJjSfkiD6BpbCE4Ns//LaXl6wGYtUBY83nWS6Rf9tXm2e8VaK60JEjYldbPif/A2B1C2gNA==",
      "dev": true,
      "dependencies": {
        "loose-envify": "^1.0.0"
      }
    },
    "node_modules/invert-kv": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/invert-kv/-/invert-kv-1.0.0.tgz",
      "integrity": "sha1-EEqOSqym09jNFXqO+L+rLXo//bY=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/ipaddr.js": {
      "version": "1.9.1",
      "resolved": "https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-1.9.1.tgz",
      "integrity": "sha512-0KI/607xoxSToH7GjN1FfSbLoU0+btTicjsQSWQlh/hZykN8KpmMf7uYwPW3R+akZ6R/w18ZlXSHBYXiYUPO3g==",
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/is-accessor-descriptor": {
      "version": "0.1.6",
      "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-0.1.6.tgz",
      "integrity": "sha1-qeEss66Nh2cn7u84Q/igiXtcmNY=",
      "dev": true,
      "dependencies": {
        "kind-of": "^3.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-arrayish": {
      "version": "0.3.2",
      "resolved": "https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.3.2.tgz",
      "integrity": "sha512-eVRqCvVlZbuw3GrM63ovNSNAeA1K16kaR/LRY/92w0zxQ5/1YzwblUX652i4Xs9RwAGjW9d9y6X88t8OaAJfWQ=="
    },
    "node_modules/is-bigint": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/is-bigint/-/is-bigint-1.0.2.tgz",
      "integrity": "sha512-0JV5+SOCQkIdzjBK9buARcV804Ddu7A0Qet6sHi3FimE9ne6m4BGQZfRn+NZiXbBk4F4XmHfDZIipLj9pX8dSA==",
      "dev": true,
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-binary-path": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-2.1.0.tgz",
      "integrity": "sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==",
      "dependencies": {
        "binary-extensions": "^2.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-boolean-object": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/is-boolean-object/-/is-boolean-object-1.1.1.tgz",
      "integrity": "sha512-bXdQWkECBUIAcCkeH1unwJLIpZYaa5VvuygSyS/c2lf719mTKZDU5UdDRlpd01UjADgmW8RfqaP+mRaVPdr/Ng==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-buffer": {
      "version": "1.1.6",
      "resolved": "https://registry.npmjs.org/is-buffer/-/is-buffer-1.1.6.tgz",
      "integrity": "sha512-NcdALwpXkTm5Zvvbk7owOUSvVvBKDgKP5/ewfXEznmQFfs4ZRmanOeKBTjRVjka3QFoN6XJ+9F3USqfHqTaU5w==",
      "dev": true
    },
    "node_modules/is-callable": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/is-callable/-/is-callable-1.2.3.tgz",
      "integrity": "sha512-J1DcMe8UYTBSrKezuIUTUwjXsho29693unXM2YhJUTR2txK/eG47bvNa/wipPFmZFgr/N6f1GA66dv0mEyTIyQ==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-ci": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/is-ci/-/is-ci-2.0.0.tgz",
      "integrity": "sha512-YfJT7rkpQB0updsdHLGWrvhBJfcfzNNawYDNIyQXJz0IViGf75O8EBPKSdvw2rF+LGCsX4FZ8tcr3b19LcZq4w==",
      "dependencies": {
        "ci-info": "^2.0.0"
      },
      "bin": {
        "is-ci": "bin.js"
      }
    },
    "node_modules/is-core-module": {
      "version": "2.4.0",
      "resolved": "https://registry.npmjs.org/is-core-module/-/is-core-module-2.4.0.tgz",
      "integrity": "sha512-6A2fkfq1rfeQZjxrZJGerpLCTHRNEBiSgnu0+obeJpEPZRUooHgsizvzv0ZjJwOz3iWIHdJtVWJ/tmPr3D21/A==",
      "dev": true,
      "dependencies": {
        "has": "^1.0.3"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-data-descriptor": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-0.1.4.tgz",
      "integrity": "sha1-C17mSDiOLIYCgueT8YVv7D8wG1Y=",
      "dev": true,
      "dependencies": {
        "kind-of": "^3.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-date-object": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/is-date-object/-/is-date-object-1.0.4.tgz",
      "integrity": "sha512-/b4ZVsG7Z5XVtIxs/h9W8nvfLgSAyKYdtGWQLbqy6jA1icmgjf8WCoTKgeS4wy5tYaPePouzFMANbnj94c2Z+A==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-descriptor": {
      "version": "0.1.6",
      "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-0.1.6.tgz",
      "integrity": "sha512-avDYr0SB3DwO9zsMov0gKCESFYqCnE4hq/4z3TdUlukEy5t9C0YRq7HLrsN52NAcqXKaepeCD0n+B0arnVG3Hg==",
      "dev": true,
      "dependencies": {
        "is-accessor-descriptor": "^0.1.6",
        "is-data-descriptor": "^0.1.4",
        "kind-of": "^5.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-descriptor/node_modules/kind-of": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-5.1.0.tgz",
      "integrity": "sha512-NGEErnH6F2vUuXDh+OlbcKW7/wOcfdRHaZ7VWtqCztfHri/++YKmP51OdWeGPuqCOba6kk2OTe5d02VmTB80Pw==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-dotfile": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/is-dotfile/-/is-dotfile-1.0.3.tgz",
      "integrity": "sha1-pqLzL/0t+wT1yiXs0Pa4PPeYoeE=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-equal-shallow": {
      "version": "0.1.3",
      "resolved": "https://registry.npmjs.org/is-equal-shallow/-/is-equal-shallow-0.1.3.tgz",
      "integrity": "sha1-IjgJj8Ih3gvPpdnqxMRdY4qhxTQ=",
      "dev": true,
      "dependencies": {
        "is-primitive": "^2.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-extendable": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-0.1.1.tgz",
      "integrity": "sha1-YrEQ4omkcUGOPsNqYX1HLjAd/Ik=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-extglob": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
      "integrity": "sha1-qIwCU1eR8C7TfHahueqXc8gz+MI=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-finite": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-finite/-/is-finite-1.1.0.tgz",
      "integrity": "sha512-cdyMtqX/BOqqNBBiKlIVkytNHm49MtMlYyn1zxzvJKWmFMlGzm+ry5BBfYyeY9YmNKbRSo/o7OX9w9ale0wg3w==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/is-fullwidth-code-point": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-2.0.0.tgz",
      "integrity": "sha1-o7MKXE8ZkYMWeqq5O+764937ZU8=",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/is-generator-fn": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-generator-fn/-/is-generator-fn-1.0.0.tgz",
      "integrity": "sha1-lp1J4bszKfa7fwkIm+JleLLd1Go=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-glob": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.1.tgz",
      "integrity": "sha512-5G0tKtBTFImOqDnLB2hG6Bp2qcKEFduo4tZu9MT/H6NQv/ghhy30o55ufafxJ/LdH79LLs2Kfrn85TLKyA7BUg==",
      "dependencies": {
        "is-extglob": "^2.1.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-installed-globally": {
      "version": "0.3.2",
      "resolved": "https://registry.npmjs.org/is-installed-globally/-/is-installed-globally-0.3.2.tgz",
      "integrity": "sha512-wZ8x1js7Ia0kecP/CHM/3ABkAmujX7WPvQk6uu3Fly/Mk44pySulQpnHG46OMjHGXApINnV4QhY3SWnECO2z5g==",
      "dependencies": {
        "global-dirs": "^2.0.1",
        "is-path-inside": "^3.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/is-negative-zero": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/is-negative-zero/-/is-negative-zero-2.0.1.tgz",
      "integrity": "sha512-2z6JzQvZRa9A2Y7xC6dQQm4FSTSTNWjKIYYTt4246eMTJmIo0Q+ZyOsU66X8lxK1AbB92dFeglPLrhwpeRKO6w==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-npm": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/is-npm/-/is-npm-4.0.0.tgz",
      "integrity": "sha512-96ECIfh9xtDDlPylNPXhzjsykHsMJZ18ASpaWzQyBr4YRTcVjUvzaHayDAES2oU/3KpljhHUjtSRNiDwi0F0ig==",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-number": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
      "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
      "engines": {
        "node": ">=0.12.0"
      }
    },
    "node_modules/is-number-object": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/is-number-object/-/is-number-object-1.0.5.tgz",
      "integrity": "sha512-RU0lI/n95pMoUKu9v1BZP5MBcZuNSVJkMkAG2dJqC4z2GlkGUNeH68SuHuBKBD/XFe+LHZ+f9BKkLET60Niedw==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-obj": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/is-obj/-/is-obj-2.0.0.tgz",
      "integrity": "sha512-drqDG3cbczxxEJRoOXcOjtdp1J/lyp1mNn0xaznRs8+muBhgQcrnbspox5X5fOw0HnMnbfDzvnEMEtqDEJEo8w==",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-path-inside": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/is-path-inside/-/is-path-inside-3.0.3.tgz",
      "integrity": "sha512-Fd4gABb+ycGAmKou8eMftCupSir5lRxqf4aD/vd0cD2qc4HL07OjCeuHMr8Ro4CoMaeCKDB0/ECBOVWjTwUvPQ==",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-plain-object": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/is-plain-object/-/is-plain-object-2.0.4.tgz",
      "integrity": "sha512-h5PpgXkWitc38BBMYawTYMWJHFZJVnBquFE57xFpjB8pJFiF6gZ+bU+WyI/yqXiFR5mdLsgYNaPe8uao6Uv9Og==",
      "dev": true,
      "dependencies": {
        "isobject": "^3.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-plain-object/node_modules/isobject": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
      "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-posix-bracket": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/is-posix-bracket/-/is-posix-bracket-0.1.1.tgz",
      "integrity": "sha1-MzTceXdDaOkvAW5vvAqI9c1ua8Q=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-primitive": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/is-primitive/-/is-primitive-2.0.0.tgz",
      "integrity": "sha1-IHurkWOEmcB7Kt8kCkGochADRXU=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-regex": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/is-regex/-/is-regex-1.1.3.tgz",
      "integrity": "sha512-qSVXFz28HM7y+IWX6vLCsexdlvzT1PJNFSBuaQLQ5o0IEw8UDYW6/2+eCMVyIsbM8CNLX2a/QWmSpyxYEHY7CQ==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.2",
        "has-symbols": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-stream": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/is-stream/-/is-stream-2.0.0.tgz",
      "integrity": "sha512-XCoy+WlUr7d1+Z8GgSuXmpuUFC9fOhRXglJMx+dwLKTkL44Cjd4W1Z5P+BQZpr+cR93aGP4S/s7Ftw6Nd/kiEw==",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-string": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/is-string/-/is-string-1.0.6.tgz",
      "integrity": "sha512-2gdzbKUuqtQ3lYNrUTQYoClPhm7oQu4UdpSZMp1/DGgkHBT8E2Z1l0yMdb6D4zNAxwDiMv8MdulKROJGNl0Q0w==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-svg": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/is-svg/-/is-svg-2.1.0.tgz",
      "integrity": "sha1-z2EJDaDZ77yrhyLeum8DIgjbsOk=",
      "dependencies": {
        "html-comment-regex": "^1.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-symbol": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/is-symbol/-/is-symbol-1.0.4.tgz",
      "integrity": "sha512-C/CPBqKWnvdcxqIARxyOh4v1UUEOCHpgDa0WYgpKDFMszcrPcffg5uhwSgPCLD2WWxmq6isisz87tzT01tuGhg==",
      "dev": true,
      "dependencies": {
        "has-symbols": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-typedarray": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-typedarray/-/is-typedarray-1.0.0.tgz",
      "integrity": "sha1-5HnICFjfDBsR3dppQPlgEfzaSpo="
    },
    "node_modules/is-utf8": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/is-utf8/-/is-utf8-0.2.1.tgz",
      "integrity": "sha1-Sw2hRCEE0bM2NA6AeX6GXPOffXI=",
      "dev": true
    },
    "node_modules/is-windows": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/is-windows/-/is-windows-1.0.2.tgz",
      "integrity": "sha512-eXK1UInq2bPmjyX6e3VHIzMLobc4J94i4AWn+Hpq3OU5KkrRC96OAcR3PRJ/pGu6m8TRnBHP9dkXQVsT/COVIA==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-wsl": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-wsl/-/is-wsl-1.1.0.tgz",
      "integrity": "sha1-HxbkqiKwTRM2tmGIpmrzxgDDpm0=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/is-yarn-global": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/is-yarn-global/-/is-yarn-global-0.3.0.tgz",
      "integrity": "sha512-VjSeb/lHmkoyd8ryPVIKvOCn4D1koMqY+vqyjjUfc3xyKtP4dYOxM44sZrnqQSzSds3xyOrUTLTC9LVCVgLngw=="
    },
    "node_modules/isarray": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
      "integrity": "sha1-u5NdSFgsuhaMBoNJV6VKPgcSTxE="
    },
    "node_modules/isemail": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/isemail/-/isemail-3.2.0.tgz",
      "integrity": "sha512-zKqkK+O+dGqevc93KNsbZ/TqTUFd46MwWjYOoMrjIMZ51eU7DtQG3Wmd9SQQT7i7RVnuTPEiYEWHU3MSbxC1Tg==",
      "dependencies": {
        "punycode": "2.x.x"
      },
      "engines": {
        "node": ">=4.0.0"
      }
    },
    "node_modules/isexe": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
      "integrity": "sha1-6PvzdNxVb/iUehDcsFctYz8s+hA=",
      "dev": true
    },
    "node_modules/isobject": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/isobject/-/isobject-2.1.0.tgz",
      "integrity": "sha1-8GVWEJaj8dou9GJy+BXIQNh+DIk=",
      "dev": true,
      "dependencies": {
        "isarray": "1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/isstream": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/isstream/-/isstream-0.1.2.tgz",
      "integrity": "sha1-R+Y/evVa+m+S4VAOaQ64uFKcCZo=",
      "dev": true
    },
    "node_modules/istanbul-api": {
      "version": "1.3.7",
      "resolved": "https://registry.npmjs.org/istanbul-api/-/istanbul-api-1.3.7.tgz",
      "integrity": "sha512-4/ApBnMVeEPG3EkSzcw25wDe4N66wxwn+KKn6b47vyek8Xb3NBAcg4xfuQbS7BqcZuTX4wxfD5lVagdggR3gyA==",
      "dev": true,
      "dependencies": {
        "async": "^2.1.4",
        "fileset": "^2.0.2",
        "istanbul-lib-coverage": "^1.2.1",
        "istanbul-lib-hook": "^1.2.2",
        "istanbul-lib-instrument": "^1.10.2",
        "istanbul-lib-report": "^1.1.5",
        "istanbul-lib-source-maps": "^1.2.6",
        "istanbul-reports": "^1.5.1",
        "js-yaml": "^3.7.0",
        "mkdirp": "^0.5.1",
        "once": "^1.4.0"
      }
    },
    "node_modules/istanbul-api/node_modules/mkdirp": {
      "version": "0.5.5",
      "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-0.5.5.tgz",
      "integrity": "sha512-NKmAlESf6jMGym1++R0Ra7wvhV+wFW63FaSOFPwRahvea0gMUcGUhVeAg/0BC0wiv9ih5NYPB1Wn1UEI1/L+xQ==",
      "dev": true,
      "dependencies": {
        "minimist": "^1.2.5"
      },
      "bin": {
        "mkdirp": "bin/cmd.js"
      }
    },
    "node_modules/istanbul-lib-coverage": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/istanbul-lib-coverage/-/istanbul-lib-coverage-1.2.1.tgz",
      "integrity": "sha512-PzITeunAgyGbtY1ibVIUiV679EFChHjoMNRibEIobvmrCRaIgwLxNucOSimtNWUhEib/oO7QY2imD75JVgCJWQ==",
      "dev": true
    },
    "node_modules/istanbul-lib-hook": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/istanbul-lib-hook/-/istanbul-lib-hook-1.2.2.tgz",
      "integrity": "sha512-/Jmq7Y1VeHnZEQ3TL10VHyb564mn6VrQXHchON9Jf/AEcmQ3ZIiyD1BVzNOKTZf/G3gE+kiGK6SmpF9y3qGPLw==",
      "dev": true,
      "dependencies": {
        "append-transform": "^0.4.0"
      }
    },
    "node_modules/istanbul-lib-instrument": {
      "version": "1.10.2",
      "resolved": "https://registry.npmjs.org/istanbul-lib-instrument/-/istanbul-lib-instrument-1.10.2.tgz",
      "integrity": "sha512-aWHxfxDqvh/ZlxR8BBaEPVSWDPUkGD63VjGQn3jcw8jCp7sHEMKcrj4xfJn/ABzdMEHiQNyvDQhqm5o8+SQg7A==",
      "dev": true,
      "dependencies": {
        "babel-generator": "^6.18.0",
        "babel-template": "^6.16.0",
        "babel-traverse": "^6.18.0",
        "babel-types": "^6.18.0",
        "babylon": "^6.18.0",
        "istanbul-lib-coverage": "^1.2.1",
        "semver": "^5.3.0"
      }
    },
    "node_modules/istanbul-lib-report": {
      "version": "1.1.5",
      "resolved": "https://registry.npmjs.org/istanbul-lib-report/-/istanbul-lib-report-1.1.5.tgz",
      "integrity": "sha512-UsYfRMoi6QO/doUshYNqcKJqVmFe9w51GZz8BS3WB0lYxAllQYklka2wP9+dGZeHYaWIdcXUx8JGdbqaoXRXzw==",
      "dev": true,
      "dependencies": {
        "istanbul-lib-coverage": "^1.2.1",
        "mkdirp": "^0.5.1",
        "path-parse": "^1.0.5",
        "supports-color": "^3.1.2"
      }
    },
    "node_modules/istanbul-lib-report/node_modules/has-flag": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-1.0.0.tgz",
      "integrity": "sha1-nZ55MWXOAXoA8AQYxD+UKnsdEfo=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/istanbul-lib-report/node_modules/mkdirp": {
      "version": "0.5.5",
      "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-0.5.5.tgz",
      "integrity": "sha512-NKmAlESf6jMGym1++R0Ra7wvhV+wFW63FaSOFPwRahvea0gMUcGUhVeAg/0BC0wiv9ih5NYPB1Wn1UEI1/L+xQ==",
      "dev": true,
      "dependencies": {
        "minimist": "^1.2.5"
      },
      "bin": {
        "mkdirp": "bin/cmd.js"
      }
    },
    "node_modules/istanbul-lib-report/node_modules/supports-color": {
      "version": "3.2.3",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-3.2.3.tgz",
      "integrity": "sha1-ZawFBLOVQXHYpklGsq48u4pfVPY=",
      "dev": true,
      "dependencies": {
        "has-flag": "^1.0.0"
      },
      "engines": {
        "node": ">=0.8.0"
      }
    },
    "node_modules/istanbul-lib-source-maps": {
      "version": "1.2.6",
      "resolved": "https://registry.npmjs.org/istanbul-lib-source-maps/-/istanbul-lib-source-maps-1.2.6.tgz",
      "integrity": "sha512-TtbsY5GIHgbMsMiRw35YBHGpZ1DVFEO19vxxeiDMYaeOFOCzfnYVxvl6pOUIZR4dtPhAGpSMup8OyF8ubsaqEg==",
      "dev": true,
      "dependencies": {
        "debug": "^3.1.0",
        "istanbul-lib-coverage": "^1.2.1",
        "mkdirp": "^0.5.1",
        "rimraf": "^2.6.1",
        "source-map": "^0.5.3"
      }
    },
    "node_modules/istanbul-lib-source-maps/node_modules/debug": {
      "version": "3.2.7",
      "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.7.tgz",
      "integrity": "sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ==",
      "dev": true,
      "dependencies": {
        "ms": "^2.1.1"
      }
    },
    "node_modules/istanbul-lib-source-maps/node_modules/mkdirp": {
      "version": "0.5.5",
      "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-0.5.5.tgz",
      "integrity": "sha512-NKmAlESf6jMGym1++R0Ra7wvhV+wFW63FaSOFPwRahvea0gMUcGUhVeAg/0BC0wiv9ih5NYPB1Wn1UEI1/L+xQ==",
      "dev": true,
      "dependencies": {
        "minimist": "^1.2.5"
      },
      "bin": {
        "mkdirp": "bin/cmd.js"
      }
    },
    "node_modules/istanbul-lib-source-maps/node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
      "dev": true
    },
    "node_modules/istanbul-lib-source-maps/node_modules/rimraf": {
      "version": "2.7.1",
      "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-2.7.1.tgz",
      "integrity": "sha512-uWjbaKIK3T1OSVptzX7Nl6PvQ3qAGtKEtVRjRuazjfL3Bx5eI409VZSqgND+4UNnmzLVdPj9FqFJNPqBZFve4w==",
      "dev": true,
      "dependencies": {
        "glob": "^7.1.3"
      },
      "bin": {
        "rimraf": "bin.js"
      }
    },
    "node_modules/istanbul-reports": {
      "version": "1.5.1",
      "resolved": "https://registry.npmjs.org/istanbul-reports/-/istanbul-reports-1.5.1.tgz",
      "integrity": "sha512-+cfoZ0UXzWjhAdzosCPP3AN8vvef8XDkWtTfgaN+7L3YTpNYITnCaEkceo5SEYy644VkHka/P1FvkWvrG/rrJw==",
      "dev": true,
      "dependencies": {
        "handlebars": "^4.0.3"
      }
    },
    "node_modules/jest": {
      "version": "22.2.2",
      "resolved": "https://registry.npmjs.org/jest/-/jest-22.2.2.tgz",
      "integrity": "sha512-AoRws1ybI3yslXZDOwNWjsLZcjykcf1nloeeXl9/ou0AyzEAfR1Xz0CrsPhVVZrQGOGWi1KCVNt6GsghbzkqLw==",
      "dev": true,
      "dependencies": {
        "import-local": "^1.0.0",
        "jest-cli": "^22.2.2"
      },
      "bin": {
        "jest": "bin/jest.js"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/jest-changed-files": {
      "version": "22.4.3",
      "resolved": "https://registry.npmjs.org/jest-changed-files/-/jest-changed-files-22.4.3.tgz",
      "integrity": "sha512-83Dh0w1aSkUNFhy5d2dvqWxi/y6weDwVVLU6vmK0cV9VpRxPzhTeGimbsbRDSnEoszhF937M4sDLLeS7Cu/Tmw==",
      "dev": true,
      "dependencies": {
        "throat": "^4.0.0"
      }
    },
    "node_modules/jest-config": {
      "version": "22.4.4",
      "resolved": "https://registry.npmjs.org/jest-config/-/jest-config-22.4.4.tgz",
      "integrity": "sha512-9CKfo1GC4zrXSoMLcNeDvQBfgtqGTB1uP8iDIZ97oB26RCUb886KkKWhVcpyxVDOUxbhN+uzcBCeFe7w+Iem4A==",
      "dev": true,
      "dependencies": {
        "chalk": "^2.0.1",
        "glob": "^7.1.1",
        "jest-environment-jsdom": "^22.4.1",
        "jest-environment-node": "^22.4.1",
        "jest-get-type": "^22.1.0",
        "jest-jasmine2": "^22.4.4",
        "jest-regex-util": "^22.1.0",
        "jest-resolve": "^22.4.2",
        "jest-util": "^22.4.1",
        "jest-validate": "^22.4.4",
        "pretty-format": "^22.4.0"
      }
    },
    "node_modules/jest-config/node_modules/ansi-styles": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
      "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
      "dev": true,
      "dependencies": {
        "color-convert": "^1.9.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/jest-config/node_modules/chalk": {
      "version": "2.4.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
      "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
      "dev": true,
      "dependencies": {
        "ansi-styles": "^3.2.1",
        "escape-string-regexp": "^1.0.5",
        "supports-color": "^5.3.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/jest-config/node_modules/color-convert": {
      "version": "1.9.3",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
      "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
      "dev": true,
      "dependencies": {
        "color-name": "1.1.3"
      }
    },
    "node_modules/jest-config/node_modules/color-name": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
      "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU=",
      "dev": true
    },
    "node_modules/jest-diff": {
      "version": "22.4.3",
      "resolved": "https://registry.npmjs.org/jest-diff/-/jest-diff-22.4.3.tgz",
      "integrity": "sha512-/QqGvCDP5oZOF6PebDuLwrB2BMD8ffJv6TAGAdEVuDx1+uEgrHpSFrfrOiMRx2eJ1hgNjlQrOQEHetVwij90KA==",
      "dev": true,
      "dependencies": {
        "chalk": "^2.0.1",
        "diff": "^3.2.0",
        "jest-get-type": "^22.4.3",
        "pretty-format": "^22.4.3"
      }
    },
    "node_modules/jest-diff/node_modules/ansi-styles": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
      "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
      "dev": true,
      "dependencies": {
        "color-convert": "^1.9.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/jest-diff/node_modules/chalk": {
      "version": "2.4.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
      "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
      "dev": true,
      "dependencies": {
        "ansi-styles": "^3.2.1",
        "escape-string-regexp": "^1.0.5",
        "supports-color": "^5.3.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/jest-diff/node_modules/color-convert": {
      "version": "1.9.3",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
      "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
      "dev": true,
      "dependencies": {
        "color-name": "1.1.3"
      }
    },
    "node_modules/jest-diff/node_modules/color-name": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
      "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU=",
      "dev": true
    },
    "node_modules/jest-docblock": {
      "version": "22.4.3",
      "resolved": "https://registry.npmjs.org/jest-docblock/-/jest-docblock-22.4.3.tgz",
      "integrity": "sha512-uPKBEAw7YrEMcXueMKZXn/rbMxBiSv48fSqy3uEnmgOlQhSX+lthBqHb1fKWNVmFqAp9E/RsSdBfiV31LbzaOg==",
      "dev": true,
      "dependencies": {
        "detect-newline": "^2.1.0"
      }
    },
    "node_modules/jest-environment-jsdom": {
      "version": "22.4.3",
      "resolved": "https://registry.npmjs.org/jest-environment-jsdom/-/jest-environment-jsdom-22.4.3.tgz",
      "integrity": "sha512-FviwfR+VyT3Datf13+ULjIMO5CSeajlayhhYQwpzgunswoaLIPutdbrnfUHEMyJCwvqQFaVtTmn9+Y8WCt6n1w==",
      "dev": true,
      "dependencies": {
        "jest-mock": "^22.4.3",
        "jest-util": "^22.4.3",
        "jsdom": "^11.5.1"
      }
    },
    "node_modules/jest-environment-node": {
      "version": "22.4.3",
      "resolved": "https://registry.npmjs.org/jest-environment-node/-/jest-environment-node-22.4.3.tgz",
      "integrity": "sha512-reZl8XF6t/lMEuPWwo9OLfttyC26A5AMgDyEQ6DBgZuyfyeNUzYT8BFo6uxCCP/Av/b7eb9fTi3sIHFPBzmlRA==",
      "dev": true,
      "dependencies": {
        "jest-mock": "^22.4.3",
        "jest-util": "^22.4.3"
      }
    },
    "node_modules/jest-get-type": {
      "version": "22.4.3",
      "resolved": "https://registry.npmjs.org/jest-get-type/-/jest-get-type-22.4.3.tgz",
      "integrity": "sha512-/jsz0Y+V29w1chdXVygEKSz2nBoHoYqNShPe+QgxSNjAuP1i8+k4LbQNrfoliKej0P45sivkSCh7yiD6ubHS3w==",
      "dev": true
    },
    "node_modules/jest-haste-map": {
      "version": "22.4.3",
      "resolved": "https://registry.npmjs.org/jest-haste-map/-/jest-haste-map-22.4.3.tgz",
      "integrity": "sha512-4Q9fjzuPVwnaqGKDpIsCSoTSnG3cteyk2oNVjBX12HHOaF1oxql+uUiqZb5Ndu7g/vTZfdNwwy4WwYogLh29DQ==",
      "dev": true,
      "dependencies": {
        "fb-watchman": "^2.0.0",
        "graceful-fs": "^4.1.11",
        "jest-docblock": "^22.4.3",
        "jest-serializer": "^22.4.3",
        "jest-worker": "^22.4.3",
        "micromatch": "^2.3.11",
        "sane": "^2.0.0"
      }
    },
    "node_modules/jest-jasmine2": {
      "version": "22.4.4",
      "resolved": "https://registry.npmjs.org/jest-jasmine2/-/jest-jasmine2-22.4.4.tgz",
      "integrity": "sha512-nK3vdUl50MuH7vj/8at7EQVjPGWCi3d5+6aCi7Gxy/XMWdOdbH1qtO/LjKbqD8+8dUAEH+BVVh7HkjpCWC1CSw==",
      "dev": true,
      "dependencies": {
        "chalk": "^2.0.1",
        "co": "^4.6.0",
        "expect": "^22.4.0",
        "graceful-fs": "^4.1.11",
        "is-generator-fn": "^1.0.0",
        "jest-diff": "^22.4.0",
        "jest-matcher-utils": "^22.4.0",
        "jest-message-util": "^22.4.0",
        "jest-snapshot": "^22.4.0",
        "jest-util": "^22.4.1",
        "source-map-support": "^0.5.0"
      }
    },
    "node_modules/jest-jasmine2/node_modules/ansi-styles": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
      "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
      "dev": true,
      "dependencies": {
        "color-convert": "^1.9.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/jest-jasmine2/node_modules/chalk": {
      "version": "2.4.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
      "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
      "dev": true,
      "dependencies": {
        "ansi-styles": "^3.2.1",
        "escape-string-regexp": "^1.0.5",
        "supports-color": "^5.3.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/jest-jasmine2/node_modules/color-convert": {
      "version": "1.9.3",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
      "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
      "dev": true,
      "dependencies": {
        "color-name": "1.1.3"
      }
    },
    "node_modules/jest-jasmine2/node_modules/color-name": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
      "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU=",
      "dev": true
    },
    "node_modules/jest-leak-detector": {
      "version": "22.4.3",
      "resolved": "https://registry.npmjs.org/jest-leak-detector/-/jest-leak-detector-22.4.3.tgz",
      "integrity": "sha512-NZpR/Ls7+ndO57LuXROdgCGz2RmUdC541tTImL9bdUtU3WadgFGm0yV+Ok4Fuia/1rLAn5KaJ+i76L6e3zGJYQ==",
      "dev": true,
      "dependencies": {
        "pretty-format": "^22.4.3"
      }
    },
    "node_modules/jest-matcher-utils": {
      "version": "22.4.3",
      "resolved": "https://registry.npmjs.org/jest-matcher-utils/-/jest-matcher-utils-22.4.3.tgz",
      "integrity": "sha512-lsEHVaTnKzdAPR5t4B6OcxXo9Vy4K+kRRbG5gtddY8lBEC+Mlpvm1CJcsMESRjzUhzkz568exMV1hTB76nAKbA==",
      "dev": true,
      "dependencies": {
        "chalk": "^2.0.1",
        "jest-get-type": "^22.4.3",
        "pretty-format": "^22.4.3"
      }
    },
    "node_modules/jest-matcher-utils/node_modules/ansi-styles": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
      "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
      "dev": true,
      "dependencies": {
        "color-convert": "^1.9.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/jest-matcher-utils/node_modules/chalk": {
      "version": "2.4.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
      "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
      "dev": true,
      "dependencies": {
        "ansi-styles": "^3.2.1",
        "escape-string-regexp": "^1.0.5",
        "supports-color": "^5.3.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/jest-matcher-utils/node_modules/color-convert": {
      "version": "1.9.3",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
      "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
      "dev": true,
      "dependencies": {
        "color-name": "1.1.3"
      }
    },
    "node_modules/jest-matcher-utils/node_modules/color-name": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
      "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU=",
      "dev": true
    },
    "node_modules/jest-message-util": {
      "version": "22.4.3",
      "resolved": "https://registry.npmjs.org/jest-message-util/-/jest-message-util-22.4.3.tgz",
      "integrity": "sha512-iAMeKxhB3Se5xkSjU0NndLLCHtP4n+GtCqV0bISKA5dmOXQfEbdEmYiu2qpnWBDCQdEafNDDU6Q+l6oBMd/+BA==",
      "dev": true,
      "dependencies": {
        "@babel/code-frame": "^7.0.0-beta.35",
        "chalk": "^2.0.1",
        "micromatch": "^2.3.11",
        "slash": "^1.0.0",
        "stack-utils": "^1.0.1"
      }
    },
    "node_modules/jest-message-util/node_modules/ansi-styles": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
      "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
      "dev": true,
      "dependencies": {
        "color-convert": "^1.9.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/jest-message-util/node_modules/chalk": {
      "version": "2.4.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
      "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
      "dev": true,
      "dependencies": {
        "ansi-styles": "^3.2.1",
        "escape-string-regexp": "^1.0.5",
        "supports-color": "^5.3.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/jest-message-util/node_modules/color-convert": {
      "version": "1.9.3",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
      "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
      "dev": true,
      "dependencies": {
        "color-name": "1.1.3"
      }
    },
    "node_modules/jest-message-util/node_modules/color-name": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
      "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU=",
      "dev": true
    },
    "node_modules/jest-mock": {
      "version": "22.4.3",
      "resolved": "https://registry.npmjs.org/jest-mock/-/jest-mock-22.4.3.tgz",
      "integrity": "sha512-+4R6mH5M1G4NK16CKg9N1DtCaFmuxhcIqF4lQK/Q1CIotqMs/XBemfpDPeVZBFow6iyUNu6EBT9ugdNOTT5o5Q==",
      "dev": true
    },
    "node_modules/jest-regex-util": {
      "version": "22.4.3",
      "resolved": "https://registry.npmjs.org/jest-regex-util/-/jest-regex-util-22.4.3.tgz",
      "integrity": "sha512-LFg1gWr3QinIjb8j833bq7jtQopiwdAs67OGfkPrvy7uNUbVMfTXXcOKXJaeY5GgjobELkKvKENqq1xrUectWg==",
      "dev": true
    },
    "node_modules/jest-resolve": {
      "version": "22.4.3",
      "resolved": "https://registry.npmjs.org/jest-resolve/-/jest-resolve-22.4.3.tgz",
      "integrity": "sha512-u3BkD/MQBmwrOJDzDIaxpyqTxYH+XqAXzVJP51gt29H8jpj3QgKof5GGO2uPGKGeA1yTMlpbMs1gIQ6U4vcRhw==",
      "dev": true,
      "dependencies": {
        "browser-resolve": "^1.11.2",
        "chalk": "^2.0.1"
      }
    },
    "node_modules/jest-resolve-dependencies": {
      "version": "22.4.3",
      "resolved": "https://registry.npmjs.org/jest-resolve-dependencies/-/jest-resolve-dependencies-22.4.3.tgz",
      "integrity": "sha512-06czCMVToSN8F2U4EvgSB1Bv/56gc7MpCftZ9z9fBgUQM7dzHGCMBsyfVA6dZTx8v0FDcnALf7hupeQxaBCvpA==",
      "dev": true,
      "dependencies": {
        "jest-regex-util": "^22.4.3"
      }
    },
    "node_modules/jest-resolve/node_modules/ansi-styles": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
      "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
      "dev": true,
      "dependencies": {
        "color-convert": "^1.9.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/jest-resolve/node_modules/chalk": {
      "version": "2.4.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
      "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
      "dev": true,
      "dependencies": {
        "ansi-styles": "^3.2.1",
        "escape-string-regexp": "^1.0.5",
        "supports-color": "^5.3.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/jest-resolve/node_modules/color-convert": {
      "version": "1.9.3",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
      "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
      "dev": true,
      "dependencies": {
        "color-name": "1.1.3"
      }
    },
    "node_modules/jest-resolve/node_modules/color-name": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
      "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU=",
      "dev": true
    },
    "node_modules/jest-runner": {
      "version": "22.4.4",
      "resolved": "https://registry.npmjs.org/jest-runner/-/jest-runner-22.4.4.tgz",
      "integrity": "sha512-5S/OpB51igQW9xnkM5Tgd/7ZjiAuIoiJAVtvVTBcEBiXBIFzWM3BAMPBM19FX68gRV0KWyFuGKj0EY3M3aceeQ==",
      "dev": true,
      "dependencies": {
        "exit": "^0.1.2",
        "jest-config": "^22.4.4",
        "jest-docblock": "^22.4.0",
        "jest-haste-map": "^22.4.2",
        "jest-jasmine2": "^22.4.4",
        "jest-leak-detector": "^22.4.0",
        "jest-message-util": "^22.4.0",
        "jest-runtime": "^22.4.4",
        "jest-util": "^22.4.1",
        "jest-worker": "^22.2.2",
        "throat": "^4.0.0"
      }
    },
    "node_modules/jest-runtime": {
      "version": "22.4.4",
      "resolved": "https://registry.npmjs.org/jest-runtime/-/jest-runtime-22.4.4.tgz",
      "integrity": "sha512-WRTj9m///npte1YjuphCYX7GRY/c2YvJImU9t7qOwFcqHr4YMzmX6evP/3Sehz5DKW2Vi8ONYPCFWe36JVXxfw==",
      "dev": true,
      "dependencies": {
        "babel-core": "^6.0.0",
        "babel-jest": "^22.4.4",
        "babel-plugin-istanbul": "^4.1.5",
        "chalk": "^2.0.1",
        "convert-source-map": "^1.4.0",
        "exit": "^0.1.2",
        "graceful-fs": "^4.1.11",
        "jest-config": "^22.4.4",
        "jest-haste-map": "^22.4.2",
        "jest-regex-util": "^22.1.0",
        "jest-resolve": "^22.4.2",
        "jest-util": "^22.4.1",
        "jest-validate": "^22.4.4",
        "json-stable-stringify": "^1.0.1",
        "micromatch": "^2.3.11",
        "realpath-native": "^1.0.0",
        "slash": "^1.0.0",
        "strip-bom": "3.0.0",
        "write-file-atomic": "^2.1.0",
        "yargs": "^10.0.3"
      },
      "bin": {
        "jest-runtime": "bin/jest-runtime.js"
      }
    },
    "node_modules/jest-runtime/node_modules/ansi-styles": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
      "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
      "dev": true,
      "dependencies": {
        "color-convert": "^1.9.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/jest-runtime/node_modules/chalk": {
      "version": "2.4.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
      "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
      "dev": true,
      "dependencies": {
        "ansi-styles": "^3.2.1",
        "escape-string-regexp": "^1.0.5",
        "supports-color": "^5.3.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/jest-runtime/node_modules/color-convert": {
      "version": "1.9.3",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
      "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
      "dev": true,
      "dependencies": {
        "color-name": "1.1.3"
      }
    },
    "node_modules/jest-runtime/node_modules/color-name": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
      "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU=",
      "dev": true
    },
    "node_modules/jest-runtime/node_modules/strip-bom": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-3.0.0.tgz",
      "integrity": "sha1-IzTBjpx1n3vdVv3vfprj1YjmjtM=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/jest-runtime/node_modules/write-file-atomic": {
      "version": "2.4.3",
      "resolved": "https://registry.npmjs.org/write-file-atomic/-/write-file-atomic-2.4.3.tgz",
      "integrity": "sha512-GaETH5wwsX+GcnzhPgKcKjJ6M2Cq3/iZp1WyY/X1CSqrW+jVNM9Y7D8EC2sM4ZG/V8wZlSniJnCKWPmBYAucRQ==",
      "dev": true,
      "dependencies": {
        "graceful-fs": "^4.1.11",
        "imurmurhash": "^0.1.4",
        "signal-exit": "^3.0.2"
      }
    },
    "node_modules/jest-serializer": {
      "version": "22.4.3",
      "resolved": "https://registry.npmjs.org/jest-serializer/-/jest-serializer-22.4.3.tgz",
      "integrity": "sha512-uPaUAppx4VUfJ0QDerpNdF43F68eqKWCzzhUlKNDsUPhjOon7ZehR4C809GCqh765FoMRtTVUVnGvIoskkYHiw==",
      "dev": true
    },
    "node_modules/jest-snapshot": {
      "version": "22.4.3",
      "resolved": "https://registry.npmjs.org/jest-snapshot/-/jest-snapshot-22.4.3.tgz",
      "integrity": "sha512-JXA0gVs5YL0HtLDCGa9YxcmmV2LZbwJ+0MfyXBBc5qpgkEYITQFJP7XNhcHFbUvRiniRpRbGVfJrOoYhhGE0RQ==",
      "dev": true,
      "dependencies": {
        "chalk": "^2.0.1",
        "jest-diff": "^22.4.3",
        "jest-matcher-utils": "^22.4.3",
        "mkdirp": "^0.5.1",
        "natural-compare": "^1.4.0",
        "pretty-format": "^22.4.3"
      }
    },
    "node_modules/jest-snapshot/node_modules/ansi-styles": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
      "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
      "dev": true,
      "dependencies": {
        "color-convert": "^1.9.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/jest-snapshot/node_modules/chalk": {
      "version": "2.4.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
      "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
      "dev": true,
      "dependencies": {
        "ansi-styles": "^3.2.1",
        "escape-string-regexp": "^1.0.5",
        "supports-color": "^5.3.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/jest-snapshot/node_modules/color-convert": {
      "version": "1.9.3",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
      "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
      "dev": true,
      "dependencies": {
        "color-name": "1.1.3"
      }
    },
    "node_modules/jest-snapshot/node_modules/color-name": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
      "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU=",
      "dev": true
    },
    "node_modules/jest-snapshot/node_modules/mkdirp": {
      "version": "0.5.5",
      "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-0.5.5.tgz",
      "integrity": "sha512-NKmAlESf6jMGym1++R0Ra7wvhV+wFW63FaSOFPwRahvea0gMUcGUhVeAg/0BC0wiv9ih5NYPB1Wn1UEI1/L+xQ==",
      "dev": true,
      "dependencies": {
        "minimist": "^1.2.5"
      },
      "bin": {
        "mkdirp": "bin/cmd.js"
      }
    },
    "node_modules/jest-util": {
      "version": "22.4.3",
      "resolved": "https://registry.npmjs.org/jest-util/-/jest-util-22.4.3.tgz",
      "integrity": "sha512-rfDfG8wyC5pDPNdcnAlZgwKnzHvZDu8Td2NJI/jAGKEGxJPYiE4F0ss/gSAkG4778Y23Hvbz+0GMrDJTeo7RjQ==",
      "dev": true,
      "dependencies": {
        "callsites": "^2.0.0",
        "chalk": "^2.0.1",
        "graceful-fs": "^4.1.11",
        "is-ci": "^1.0.10",
        "jest-message-util": "^22.4.3",
        "mkdirp": "^0.5.1",
        "source-map": "^0.6.0"
      }
    },
    "node_modules/jest-util/node_modules/ansi-styles": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
      "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
      "dev": true,
      "dependencies": {
        "color-convert": "^1.9.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/jest-util/node_modules/chalk": {
      "version": "2.4.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
      "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
      "dev": true,
      "dependencies": {
        "ansi-styles": "^3.2.1",
        "escape-string-regexp": "^1.0.5",
        "supports-color": "^5.3.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/jest-util/node_modules/ci-info": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/ci-info/-/ci-info-1.6.0.tgz",
      "integrity": "sha512-vsGdkwSCDpWmP80ncATX7iea5DWQemg1UgCW5J8tqjU3lYw4FBYuj89J0CTVomA7BEfvSZd84GmHko+MxFQU2A==",
      "dev": true
    },
    "node_modules/jest-util/node_modules/color-convert": {
      "version": "1.9.3",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
      "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
      "dev": true,
      "dependencies": {
        "color-name": "1.1.3"
      }
    },
    "node_modules/jest-util/node_modules/color-name": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
      "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU=",
      "dev": true
    },
    "node_modules/jest-util/node_modules/is-ci": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/is-ci/-/is-ci-1.2.1.tgz",
      "integrity": "sha512-s6tfsaQaQi3JNciBH6shVqEDvhGut0SUXr31ag8Pd8BBbVVlcGfWhpPmEOoM6RJ5TFhbypvf5yyRw/VXW1IiWg==",
      "dev": true,
      "dependencies": {
        "ci-info": "^1.5.0"
      },
      "bin": {
        "is-ci": "bin.js"
      }
    },
    "node_modules/jest-util/node_modules/mkdirp": {
      "version": "0.5.5",
      "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-0.5.5.tgz",
      "integrity": "sha512-NKmAlESf6jMGym1++R0Ra7wvhV+wFW63FaSOFPwRahvea0gMUcGUhVeAg/0BC0wiv9ih5NYPB1Wn1UEI1/L+xQ==",
      "dev": true,
      "dependencies": {
        "minimist": "^1.2.5"
      },
      "bin": {
        "mkdirp": "bin/cmd.js"
      }
    },
    "node_modules/jest-util/node_modules/source-map": {
      "version": "0.6.1",
      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
      "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/jest-validate": {
      "version": "22.4.4",
      "resolved": "https://registry.npmjs.org/jest-validate/-/jest-validate-22.4.4.tgz",
      "integrity": "sha512-dmlf4CIZRGvkaVg3fa0uetepcua44DHtktHm6rcoNVtYlpwe6fEJRkMFsaUVcFHLzbuBJ2cPw9Gl9TKfnzMVwg==",
      "dev": true,
      "dependencies": {
        "chalk": "^2.0.1",
        "jest-config": "^22.4.4",
        "jest-get-type": "^22.1.0",
        "leven": "^2.1.0",
        "pretty-format": "^22.4.0"
      }
    },
    "node_modules/jest-validate/node_modules/ansi-styles": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
      "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
      "dev": true,
      "dependencies": {
        "color-convert": "^1.9.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/jest-validate/node_modules/chalk": {
      "version": "2.4.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
      "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
      "dev": true,
      "dependencies": {
        "ansi-styles": "^3.2.1",
        "escape-string-regexp": "^1.0.5",
        "supports-color": "^5.3.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/jest-validate/node_modules/color-convert": {
      "version": "1.9.3",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
      "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
      "dev": true,
      "dependencies": {
        "color-name": "1.1.3"
      }
    },
    "node_modules/jest-validate/node_modules/color-name": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
      "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU=",
      "dev": true
    },
    "node_modules/jest-worker": {
      "version": "22.4.3",
      "resolved": "https://registry.npmjs.org/jest-worker/-/jest-worker-22.4.3.tgz",
      "integrity": "sha512-B1ucW4fI8qVAuZmicFxI1R3kr2fNeYJyvIQ1rKcuLYnenFV5K5aMbxFj6J0i00Ju83S8jP2d7Dz14+AvbIHRYQ==",
      "dev": true,
      "dependencies": {
        "merge-stream": "^1.0.1"
      }
    },
    "node_modules/jest/node_modules/ansi-regex": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-3.0.0.tgz",
      "integrity": "sha1-7QMXwyIGT3lGbAKWa922Bas32Zg=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/jest/node_modules/ansi-styles": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
      "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
      "dev": true,
      "dependencies": {
        "color-convert": "^1.9.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/jest/node_modules/chalk": {
      "version": "2.4.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
      "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
      "dev": true,
      "dependencies": {
        "ansi-styles": "^3.2.1",
        "escape-string-regexp": "^1.0.5",
        "supports-color": "^5.3.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/jest/node_modules/ci-info": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/ci-info/-/ci-info-1.6.0.tgz",
      "integrity": "sha512-vsGdkwSCDpWmP80ncATX7iea5DWQemg1UgCW5J8tqjU3lYw4FBYuj89J0CTVomA7BEfvSZd84GmHko+MxFQU2A==",
      "dev": true
    },
    "node_modules/jest/node_modules/color-convert": {
      "version": "1.9.3",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
      "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
      "dev": true,
      "dependencies": {
        "color-name": "1.1.3"
      }
    },
    "node_modules/jest/node_modules/color-name": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
      "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU=",
      "dev": true
    },
    "node_modules/jest/node_modules/is-ci": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/is-ci/-/is-ci-1.2.1.tgz",
      "integrity": "sha512-s6tfsaQaQi3JNciBH6shVqEDvhGut0SUXr31ag8Pd8BBbVVlcGfWhpPmEOoM6RJ5TFhbypvf5yyRw/VXW1IiWg==",
      "dev": true,
      "dependencies": {
        "ci-info": "^1.5.0"
      },
      "bin": {
        "is-ci": "bin.js"
      }
    },
    "node_modules/jest/node_modules/jest-cli": {
      "version": "22.4.4",
      "resolved": "https://registry.npmjs.org/jest-cli/-/jest-cli-22.4.4.tgz",
      "integrity": "sha512-I9dsgkeyjVEEZj9wrGrqlH+8OlNob9Iptyl+6L5+ToOLJmHm4JwOPatin1b2Bzp5R5YRQJ+oiedx7o1H7wJzhA==",
      "dev": true,
      "dependencies": {
        "ansi-escapes": "^3.0.0",
        "chalk": "^2.0.1",
        "exit": "^0.1.2",
        "glob": "^7.1.2",
        "graceful-fs": "^4.1.11",
        "import-local": "^1.0.0",
        "is-ci": "^1.0.10",
        "istanbul-api": "^1.1.14",
        "istanbul-lib-coverage": "^1.1.1",
        "istanbul-lib-instrument": "^1.8.0",
        "istanbul-lib-source-maps": "^1.2.1",
        "jest-changed-files": "^22.2.0",
        "jest-config": "^22.4.4",
        "jest-environment-jsdom": "^22.4.1",
        "jest-get-type": "^22.1.0",
        "jest-haste-map": "^22.4.2",
        "jest-message-util": "^22.4.0",
        "jest-regex-util": "^22.1.0",
        "jest-resolve-dependencies": "^22.1.0",
        "jest-runner": "^22.4.4",
        "jest-runtime": "^22.4.4",
        "jest-snapshot": "^22.4.0",
        "jest-util": "^22.4.1",
        "jest-validate": "^22.4.4",
        "jest-worker": "^22.2.2",
        "micromatch": "^2.3.11",
        "node-notifier": "^5.2.1",
        "realpath-native": "^1.0.0",
        "rimraf": "^2.5.4",
        "slash": "^1.0.0",
        "string-length": "^2.0.0",
        "strip-ansi": "^4.0.0",
        "which": "^1.2.12",
        "yargs": "^10.0.3"
      },
      "bin": {
        "jest": "bin/jest.js"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/jest/node_modules/rimraf": {
      "version": "2.7.1",
      "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-2.7.1.tgz",
      "integrity": "sha512-uWjbaKIK3T1OSVptzX7Nl6PvQ3qAGtKEtVRjRuazjfL3Bx5eI409VZSqgND+4UNnmzLVdPj9FqFJNPqBZFve4w==",
      "dev": true,
      "dependencies": {
        "glob": "^7.1.3"
      },
      "bin": {
        "rimraf": "bin.js"
      }
    },
    "node_modules/jest/node_modules/strip-ansi": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-4.0.0.tgz",
      "integrity": "sha1-qEeQIusaw2iocTibY1JixQXuNo8=",
      "dev": true,
      "dependencies": {
        "ansi-regex": "^3.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/jmespath": {
      "version": "0.15.0",
      "resolved": "https://registry.npmjs.org/jmespath/-/jmespath-0.15.0.tgz",
      "integrity": "sha1-o/Iiqarp+Wb10nx5ZRDigJF2Qhc=",
      "engines": {
        "node": ">= 0.6.0"
      }
    },
    "node_modules/joi": {
      "version": "13.1.0",
      "resolved": "https://registry.npmjs.org/joi/-/joi-13.1.0.tgz",
      "integrity": "sha512-x6pGmDYI6hwNi3skP6irQqRaJntzeaWmZ4rsnjc/NTlf6P5Gp3Aw/O8REe8oLJ6wPhrzd9K3RW1m3Yz/Hx4Weg==",
      "deprecated": "This version has been deprecated in accordance with the hapi support policy (hapi.im/support). Please upgrade to the latest version to get the best features, bug fixes, and security patches. If you are unable to upgrade at this time, paid support is available for older versions (hapi.im/commercial).",
      "dependencies": {
        "hoek": "5.x.x",
        "isemail": "3.x.x",
        "topo": "3.x.x"
      },
      "engines": {
        "node": ">=8.9.0"
      }
    },
    "node_modules/joi-objectid": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/joi-objectid/-/joi-objectid-3.0.1.tgz",
      "integrity": "sha512-V/3hbTlGpvJ03Me6DJbdBI08hBTasFOmipsauOsxOSnsF1blxV537WTl1zPwbfcKle4AK0Ma4OPnzMH4LlvTpQ=="
    },
    "node_modules/js-tokens": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-3.0.2.tgz",
      "integrity": "sha1-mGbfOVECEw449/mWvOtlRDIJwls=",
      "dev": true
    },
    "node_modules/js-yaml": {
      "version": "3.14.1",
      "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-3.14.1.tgz",
      "integrity": "sha512-okMH7OXXJ7YrN9Ok3/SXrnu4iX9yOk+25nqX4imS2npuvTYDmo/QEZoqwZkYaIDk3jVvBOTOIEgEhaLOynBS9g==",
      "dev": true,
      "dependencies": {
        "argparse": "^1.0.7",
        "esprima": "^4.0.0"
      },
      "bin": {
        "js-yaml": "bin/js-yaml.js"
      }
    },
    "node_modules/jsbn": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/jsbn/-/jsbn-0.1.1.tgz",
      "integrity": "sha1-peZUwuWi3rXyAdls77yoDA7y9RM=",
      "dev": true
    },
    "node_modules/jsdom": {
      "version": "11.12.0",
      "resolved": "https://registry.npmjs.org/jsdom/-/jsdom-11.12.0.tgz",
      "integrity": "sha512-y8Px43oyiBM13Zc1z780FrfNLJCXTL40EWlty/LXUtcjykRBNgLlCjWXpfSPBl2iv+N7koQN+dvqszHZgT/Fjw==",
      "dev": true,
      "dependencies": {
        "abab": "^2.0.0",
        "acorn": "^5.5.3",
        "acorn-globals": "^4.1.0",
        "array-equal": "^1.0.0",
        "cssom": ">= 0.3.2 < 0.4.0",
        "cssstyle": "^1.0.0",
        "data-urls": "^1.0.0",
        "domexception": "^1.0.1",
        "escodegen": "^1.9.1",
        "html-encoding-sniffer": "^1.0.2",
        "left-pad": "^1.3.0",
        "nwsapi": "^2.0.7",
        "parse5": "4.0.0",
        "pn": "^1.1.0",
        "request": "^2.87.0",
        "request-promise-native": "^1.0.5",
        "sax": "^1.2.4",
        "symbol-tree": "^3.2.2",
        "tough-cookie": "^2.3.4",
        "w3c-hr-time": "^1.0.1",
        "webidl-conversions": "^4.0.2",
        "whatwg-encoding": "^1.0.3",
        "whatwg-mimetype": "^2.1.0",
        "whatwg-url": "^6.4.1",
        "ws": "^5.2.0",
        "xml-name-validator": "^3.0.0"
      }
    },
    "node_modules/jsesc": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-1.3.0.tgz",
      "integrity": "sha1-RsP+yMGJKxKwgz25vHYiF226s0s=",
      "dev": true,
      "bin": {
        "jsesc": "bin/jsesc"
      }
    },
    "node_modules/json-buffer": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/json-buffer/-/json-buffer-3.0.0.tgz",
      "integrity": "sha1-Wx85evx11ne96Lz8Dkfh+aPZqJg="
    },
    "node_modules/json-schema": {
      "version": "0.2.3",
      "resolved": "https://registry.npmjs.org/json-schema/-/json-schema-0.2.3.tgz",
      "integrity": "sha1-tIDIkuWaLwWVTOcnvT8qTogvnhM=",
      "dev": true
    },
    "node_modules/json-schema-traverse": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
      "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
      "dev": true
    },
    "node_modules/json-stable-stringify": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/json-stable-stringify/-/json-stable-stringify-1.0.1.tgz",
      "integrity": "sha1-mnWdOcXy/1A/1TAGRu1EX4jE+a8=",
      "dev": true,
      "dependencies": {
        "jsonify": "~0.0.0"
      }
    },
    "node_modules/json-stringify-safe": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/json-stringify-safe/-/json-stringify-safe-5.0.1.tgz",
      "integrity": "sha1-Epai1Y/UXxmg9s4B1lcB4sc1tus=",
      "dev": true
    },
    "node_modules/json5": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/json5/-/json5-2.2.0.tgz",
      "integrity": "sha512-f+8cldu7X/y7RAJurMEJmdoKXGB/X550w2Nr3tTbezL6RwEE/iMcm+tZnXeoZtKuOq6ft8+CqzEkrIgx1fPoQA==",
      "dependencies": {
        "minimist": "^1.2.5"
      },
      "bin": {
        "json5": "lib/cli.js"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/jsonify": {
      "version": "0.0.0",
      "resolved": "https://registry.npmjs.org/jsonify/-/jsonify-0.0.0.tgz",
      "integrity": "sha1-LHS27kHZPKUbe1qu6PUDYx0lKnM=",
      "dev": true,
      "engines": {
        "node": "*"
      }
    },
    "node_modules/jsonwebtoken": {
      "version": "8.5.1",
      "resolved": "https://registry.npmjs.org/jsonwebtoken/-/jsonwebtoken-8.5.1.tgz",
      "integrity": "sha512-XjwVfRS6jTMsqYs0EsuJ4LGxXV14zQybNd4L2r0UvbVnSF9Af8x7p5MzbJ90Ioz/9TI41/hTCvznF/loiSzn8w==",
      "dependencies": {
        "jws": "^3.2.2",
        "lodash.includes": "^4.3.0",
        "lodash.isboolean": "^3.0.3",
        "lodash.isinteger": "^4.0.4",
        "lodash.isnumber": "^3.0.3",
        "lodash.isplainobject": "^4.0.6",
        "lodash.isstring": "^4.0.1",
        "lodash.once": "^4.0.0",
        "ms": "^2.1.1",
        "semver": "^5.6.0"
      },
      "engines": {
        "node": ">=4",
        "npm": ">=1.4.28"
      }
    },
    "node_modules/jsonwebtoken/node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA=="
    },
    "node_modules/jsprim": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/jsprim/-/jsprim-1.4.1.tgz",
      "integrity": "sha1-MT5mvB5cwG5Di8G3SZwuXFastqI=",
      "dev": true,
      "engines": [
        "node >=0.6.0"
      ],
      "dependencies": {
        "assert-plus": "1.0.0",
        "extsprintf": "1.3.0",
        "json-schema": "0.2.3",
        "verror": "1.10.0"
      }
    },
    "node_modules/jwa": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/jwa/-/jwa-1.4.1.tgz",
      "integrity": "sha512-qiLX/xhEEFKUAJ6FiBMbes3w9ATzyk5W7Hvzpa/SLYdxNtng+gcurvrI7TbACjIXlsJyr05/S1oUhZrc63evQA==",
      "dependencies": {
        "buffer-equal-constant-time": "1.0.1",
        "ecdsa-sig-formatter": "1.0.11",
        "safe-buffer": "^5.0.1"
      }
    },
    "node_modules/jws": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/jws/-/jws-3.2.2.tgz",
      "integrity": "sha512-YHlZCB6lMTllWDtSPHz/ZXTsi8S00usEV6v1tjq8tOUZzw7DpSDWVXjXDre6ed1w/pd495ODpHZYSdkRTsa0HA==",
      "dependencies": {
        "jwa": "^1.4.1",
        "safe-buffer": "^5.0.1"
      }
    },
    "node_modules/kareem": {
      "version": "2.3.2",
      "resolved": "https://registry.npmjs.org/kareem/-/kareem-2.3.2.tgz",
      "integrity": "sha512-STHz9P7X2L4Kwn72fA4rGyqyXdmrMSdxqHx9IXon/FXluXieaFA6KJ2upcHAHxQPQ0LeM/OjLrhFxifHewOALQ=="
    },
    "node_modules/keyv": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/keyv/-/keyv-3.1.0.tgz",
      "integrity": "sha512-9ykJ/46SN/9KPM/sichzQ7OvXyGDYKGTaDlKMGCAlg2UK8KRy4jb0d8sFc+0Tt0YYnThq8X2RZgCg74RPxgcVA==",
      "dependencies": {
        "json-buffer": "3.0.0"
      }
    },
    "node_modules/kind-of": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
      "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
      "dev": true,
      "dependencies": {
        "is-buffer": "^1.1.5"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/kuler": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/kuler/-/kuler-2.0.0.tgz",
      "integrity": "sha512-Xq9nH7KlWZmXAtodXDDRE7vs6DU1gTU8zYDHDiWLSip45Egwq3plLHzPn27NgvzL2r1LMPC1vdqh98sQxtqj4A=="
    },
    "node_modules/latest-version": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/latest-version/-/latest-version-5.1.0.tgz",
      "integrity": "sha512-weT+r0kTkRQdCdYCNtkMwWXQTMEswKrFBkm4ckQOMVhhqhIMI1UT2hMj+1iigIhgSZm5gTmrRXBNoGUgaTY1xA==",
      "dependencies": {
        "package-json": "^6.3.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/lcid": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/lcid/-/lcid-1.0.0.tgz",
      "integrity": "sha1-MIrMr6C8SDo4Z7S28rlQYlHRuDU=",
      "dev": true,
      "dependencies": {
        "invert-kv": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/left-pad": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/left-pad/-/left-pad-1.3.0.tgz",
      "integrity": "sha512-XI5MPzVNApjAyhQzphX8BkmKsKUxD4LdyK24iZeQGinBN9yTQT3bFlCBy/aVx2HrNcqQGsdot8ghrjyrvMCoEA==",
      "deprecated": "use String.prototype.padStart()",
      "dev": true
    },
    "node_modules/leven": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/leven/-/leven-2.1.0.tgz",
      "integrity": "sha1-wuep93IJTe6dNCAq6KzORoeHVYA=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/levn": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/levn/-/levn-0.3.0.tgz",
      "integrity": "sha1-OwmSTt+fCDwEkP3UwLxEIeBHZO4=",
      "dev": true,
      "dependencies": {
        "prelude-ls": "~1.1.2",
        "type-check": "~0.3.2"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/load-json-file": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/load-json-file/-/load-json-file-1.1.0.tgz",
      "integrity": "sha1-lWkFcI1YtLq0wiYbBPWfMcmTdMA=",
      "dev": true,
      "dependencies": {
        "graceful-fs": "^4.1.2",
        "parse-json": "^2.2.0",
        "pify": "^2.0.0",
        "pinkie-promise": "^2.0.0",
        "strip-bom": "^2.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/locate-path": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-2.0.0.tgz",
      "integrity": "sha1-K1aLJl7slExtnA3pw9u7ygNUzY4=",
      "dev": true,
      "dependencies": {
        "p-locate": "^2.0.0",
        "path-exists": "^3.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/lodash": {
      "version": "4.17.21",
      "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.21.tgz",
      "integrity": "sha512-v2kDEe57lecTulaDIuNTPy3Ry4gLGJ6Z1O3vE1krgXZNrsQ+LFTGHVxVjcXPs17LhbZVGedAJv8XZ1tvj5FvSg=="
    },
    "node_modules/lodash.includes": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/lodash.includes/-/lodash.includes-4.3.0.tgz",
      "integrity": "sha1-YLuYqHy5I8aMoeUTJUgzFISfVT8="
    },
    "node_modules/lodash.isboolean": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/lodash.isboolean/-/lodash.isboolean-3.0.3.tgz",
      "integrity": "sha1-bC4XHbKiV82WgC/UOwGyDV9YcPY="
    },
    "node_modules/lodash.isinteger": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/lodash.isinteger/-/lodash.isinteger-4.0.4.tgz",
      "integrity": "sha1-YZwK89A/iwTDH1iChAt3sRzWg0M="
    },
    "node_modules/lodash.isnumber": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/lodash.isnumber/-/lodash.isnumber-3.0.3.tgz",
      "integrity": "sha1-POdoEMWSjQM1IwGsKHMX8RwLH/w="
    },
    "node_modules/lodash.isplainobject": {
      "version": "4.0.6",
      "resolved": "https://registry.npmjs.org/lodash.isplainobject/-/lodash.isplainobject-4.0.6.tgz",
      "integrity": "sha1-fFJqUtibRcRcxpC4gWO+BJf1UMs="
    },
    "node_modules/lodash.isstring": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/lodash.isstring/-/lodash.isstring-4.0.1.tgz",
      "integrity": "sha1-1SfftUVuynzJu5XV2ur4i6VKVFE="
    },
    "node_modules/lodash.once": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/lodash.once/-/lodash.once-4.1.1.tgz",
      "integrity": "sha1-DdOXEhPHxW34gJd9UEyI+0cal6w="
    },
    "node_modules/lodash.sortby": {
      "version": "4.7.0",
      "resolved": "https://registry.npmjs.org/lodash.sortby/-/lodash.sortby-4.7.0.tgz",
      "integrity": "sha1-7dFMgk4sycHgsKG0K7UhBRakJDg=",
      "dev": true
    },
    "node_modules/logform": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/logform/-/logform-2.2.0.tgz",
      "integrity": "sha512-N0qPlqfypFx7UHNn4B3lzS/b0uLqt2hmuoa+PpuXNYgozdJYAyauF5Ky0BWVjrxDlMWiT3qN4zPq3vVAfZy7Yg==",
      "dependencies": {
        "colors": "^1.2.1",
        "fast-safe-stringify": "^2.0.4",
        "fecha": "^4.2.0",
        "ms": "^2.1.1",
        "triple-beam": "^1.3.0"
      }
    },
    "node_modules/logform/node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA=="
    },
    "node_modules/loose-envify": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/loose-envify/-/loose-envify-1.4.0.tgz",
      "integrity": "sha512-lyuxPGr/Wfhrlem2CL/UcnUc1zcqKAImBDzukY7Y5F/yQiNdko6+fRLevlw1HgMySw7f611UIY408EtxRSoK3Q==",
      "dev": true,
      "dependencies": {
        "js-tokens": "^3.0.0 || ^4.0.0"
      },
      "bin": {
        "loose-envify": "cli.js"
      }
    },
    "node_modules/lowercase-keys": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/lowercase-keys/-/lowercase-keys-1.0.1.tgz",
      "integrity": "sha512-G2Lj61tXDnVFFOi8VZds+SoQjtQC3dgokKdDG2mTm1tx4m50NUHBOZSBwQQHyy0V12A0JTG4icfZQH+xPyh8VA==",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/lru-cache": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-6.0.0.tgz",
      "integrity": "sha512-Jo6dJ04CmSjuznwJSS3pUeWmd/H0ffTlkXXgwZi+eq1UCmqQwCh+eLsYOYCwY991i2Fah4h1BEMCx4qThGbsiA==",
      "dependencies": {
        "yallist": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/make-dir": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-3.1.0.tgz",
      "integrity": "sha512-g3FeP20LNwhALb/6Cz6Dd4F2ngze0jz7tbzrD2wAV+o9FeNHe4rL+yK2md0J/fiSf1sa1ADhXqi5+oVwOM/eGw==",
      "dependencies": {
        "semver": "^6.0.0"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/make-dir/node_modules/semver": {
      "version": "6.3.0",
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
      "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/makeerror": {
      "version": "1.0.11",
      "resolved": "https://registry.npmjs.org/makeerror/-/makeerror-1.0.11.tgz",
      "integrity": "sha1-4BpckQnyr3lmDk6LlYd5AYT1qWw=",
      "dev": true,
      "dependencies": {
        "tmpl": "1.0.x"
      }
    },
    "node_modules/map-cache": {
      "version": "0.2.2",
      "resolved": "https://registry.npmjs.org/map-cache/-/map-cache-0.2.2.tgz",
      "integrity": "sha1-wyq9C9ZSXZsFFkW7TyasXcmKDb8=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/map-visit": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/map-visit/-/map-visit-1.0.0.tgz",
      "integrity": "sha1-7Nyo8TFE5mDxtb1B8S80edmN+48=",
      "dev": true,
      "dependencies": {
        "object-visit": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/math-random": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/math-random/-/math-random-1.0.4.tgz",
      "integrity": "sha512-rUxjysqif/BZQH2yhd5Aaq7vXMSx9NdEsQcyA07uEzIvxgI7zIr33gGsh+RU0/XjmQpCW7RsVof1vlkvQVCK5A==",
      "dev": true
    },
    "node_modules/media-typer": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/media-typer/-/media-typer-0.3.0.tgz",
      "integrity": "sha1-hxDXrwqmJvj/+hzgAWhUUmMlV0g=",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/mem": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/mem/-/mem-1.1.0.tgz",
      "integrity": "sha1-Xt1StIXKHZAP5kiVUFOZoN+kX3Y=",
      "dev": true,
      "dependencies": {
        "mimic-fn": "^1.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/memory-pager": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/memory-pager/-/memory-pager-1.5.0.tgz",
      "integrity": "sha512-ZS4Bp4r/Zoeq6+NLJpP+0Zzm0pR8whtGPf1XExKLJBAczGMnSi3It14OiNCStjQjM6NU1okjQGSxgEZN8eBYKg==",
      "optional": true
    },
    "node_modules/merge": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/merge/-/merge-1.2.1.tgz",
      "integrity": "sha512-VjFo4P5Whtj4vsLzsYBu5ayHhoHJ0UqNm7ibvShmbmoz7tGi0vXaoJbGdB+GmDMLUdg8DpQXEIeVDAe8MaABvQ==",
      "dev": true
    },
    "node_modules/merge-descriptors": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-1.0.1.tgz",
      "integrity": "sha1-sAqqVW3YtEVoFQ7J0blT8/kMu2E="
    },
    "node_modules/merge-stream": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/merge-stream/-/merge-stream-1.0.1.tgz",
      "integrity": "sha1-QEEgLVCKNCugAXQAjfDCUbjBNeE=",
      "dev": true,
      "dependencies": {
        "readable-stream": "^2.0.1"
      }
    },
    "node_modules/methods": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/methods/-/methods-1.1.2.tgz",
      "integrity": "sha1-VSmk1nZUE07cxSZmVoNbD4Ua/O4=",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/micromatch": {
      "version": "2.3.11",
      "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-2.3.11.tgz",
      "integrity": "sha1-hmd8l9FyCzY0MdBNDRUpO9OMFWU=",
      "dev": true,
      "dependencies": {
        "arr-diff": "^2.0.0",
        "array-unique": "^0.2.1",
        "braces": "^1.8.2",
        "expand-brackets": "^0.1.4",
        "extglob": "^0.3.1",
        "filename-regex": "^2.0.0",
        "is-extglob": "^1.0.0",
        "is-glob": "^2.0.1",
        "kind-of": "^3.0.2",
        "normalize-path": "^2.0.1",
        "object.omit": "^2.0.0",
        "parse-glob": "^3.0.4",
        "regex-cache": "^0.4.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/micromatch/node_modules/braces": {
      "version": "1.8.5",
      "resolved": "https://registry.npmjs.org/braces/-/braces-1.8.5.tgz",
      "integrity": "sha1-uneWLhLf+WnWt2cR6RS3N4V79qc=",
      "dev": true,
      "dependencies": {
        "expand-range": "^1.8.1",
        "preserve": "^0.2.0",
        "repeat-element": "^1.1.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/micromatch/node_modules/is-extglob": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-1.0.0.tgz",
      "integrity": "sha1-rEaBd8SUNAWgkvyPKXYMb/xiBsA=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/micromatch/node_modules/is-glob": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-2.0.1.tgz",
      "integrity": "sha1-0Jb5JqPe1WAPP9/ZEZjLCIjC2GM=",
      "dev": true,
      "dependencies": {
        "is-extglob": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/micromatch/node_modules/normalize-path": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-2.1.1.tgz",
      "integrity": "sha1-GrKLVW4Zg2Oowab35vogE3/mrtk=",
      "dev": true,
      "dependencies": {
        "remove-trailing-separator": "^1.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/mime": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/mime/-/mime-1.6.0.tgz",
      "integrity": "sha512-x0Vn8spI+wuJ1O6S7gnbaQg8Pxh4NNHb7KSINmEWKiPE4RKOplvijn+NkmYmmRgP68mc70j2EbeTFRsrswaQeg==",
      "bin": {
        "mime": "cli.js"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/mime-db": {
      "version": "1.47.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.47.0.tgz",
      "integrity": "sha512-QBmA/G2y+IfeS4oktet3qRZ+P5kPhCKRXxXnQEudYqUaEioAU1/Lq2us3D/t1Jfo4hE9REQPrbB7K5sOczJVIw==",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/mime-types": {
      "version": "2.1.30",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.30.tgz",
      "integrity": "sha512-crmjA4bLtR8m9qLpHvgxSChT+XoSlZi8J4n/aIdn3z92e/U47Z0V/yl+Wh9W046GgFVAmoNR/fmdbZYcSSIUeg==",
      "dependencies": {
        "mime-db": "1.47.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/mimic-fn": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/mimic-fn/-/mimic-fn-1.2.0.tgz",
      "integrity": "sha512-jf84uxzwiuiIVKiOLpfYk7N46TSy8ubTonmneY9vrpHNAnp0QBt2BxWV9dO3/j+BoVAb+a5G6YDPW3M5HOdMWQ==",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/mimic-response": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/mimic-response/-/mimic-response-1.0.1.tgz",
      "integrity": "sha512-j5EctnkH7amfV/q5Hgmoal1g2QHFJRraOtmx0JpIqkxhBhI/lJSl1nMpQ45hVarwNETOoWEimndZ4QK0RHxuxQ==",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/minimatch": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.0.4.tgz",
      "integrity": "sha512-yJHVQEhyqPLUTgt9B83PXu6W3rx4MvvHvSUvToogpwoGDOUQ+yDrR0HRot+yOCdCO7u4hX3pWft6kWBBcqh0UA==",
      "dependencies": {
        "brace-expansion": "^1.1.7"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/minimist": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.5.tgz",
      "integrity": "sha512-FM9nNUYrRBAELZQT3xeZQ7fmMOBg6nWNmJKTcgsJeaLstP/UODVpGsr5OhXhhXg6f+qtJ8uiZ+PUxkDWcgIXLw=="
    },
    "node_modules/minipass": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/minipass/-/minipass-3.1.3.tgz",
      "integrity": "sha512-Mgd2GdMVzY+x3IJ+oHnVM+KG3lA5c8tnabyJKmHSaG2kAGpudxuOf8ToDkhumF7UzME7DecbQE9uOZhNm7PuJg==",
      "dependencies": {
        "yallist": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/minizlib": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/minizlib/-/minizlib-2.1.2.tgz",
      "integrity": "sha512-bAxsR8BVfj60DWXHE3u30oHzfl4G7khkSuPW+qvpd7jFRHm7dLxOjUk1EHACJ/hxLY8phGJ0YhYHZo7jil7Qdg==",
      "dependencies": {
        "minipass": "^3.0.0",
        "yallist": "^4.0.0"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/mixin-deep": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/mixin-deep/-/mixin-deep-1.3.2.tgz",
      "integrity": "sha512-WRoDn//mXBiJ1H40rqa3vH0toePwSsGb45iInWlTySa+Uu4k3tYUSxa2v1KqAiLtvlrSzaExqS1gtk96A9zvEA==",
      "dev": true,
      "dependencies": {
        "for-in": "^1.0.2",
        "is-extendable": "^1.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/mixin-deep/node_modules/is-extendable": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-1.0.1.tgz",
      "integrity": "sha512-arnXMxT1hhoKo9k1LZdmlNyJdDDfy2v0fXjFlmok4+i8ul/6WlbVge9bhM74OpNPQPMGUToDtz+KXa1PneJxOA==",
      "dev": true,
      "dependencies": {
        "is-plain-object": "^2.0.4"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/mkdirp": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-1.0.4.tgz",
      "integrity": "sha512-vVqVZQyf3WLx2Shd0qJ9xuvqgAyKPLAiqITEtqW0oIUjzo3PePDd6fW9iFz30ef7Ysp/oiWqbhszeGWW2T6Gzw==",
      "bin": {
        "mkdirp": "bin/cmd.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/moment": {
      "version": "2.29.1",
      "resolved": "https://registry.npmjs.org/moment/-/moment-2.29.1.tgz",
      "integrity": "sha512-kHmoybcPV8Sqy59DwNDY3Jefr64lK/by/da0ViFcuA4DH0vQg5Q6Ze5VimxkfQNSC+Mls/Kx53s7TjP1RhFEDQ==",
      "engines": {
        "node": "*"
      }
    },
    "node_modules/mongodb": {
      "version": "3.6.6",
      "resolved": "https://registry.npmjs.org/mongodb/-/mongodb-3.6.6.tgz",
      "integrity": "sha512-WlirMiuV1UPbej5JeCMqE93JRfZ/ZzqE7nJTwP85XzjAF4rRSeq2bGCb1cjfoHLOF06+HxADaPGqT0g3SbVT1w==",
      "dependencies": {
        "bl": "^2.2.1",
        "bson": "^1.1.4",
        "denque": "^1.4.1",
        "optional-require": "^1.0.2",
        "safe-buffer": "^5.1.2"
      },
      "engines": {
        "node": ">=4"
      },
      "optionalDependencies": {
        "saslprep": "^1.0.0"
      },
      "peerDependenciesMeta": {
        "aws4": {
          "optional": true
        },
        "bson-ext": {
          "optional": true
        },
        "kerberos": {
          "optional": true
        },
        "mongodb-client-encryption": {
          "optional": true
        },
        "mongodb-extjson": {
          "optional": true
        },
        "snappy": {
          "optional": true
        }
      }
    },
    "node_modules/mongodb-core": {
      "version": "2.1.17",
      "resolved": "https://registry.npmjs.org/mongodb-core/-/mongodb-core-2.1.17.tgz",
      "integrity": "sha1-pBizN6FKFJkPtRC5I97mqBMXPfg=",
      "dependencies": {
        "bson": "~1.0.4",
        "require_optional": "~1.0.0"
      }
    },
    "node_modules/mongodb-core/node_modules/bson": {
      "version": "1.0.9",
      "resolved": "https://registry.npmjs.org/bson/-/bson-1.0.9.tgz",
      "integrity": "sha512-IQX9/h7WdMBIW/q/++tGd+emQr0XMdeZ6icnT/74Xk9fnabWn+gZgpE+9V+gujL3hhJOoNrnDVY7tWdzc7NUTg==",
      "deprecated": "Fixed a critical issue with BSON serialization documented in CVE-2019-2391, see https://bit.ly/2KcpXdo for more details",
      "engines": {
        "node": ">=0.6.19"
      }
    },
    "node_modules/mongoose": {
      "version": "5.12.5",
      "resolved": "https://registry.npmjs.org/mongoose/-/mongoose-5.12.5.tgz",
      "integrity": "sha512-VVoqiELZcoI2HhHDuPpfN3qmExrtIeXSWNb1nihf4w1SJoWGXilU/g2cQgeeSMc2vAHSZd5Nv2sNPvbZHFw+pg==",
      "dependencies": {
        "@types/mongodb": "^3.5.27",
        "bson": "^1.1.4",
        "kareem": "2.3.2",
        "mongodb": "3.6.6",
        "mongoose-legacy-pluralize": "1.0.2",
        "mpath": "0.8.3",
        "mquery": "3.2.5",
        "ms": "2.1.2",
        "regexp-clone": "1.0.0",
        "safe-buffer": "5.2.1",
        "sift": "7.0.1",
        "sliced": "1.0.1"
      },
      "engines": {
        "node": ">=4.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/mongoose"
      }
    },
    "node_modules/mongoose-legacy-pluralize": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/mongoose-legacy-pluralize/-/mongoose-legacy-pluralize-1.0.2.tgz",
      "integrity": "sha512-Yo/7qQU4/EyIS8YDFSeenIvXxZN+ld7YdV9LqFVQJzTLye8unujAWPZ4NWKfFA+RNjh+wvTWKY9Z3E5XM6ZZiQ==",
      "peerDependencies": {
        "mongoose": "*"
      }
    },
    "node_modules/mongoose/node_modules/ms": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
      "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
    },
    "node_modules/mongoose/node_modules/safe-buffer": {
      "version": "5.2.1",
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
      "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ]
    },
    "node_modules/mpath": {
      "version": "0.8.3",
      "resolved": "https://registry.npmjs.org/mpath/-/mpath-0.8.3.tgz",
      "integrity": "sha512-eb9rRvhDltXVNL6Fxd2zM9D4vKBxjVVQNLNijlj7uoXUy19zNDsIif5zR+pWmPCWNKwAtqyo4JveQm4nfD5+eA==",
      "engines": {
        "node": ">=4.0.0"
      }
    },
    "node_modules/mpromise": {
      "version": "0.5.5",
      "resolved": "https://registry.npmjs.org/mpromise/-/mpromise-0.5.5.tgz",
      "integrity": "sha1-9bJCWddjrMIlewoMjG2Gb9UXMuY="
    },
    "node_modules/mquery": {
      "version": "3.2.5",
      "resolved": "https://registry.npmjs.org/mquery/-/mquery-3.2.5.tgz",
      "integrity": "sha512-VjOKHHgU84wij7IUoZzFRU07IAxd5kWJaDmyUzQlbjHjyoeK5TNeeo8ZsFDtTYnSgpW6n/nMNIHvE3u8Lbrf4A==",
      "dependencies": {
        "bluebird": "3.5.1",
        "debug": "3.1.0",
        "regexp-clone": "^1.0.0",
        "safe-buffer": "5.1.2",
        "sliced": "1.0.1"
      },
      "engines": {
        "node": ">=4.0.0"
      }
    },
    "node_modules/mquery/node_modules/debug": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/debug/-/debug-3.1.0.tgz",
      "integrity": "sha512-OX8XqP7/1a9cqkxYw2yXss15f26NKWBpDXQd0/uK/KPqdQhxbPa994hnzjcE2VqQpDslf55723cKPUOGSmMY3g==",
      "dependencies": {
        "ms": "2.0.0"
      }
    },
    "node_modules/ms": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
      "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
    },
    "node_modules/multer": {
      "version": "1.4.2",
      "resolved": "https://registry.npmjs.org/multer/-/multer-1.4.2.tgz",
      "integrity": "sha512-xY8pX7V+ybyUpbYMxtjM9KAiD9ixtg5/JkeKUTD6xilfDv0vzzOFcCp4Ljb1UU3tSOM3VTZtKo63OmzOrGi3Cg==",
      "dependencies": {
        "append-field": "^1.0.0",
        "busboy": "^0.2.11",
        "concat-stream": "^1.5.2",
        "mkdirp": "^0.5.1",
        "object-assign": "^4.1.1",
        "on-finished": "^2.3.0",
        "type-is": "^1.6.4",
        "xtend": "^4.0.0"
      },
      "engines": {
        "node": ">= 0.10.0"
      }
    },
    "node_modules/multer-s3": {
      "version": "2.9.0",
      "resolved": "https://registry.npmjs.org/multer-s3/-/multer-s3-2.9.0.tgz",
      "integrity": "sha512-qLF8pCD5HhXLLd954q49B63x3bk6Fe0jqD3eM0FVcGtqhiSVuTrchEDAo0mnO5pc34cMuX/CVCCbPkGTjX2xUA==",
      "dependencies": {
        "file-type": "^3.3.0",
        "is-svg": "^2.1.0",
        "run-parallel": "^1.1.6"
      }
    },
    "node_modules/multer/node_modules/mkdirp": {
      "version": "0.5.5",
      "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-0.5.5.tgz",
      "integrity": "sha512-NKmAlESf6jMGym1++R0Ra7wvhV+wFW63FaSOFPwRahvea0gMUcGUhVeAg/0BC0wiv9ih5NYPB1Wn1UEI1/L+xQ==",
      "dependencies": {
        "minimist": "^1.2.5"
      },
      "bin": {
        "mkdirp": "bin/cmd.js"
      }
    },
    "node_modules/muri": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/muri/-/muri-1.3.0.tgz",
      "integrity": "sha512-FiaFwKl864onHFFUV/a2szAl7X0fxVlSKNdhTf+BM8i8goEgYut8u5P9MqQqIYwvaMxjzVESsoEm/2kfkFH1rg=="
    },
    "node_modules/nanomatch": {
      "version": "1.2.13",
      "resolved": "https://registry.npmjs.org/nanomatch/-/nanomatch-1.2.13.tgz",
      "integrity": "sha512-fpoe2T0RbHwBTBUOftAfBPaDEi06ufaUai0mE6Yn1kacc3SnTErfb/h+X94VXzI64rKFHYImXSvdwGGCmwOqCA==",
      "dev": true,
      "dependencies": {
        "arr-diff": "^4.0.0",
        "array-unique": "^0.3.2",
        "define-property": "^2.0.2",
        "extend-shallow": "^3.0.2",
        "fragment-cache": "^0.2.1",
        "is-windows": "^1.0.2",
        "kind-of": "^6.0.2",
        "object.pick": "^1.3.0",
        "regex-not": "^1.0.0",
        "snapdragon": "^0.8.1",
        "to-regex": "^3.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/nanomatch/node_modules/arr-diff": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/arr-diff/-/arr-diff-4.0.0.tgz",
      "integrity": "sha1-1kYQdP6/7HHn4VI1dhoyml3HxSA=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/nanomatch/node_modules/array-unique": {
      "version": "0.3.2",
      "resolved": "https://registry.npmjs.org/array-unique/-/array-unique-0.3.2.tgz",
      "integrity": "sha1-qJS3XUvE9s1nnvMkSp/Y9Gri1Cg=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/nanomatch/node_modules/kind-of": {
      "version": "6.0.3",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",
      "integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/natural-compare": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/natural-compare/-/natural-compare-1.4.0.tgz",
      "integrity": "sha1-Sr6/7tdUHywnrPspvbvRXI1bpPc=",
      "dev": true
    },
    "node_modules/negotiator": {
      "version": "0.6.2",
      "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-0.6.2.tgz",
      "integrity": "sha512-hZXc7K2e+PgeI1eDBe/10Ard4ekbfrrqG8Ep+8Jmf4JID2bNg7NvCPOZN+kfF574pFQI7mum2AUqDidoKqcTOw==",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/neo-async": {
      "version": "2.6.2",
      "resolved": "https://registry.npmjs.org/neo-async/-/neo-async-2.6.2.tgz",
      "integrity": "sha512-Yd3UES5mWCSqR+qNT93S3UoYUkqAZ9lLg8a7g9rimsWmYGK8cVToA4/sF3RrshdyV3sAGMXVUmpMYOw+dLpOuw==",
      "dev": true
    },
    "node_modules/node": {
      "version": "15.14.0",
      "resolved": "https://registry.npmjs.org/node/-/node-15.14.0.tgz",
      "integrity": "sha512-svKWxg++g9+ddISNEdh/Mw1XXEnhMkgL4vgsztO3+QtneathEVYAFUPzXvW/d37vk+mZSdcoIsLgMLAOaO+Vvg==",
      "hasInstallScript": true,
      "dependencies": {
        "node-bin-setup": "^1.0.0"
      },
      "bin": {
        "node": "bin/node"
      },
      "engines": {
        "npm": ">=5.0.0"
      }
    },
    "node_modules/node-addon-api": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/node-addon-api/-/node-addon-api-3.2.1.tgz",
      "integrity": "sha512-mmcei9JghVNDYydghQmeDX8KoAm0FAiYyIcUt/N4nhyAipB17pllZQDOJD2fotxABnt4Mdz+dKTO7eftLg4d0A=="
    },
    "node_modules/node-bin-setup": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/node-bin-setup/-/node-bin-setup-1.0.6.tgz",
      "integrity": "sha512-uPIxXNis1CRbv1DwqAxkgBk5NFV3s7cMN/Gf556jSw6jBvV7ca4F9lRL/8cALcZecRibeqU+5dFYqFFmzv5a0Q=="
    },
    "node_modules/node-fetch": {
      "version": "2.6.1",
      "resolved": "https://registry.npmjs.org/node-fetch/-/node-fetch-2.6.1.tgz",
      "integrity": "sha512-V4aYg89jEoVRxRb2fJdAg8FHvI7cEyYdVAh94HH0UIK8oJxUfkjlDQN9RbMx+bEjP7+ggMiFRprSti032Oipxw==",
      "engines": {
        "node": "4.x || >=6.0.0"
      }
    },
    "node_modules/node-int64": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/node-int64/-/node-int64-0.4.0.tgz",
      "integrity": "sha1-h6kGXNs1XTGC2PlM4RGIuCXGijs=",
      "dev": true
    },
    "node_modules/node-notifier": {
      "version": "5.4.5",
      "resolved": "https://registry.npmjs.org/node-notifier/-/node-notifier-5.4.5.tgz",
      "integrity": "sha512-tVbHs7DyTLtzOiN78izLA85zRqB9NvEXkAf014Vx3jtSvn/xBl6bR8ZYifj+dFcFrKI21huSQgJZ6ZtL3B4HfQ==",
      "dev": true,
      "dependencies": {
        "growly": "^1.3.0",
        "is-wsl": "^1.1.0",
        "semver": "^5.5.0",
        "shellwords": "^0.1.1",
        "which": "^1.3.0"
      }
    },
    "node_modules/nodemailer": {
      "version": "6.6.1",
      "resolved": "https://registry.npmjs.org/nodemailer/-/nodemailer-6.6.1.tgz",
      "integrity": "sha512-1xzFN3gqv+/qJ6YRyxBxfTYstLNt0FCtZaFRvf4Sg9wxNGWbwFmGXVpfSi6ThGK6aRxAo+KjHtYSW8NvCsNSAg==",
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/nodemon": {
      "version": "2.0.7",
      "resolved": "https://registry.npmjs.org/nodemon/-/nodemon-2.0.7.tgz",
      "integrity": "sha512-XHzK69Awgnec9UzHr1kc8EomQh4sjTQ8oRf8TsGrSmHDx9/UmiGG9E/mM3BuTfNeFwdNBvrqQq/RHL0xIeyFOA==",
      "hasInstallScript": true,
      "dependencies": {
        "chokidar": "^3.2.2",
        "debug": "^3.2.6",
        "ignore-by-default": "^1.0.1",
        "minimatch": "^3.0.4",
        "pstree.remy": "^1.1.7",
        "semver": "^5.7.1",
        "supports-color": "^5.5.0",
        "touch": "^3.1.0",
        "undefsafe": "^2.0.3",
        "update-notifier": "^4.1.0"
      },
      "bin": {
        "nodemon": "bin/nodemon.js"
      },
      "engines": {
        "node": ">=8.10.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/nodemon"
      }
    },
    "node_modules/nodemon/node_modules/debug": {
      "version": "3.2.7",
      "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.7.tgz",
      "integrity": "sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ==",
      "dependencies": {
        "ms": "^2.1.1"
      }
    },
    "node_modules/nodemon/node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA=="
    },
    "node_modules/nopt": {
      "version": "1.0.10",
      "resolved": "https://registry.npmjs.org/nopt/-/nopt-1.0.10.tgz",
      "integrity": "sha1-bd0hvSoxQXuScn3Vhfim83YI6+4=",
      "dependencies": {
        "abbrev": "1"
      },
      "bin": {
        "nopt": "bin/nopt.js"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/normalize-package-data": {
      "version": "2.5.0",
      "resolved": "https://registry.npmjs.org/normalize-package-data/-/normalize-package-data-2.5.0.tgz",
      "integrity": "sha512-/5CMN3T0R4XTj4DcGaexo+roZSdSFW/0AOOTROrjxzCG1wrWXEsGbRKevjlIL+ZDE4sZlJr5ED4YW0yqmkK+eA==",
      "dev": true,
      "dependencies": {
        "hosted-git-info": "^2.1.4",
        "resolve": "^1.10.0",
        "semver": "2 || 3 || 4 || 5",
        "validate-npm-package-license": "^3.0.1"
      }
    },
    "node_modules/normalize-package-data/node_modules/resolve": {
      "version": "1.20.0",
      "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.20.0.tgz",
      "integrity": "sha512-wENBPt4ySzg4ybFQW2TT1zMQucPK95HSh/nq2CFTZVOGut2+pQvSsgtda4d26YrYcr067wjbmzOG8byDPBX63A==",
      "dev": true,
      "dependencies": {
        "is-core-module": "^2.2.0",
        "path-parse": "^1.0.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/normalize-path": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
      "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/normalize-url": {
      "version": "4.5.0",
      "resolved": "https://registry.npmjs.org/normalize-url/-/normalize-url-4.5.0.tgz",
      "integrity": "sha512-2s47yzUxdexf1OhyRi4Em83iQk0aPvwTddtFz4hnSSw9dCEsLEGf6SwIO8ss/19S9iBb5sJaOuTvTGDeZI00BQ==",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/npm-run-path": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/npm-run-path/-/npm-run-path-2.0.2.tgz",
      "integrity": "sha1-NakjLfo11wZ7TLLd8jV7GHFTbF8=",
      "dev": true,
      "dependencies": {
        "path-key": "^2.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/npmlog": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/npmlog/-/npmlog-4.1.2.tgz",
      "integrity": "sha512-2uUqazuKlTaSI/dC8AzicUck7+IrEaOnN/e0jd3Xtt1KcGpwx30v50mL7oPyr/h9bL3E4aZccVwpwP+5W9Vjkg==",
      "dependencies": {
        "are-we-there-yet": "~1.1.2",
        "console-control-strings": "~1.1.0",
        "gauge": "~2.7.3",
        "set-blocking": "~2.0.0"
      }
    },
    "node_modules/number-is-nan": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/number-is-nan/-/number-is-nan-1.0.1.tgz",
      "integrity": "sha1-CXtgK1NCKlIsGvuHkDGDNpQaAR0=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/nwsapi": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/nwsapi/-/nwsapi-2.2.0.tgz",
      "integrity": "sha512-h2AatdwYH+JHiZpv7pt/gSX1XoRGb7L/qSIeuqA6GwYoF9w1vP1cw42TO0aI2pNyshRK5893hNSl+1//vHK7hQ==",
      "dev": true
    },
    "node_modules/oauth": {
      "version": "0.9.15",
      "resolved": "https://registry.npmjs.org/oauth/-/oauth-0.9.15.tgz",
      "integrity": "sha1-vR/vr2hslrdUda7VGWQS/2DPucE="
    },
    "node_modules/oauth-sign": {
      "version": "0.9.0",
      "resolved": "https://registry.npmjs.org/oauth-sign/-/oauth-sign-0.9.0.tgz",
      "integrity": "sha512-fexhUFFPTGV8ybAtSIGbV6gOkSv8UtRbDBnAyLQw4QPKkgNlsH2ByPGtMUqdWkos6YCRmAqViwgZrJc/mRDzZQ==",
      "dev": true,
      "engines": {
        "node": "*"
      }
    },
    "node_modules/object-assign": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
      "integrity": "sha1-IQmtx5ZYh8/AXLvUQsrIv7s2CGM=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-copy": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/object-copy/-/object-copy-0.1.0.tgz",
      "integrity": "sha1-fn2Fi3gb18mRpBupde04EnVOmYw=",
      "dev": true,
      "dependencies": {
        "copy-descriptor": "^0.1.0",
        "define-property": "^0.2.5",
        "kind-of": "^3.0.3"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-copy/node_modules/define-property": {
      "version": "0.2.5",
      "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
      "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
      "dev": true,
      "dependencies": {
        "is-descriptor": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-inspect": {
      "version": "1.10.3",
      "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.10.3.tgz",
      "integrity": "sha512-e5mCJlSH7poANfC8z8S9s9S2IN5/4Zb3aZ33f5s8YqoazCFzNLloLU8r5VCG+G7WoqLvAAZoVMcy3tp/3X0Plw==",
      "dev": true,
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/object-keys": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/object-keys/-/object-keys-1.1.1.tgz",
      "integrity": "sha512-NuAESUOUMrlIXOfHKzD6bpPu3tYt3xvjNdRIQ+FeT0lNb4K8WR70CaDxhuNguS2XG+GjkyMwOzsN5ZktImfhLA==",
      "dev": true,
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/object-visit": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/object-visit/-/object-visit-1.0.1.tgz",
      "integrity": "sha1-95xEk68MU3e1n+OdOV5BBC3QRbs=",
      "dev": true,
      "dependencies": {
        "isobject": "^3.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-visit/node_modules/isobject": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
      "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object.assign": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/object.assign/-/object.assign-4.1.2.tgz",
      "integrity": "sha512-ixT2L5THXsApyiUPYKmW+2EHpXXe5Ii3M+f4e+aJFAHao5amFRW6J0OO6c/LU8Be47utCx2GL89hxGB6XSmKuQ==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.0",
        "define-properties": "^1.1.3",
        "has-symbols": "^1.0.1",
        "object-keys": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/object.getownpropertydescriptors": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/object.getownpropertydescriptors/-/object.getownpropertydescriptors-2.1.2.tgz",
      "integrity": "sha512-WtxeKSzfBjlzL+F9b7M7hewDzMwy+C8NRssHd1YrNlzHzIDrXcXiNOMrezdAEM4UXixgV+vvnyBeN7Rygl2ttQ==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.2",
        "define-properties": "^1.1.3",
        "es-abstract": "^1.18.0-next.2"
      },
      "engines": {
        "node": ">= 0.8"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/object.omit": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/object.omit/-/object.omit-2.0.1.tgz",
      "integrity": "sha1-Gpx0SCnznbuFjHbKNXmuKlTr0fo=",
      "dev": true,
      "dependencies": {
        "for-own": "^0.1.4",
        "is-extendable": "^0.1.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object.pick": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/object.pick/-/object.pick-1.3.0.tgz",
      "integrity": "sha1-h6EKxMFpS9Lhy/U1kaZhQftd10c=",
      "dev": true,
      "dependencies": {
        "isobject": "^3.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object.pick/node_modules/isobject": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
      "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/on-finished": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.3.0.tgz",
      "integrity": "sha1-IPEzZIGwg811M3mSoWlxqi2QaUc=",
      "dependencies": {
        "ee-first": "1.1.1"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/on-headers": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/on-headers/-/on-headers-1.0.2.tgz",
      "integrity": "sha512-pZAE+FJLoyITytdqK0U5s+FIpjN0JP3OzFi/u8Rx+EV5/W+JTWGXG8xFzevE7AjBfDqHv/8vL8qQsIhHnqRkrA==",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/once": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
      "integrity": "sha1-WDsap3WWHUsROsF9nFC6753Xa9E=",
      "dependencies": {
        "wrappy": "1"
      }
    },
    "node_modules/one-time": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/one-time/-/one-time-1.0.0.tgz",
      "integrity": "sha512-5DXOiRKwuSEcQ/l0kGCF6Q3jcADFv5tSmRaJck/OqkVFcOzutB134KRSfF0xDrL39MNnqxbHBbUUcjZIhTgb2g==",
      "dependencies": {
        "fn.name": "1.x.x"
      }
    },
    "node_modules/optional-require": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/optional-require/-/optional-require-1.0.3.tgz",
      "integrity": "sha512-RV2Zp2MY2aeYK5G+B/Sps8lW5NHAzE5QClbFP15j+PWmP+T9PxlJXBOOLoSAdgwFvS4t0aMR4vpedMkbHfh0nA==",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/optionator": {
      "version": "0.8.3",
      "resolved": "https://registry.npmjs.org/optionator/-/optionator-0.8.3.tgz",
      "integrity": "sha512-+IW9pACdk3XWmmTXG8m3upGUJst5XRGzxMRjXzAuJ1XnIFNvfhjjIuYkDvysnPQ7qzqVzLt78BCruntqRhWQbA==",
      "dev": true,
      "dependencies": {
        "deep-is": "~0.1.3",
        "fast-levenshtein": "~2.0.6",
        "levn": "~0.3.0",
        "prelude-ls": "~1.1.2",
        "type-check": "~0.3.2",
        "word-wrap": "~1.2.3"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/os-homedir": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/os-homedir/-/os-homedir-1.0.2.tgz",
      "integrity": "sha1-/7xJiDNuDoM94MFox+8VISGqf7M=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/os-locale": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/os-locale/-/os-locale-2.1.0.tgz",
      "integrity": "sha512-3sslG3zJbEYcaC4YVAvDorjGxc7tv6KVATnLPZONiljsUncvihe9BQoVCEs0RZ1kmf4Hk9OBqlZfJZWI4GanKA==",
      "dev": true,
      "dependencies": {
        "execa": "^0.7.0",
        "lcid": "^1.0.0",
        "mem": "^1.1.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/os-tmpdir": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/os-tmpdir/-/os-tmpdir-1.0.2.tgz",
      "integrity": "sha1-u+Z0BseaqFxc/sdm/lc0VV36EnQ=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/p-cancelable": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/p-cancelable/-/p-cancelable-1.1.0.tgz",
      "integrity": "sha512-s73XxOZ4zpt1edZYZzvhqFa6uvQc1vwUa0K0BdtIZgQMAJj9IbebH+JkgKZc9h+B05PKHLOTl4ajG1BmNrVZlw==",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/p-finally": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/p-finally/-/p-finally-1.0.0.tgz",
      "integrity": "sha1-P7z7FbiZpEEjs0ttzBi3JDNqLK4=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/p-limit": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-1.3.0.tgz",
      "integrity": "sha512-vvcXsLAJ9Dr5rQOPk7toZQZJApBl2K4J6dANSsEuh6QI41JYcsS/qhTGa9ErIUUgK3WNQoJYvylxvjqmiqEA9Q==",
      "dev": true,
      "dependencies": {
        "p-try": "^1.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/p-locate": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-2.0.0.tgz",
      "integrity": "sha1-IKAQOyIqcMj9OcwuWAaA893l7EM=",
      "dev": true,
      "dependencies": {
        "p-limit": "^1.1.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/p-try": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/p-try/-/p-try-1.0.0.tgz",
      "integrity": "sha1-y8ec26+P1CKOE/Yh8rGiN8GyB7M=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/package-json": {
      "version": "6.5.0",
      "resolved": "https://registry.npmjs.org/package-json/-/package-json-6.5.0.tgz",
      "integrity": "sha512-k3bdm2n25tkyxcjSKzB5x8kfVxlMdgsbPr0GkZcwHsLpba6cBjqCt1KlcChKEvxHIcTB1FVMuwoijZ26xex5MQ==",
      "dependencies": {
        "got": "^9.6.0",
        "registry-auth-token": "^4.0.0",
        "registry-url": "^5.0.0",
        "semver": "^6.2.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/package-json/node_modules/semver": {
      "version": "6.3.0",
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
      "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/parse-glob": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/parse-glob/-/parse-glob-3.0.4.tgz",
      "integrity": "sha1-ssN2z7EfNVE7rdFz7wu246OIORw=",
      "dev": true,
      "dependencies": {
        "glob-base": "^0.3.0",
        "is-dotfile": "^1.0.0",
        "is-extglob": "^1.0.0",
        "is-glob": "^2.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/parse-glob/node_modules/is-extglob": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-1.0.0.tgz",
      "integrity": "sha1-rEaBd8SUNAWgkvyPKXYMb/xiBsA=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/parse-glob/node_modules/is-glob": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-2.0.1.tgz",
      "integrity": "sha1-0Jb5JqPe1WAPP9/ZEZjLCIjC2GM=",
      "dev": true,
      "dependencies": {
        "is-extglob": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/parse-json": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-2.2.0.tgz",
      "integrity": "sha1-9ID0BDTvgHQfhGkJn43qGPVaTck=",
      "dev": true,
      "dependencies": {
        "error-ex": "^1.2.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/parse5": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/parse5/-/parse5-4.0.0.tgz",
      "integrity": "sha512-VrZ7eOd3T1Fk4XWNXMgiGBK/z0MG48BWG2uQNU4I72fkQuKUTZpl+u9k+CxEG0twMVzSmXEEz12z5Fnw1jIQFA==",
      "dev": true
    },
    "node_modules/parseurl": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz",
      "integrity": "sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ==",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/pascalcase": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/pascalcase/-/pascalcase-0.1.1.tgz",
      "integrity": "sha1-s2PlXoAGym/iF4TS2yK9FdeRfxQ=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/passport": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/passport/-/passport-0.4.1.tgz",
      "integrity": "sha512-IxXgZZs8d7uFSt3eqNjM9NQ3g3uQCW5avD8mRNoXV99Yig50vjuaez6dQK2qC0kVWPRTujxY0dWgGfT09adjYg==",
      "dependencies": {
        "passport-strategy": "1.x.x",
        "pause": "0.0.1"
      },
      "engines": {
        "node": ">= 0.4.0"
      }
    },
    "node_modules/passport-google-oauth": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/passport-google-oauth/-/passport-google-oauth-2.0.0.tgz",
      "integrity": "sha512-JKxZpBx6wBQXX1/a1s7VmdBgwOugohH+IxCy84aPTZNq/iIPX6u7Mqov1zY7MKRz3niFPol0KJz8zPLBoHKtYA==",
      "dependencies": {
        "passport-google-oauth1": "1.x.x",
        "passport-google-oauth20": "2.x.x"
      },
      "engines": {
        "node": ">= 0.4.0"
      }
    },
    "node_modules/passport-google-oauth1": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/passport-google-oauth1/-/passport-google-oauth1-1.0.0.tgz",
      "integrity": "sha1-r3SoA99R7GRvZqRNgigr5vEI4Mw=",
      "dependencies": {
        "passport-oauth1": "1.x.x"
      }
    },
    "node_modules/passport-google-oauth20": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/passport-google-oauth20/-/passport-google-oauth20-2.0.0.tgz",
      "integrity": "sha512-KSk6IJ15RoxuGq7D1UKK/8qKhNfzbLeLrG3gkLZ7p4A6DBCcv7xpyQwuXtWdpyR0+E0mwkpjY1VfPOhxQrKzdQ==",
      "dependencies": {
        "passport-oauth2": "1.x.x"
      },
      "engines": {
        "node": ">= 0.4.0"
      }
    },
    "node_modules/passport-oauth1": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/passport-oauth1/-/passport-oauth1-1.1.0.tgz",
      "integrity": "sha1-p96YiiEfnPRoc3cTDqdN8ycwyRg=",
      "dependencies": {
        "oauth": "0.9.x",
        "passport-strategy": "1.x.x",
        "utils-merge": "1.x.x"
      },
      "engines": {
        "node": ">= 0.4.0"
      }
    },
    "node_modules/passport-oauth2": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/passport-oauth2/-/passport-oauth2-1.5.0.tgz",
      "integrity": "sha512-kqBt6vR/5VlCK8iCx1/KpY42kQ+NEHZwsSyt4Y6STiNjU+wWICG1i8ucc1FapXDGO15C5O5VZz7+7vRzrDPXXQ==",
      "dependencies": {
        "base64url": "3.x.x",
        "oauth": "0.9.x",
        "passport-strategy": "1.x.x",
        "uid2": "0.0.x",
        "utils-merge": "1.x.x"
      },
      "engines": {
        "node": ">= 0.4.0"
      }
    },
    "node_modules/passport-strategy": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/passport-strategy/-/passport-strategy-1.0.0.tgz",
      "integrity": "sha1-tVOaqPwiWj0a0XlHbd8ja0QPUuQ=",
      "engines": {
        "node": ">= 0.4.0"
      }
    },
    "node_modules/path-exists": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-3.0.0.tgz",
      "integrity": "sha1-zg6+ql94yxiSXqfYENe1mwEP1RU=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/path-is-absolute": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
      "integrity": "sha1-F0uSaHNVNP+8es5r9TpanhtcX18=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/path-key": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/path-key/-/path-key-2.0.1.tgz",
      "integrity": "sha1-QRyttXTFoUDTpLGRDUDYDMn0C0A=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/path-parse": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.7.tgz",
      "integrity": "sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw==",
      "dev": true
    },
    "node_modules/path-to-regexp": {
      "version": "0.1.7",
      "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-0.1.7.tgz",
      "integrity": "sha1-32BBeABfUi8V60SQ5yR6G/qmf4w="
    },
    "node_modules/path-type": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/path-type/-/path-type-1.1.0.tgz",
      "integrity": "sha1-WcRPfuSR2nBNpBXaWkBwuk+P5EE=",
      "dev": true,
      "dependencies": {
        "graceful-fs": "^4.1.2",
        "pify": "^2.0.0",
        "pinkie-promise": "^2.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/pause": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/pause/-/pause-0.0.1.tgz",
      "integrity": "sha1-HUCLP9t2kjuVQ9lvtMnf1TXZy10="
    },
    "node_modules/performance-now": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/performance-now/-/performance-now-2.1.0.tgz",
      "integrity": "sha1-Ywn04OX6kT7BxpMHrjZLSzd8nns=",
      "dev": true
    },
    "node_modules/picomatch": {
      "version": "2.2.3",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.2.3.tgz",
      "integrity": "sha512-KpELjfwcCDUb9PeigTs2mBJzXUPzAuP2oPcA989He8Rte0+YUAjw1JVedDhuTKPkHjSYzMN3npC9luThGYEKdg==",
      "engines": {
        "node": ">=8.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/pify": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/pify/-/pify-2.3.0.tgz",
      "integrity": "sha1-7RQaasBDqEnqWISY59yosVMw6Qw=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/pinkie": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/pinkie/-/pinkie-2.0.4.tgz",
      "integrity": "sha1-clVrgM+g1IqXToDnckjoDtT3+HA=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/pinkie-promise": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/pinkie-promise/-/pinkie-promise-2.0.1.tgz",
      "integrity": "sha1-ITXW36ejWMBprJsXh3YogihFD/o=",
      "dev": true,
      "dependencies": {
        "pinkie": "^2.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/pkg-dir": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/pkg-dir/-/pkg-dir-2.0.0.tgz",
      "integrity": "sha1-9tXREJ4Z1j7fQo4L1X4Sd3YVM0s=",
      "dev": true,
      "dependencies": {
        "find-up": "^2.1.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/pn": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/pn/-/pn-1.1.0.tgz",
      "integrity": "sha512-2qHaIQr2VLRFoxe2nASzsV6ef4yOOH+Fi9FBOVH6cqeSgUnoyySPZkxzLuzd+RYOQTRpROA0ztTMqxROKSb/nA==",
      "dev": true
    },
    "node_modules/posix-character-classes": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/posix-character-classes/-/posix-character-classes-0.1.1.tgz",
      "integrity": "sha1-AerA/jta9xoqbAL+q7jB/vfgDqs=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/prelude-ls": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.1.2.tgz",
      "integrity": "sha1-IZMqVJ9eUv/ZqCf1cOBL5iqX2lQ=",
      "dev": true,
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/prepend-http": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/prepend-http/-/prepend-http-2.0.0.tgz",
      "integrity": "sha1-6SQ0v6XqjBn0HN/UAddBo8gZ2Jc=",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/preserve": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/preserve/-/preserve-0.2.0.tgz",
      "integrity": "sha1-gV7R9uvGWSb4ZbMQwHE7yzMVzks=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/pretty-format": {
      "version": "22.4.3",
      "resolved": "https://registry.npmjs.org/pretty-format/-/pretty-format-22.4.3.tgz",
      "integrity": "sha512-S4oT9/sT6MN7/3COoOy+ZJeA92VmOnveLHgrwBE3Z1W5N9S2A1QGNYiE1z75DAENbJrXXUb+OWXhpJcg05QKQQ==",
      "dev": true,
      "dependencies": {
        "ansi-regex": "^3.0.0",
        "ansi-styles": "^3.2.0"
      }
    },
    "node_modules/pretty-format/node_modules/ansi-regex": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-3.0.0.tgz",
      "integrity": "sha1-7QMXwyIGT3lGbAKWa922Bas32Zg=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/pretty-format/node_modules/ansi-styles": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
      "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
      "dev": true,
      "dependencies": {
        "color-convert": "^1.9.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/pretty-format/node_modules/color-convert": {
      "version": "1.9.3",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
      "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
      "dev": true,
      "dependencies": {
        "color-name": "1.1.3"
      }
    },
    "node_modules/pretty-format/node_modules/color-name": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
      "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU=",
      "dev": true
    },
    "node_modules/private": {
      "version": "0.1.8",
      "resolved": "https://registry.npmjs.org/private/-/private-0.1.8.tgz",
      "integrity": "sha512-VvivMrbvd2nKkiG38qjULzlc+4Vx4wm/whI9pQD35YrARNnhxeiRktSOhSukRLFNlzg6Br/cJPet5J/u19r/mg==",
      "dev": true,
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/process-nextick-args": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/process-nextick-args/-/process-nextick-args-2.0.1.tgz",
      "integrity": "sha512-3ouUOpQhtgrbOa17J7+uxOTpITYWaGP7/AhoR3+A+/1e9skrzelGi/dXzEYyvbxubEF6Wn2ypscTKiKJFFn1ag=="
    },
    "node_modules/proxy-addr": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/proxy-addr/-/proxy-addr-2.0.6.tgz",
      "integrity": "sha512-dh/frvCBVmSsDYzw6n926jv974gddhkFPfiN8hPOi30Wax25QZyZEGveluCgliBnqmuM+UJmBErbAUFIoDbjOw==",
      "dependencies": {
        "forwarded": "~0.1.2",
        "ipaddr.js": "1.9.1"
      },
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/pseudomap": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/pseudomap/-/pseudomap-1.0.2.tgz",
      "integrity": "sha1-8FKijacOYYkX7wqKw0wa5aaChrM=",
      "dev": true
    },
    "node_modules/psl": {
      "version": "1.8.0",
      "resolved": "https://registry.npmjs.org/psl/-/psl-1.8.0.tgz",
      "integrity": "sha512-RIdOzyoavK+hA18OGGWDqUTsCLhtA7IcZ/6NCs4fFJaHBDab+pDDmDIByWFRQJq2Cd7r1OoQxBGKOaztq+hjIQ==",
      "dev": true
    },
    "node_modules/pstree.remy": {
      "version": "1.1.8",
      "resolved": "https://registry.npmjs.org/pstree.remy/-/pstree.remy-1.1.8.tgz",
      "integrity": "sha512-77DZwxQmxKnu3aR542U+X8FypNzbfJ+C5XQDk3uWjWxn6151aIMGthWYRXTqT1E5oJvg+ljaa2OJi+VfvCOQ8w=="
    },
    "node_modules/pump": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/pump/-/pump-3.0.0.tgz",
      "integrity": "sha512-LwZy+p3SFs1Pytd/jYct4wpv49HiYCqd9Rlc5ZVdk0V+8Yzv6jR5Blk3TRmPL1ft69TxP0IMZGJ+WPFU2BFhww==",
      "dependencies": {
        "end-of-stream": "^1.1.0",
        "once": "^1.3.1"
      }
    },
    "node_modules/punycode": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.1.1.tgz",
      "integrity": "sha512-XRsRjdf+j5ml+y/6GKHPZbrF/8p2Yga0JPtdqTIY2Xe5ohJPD9saDJJLPvp9+NSBprVvevdXZybnj2cv8OEd0A==",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/pupa": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/pupa/-/pupa-2.1.1.tgz",
      "integrity": "sha512-l1jNAspIBSFqbT+y+5FosojNpVpF94nlI+wDUpqP9enwOTfHx9f0gh5nB96vl+6yTpsJsypeNrwfzPrKuHB41A==",
      "dependencies": {
        "escape-goat": "^2.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/qs": {
      "version": "6.7.0",
      "resolved": "https://registry.npmjs.org/qs/-/qs-6.7.0.tgz",
      "integrity": "sha512-VCdBRNFTX1fyE7Nb6FYoURo/SPe62QCaAyzJvUjwRaIsc+NePBEniHlvxFmmX56+HZphIGtV0XeCirBtpDrTyQ==",
      "engines": {
        "node": ">=0.6"
      }
    },
    "node_modules/querystring": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/querystring/-/querystring-0.2.1.tgz",
      "integrity": "sha512-wkvS7mL/JMugcup3/rMitHmd9ecIGd2lhFhK9N3UUQ450h66d1r3Y9nvXzQAW1Lq+wyx61k/1pfKS5KuKiyEbg==",
      "deprecated": "The",
      "engines": {
        "node": ">=0.4.x"
      }
    },
    "node_modules/queue-microtask": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/queue-microtask/-/queue-microtask-1.2.3.tgz",
      "integrity": "sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ]
    },
    "node_modules/randomatic": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/randomatic/-/randomatic-3.1.1.tgz",
      "integrity": "sha512-TuDE5KxZ0J461RVjrJZCJc+J+zCkTb1MbH9AQUq68sMhOMcy9jLcb3BrZKgp9q9Ncltdg4QVqWrH02W2EFFVYw==",
      "dev": true,
      "dependencies": {
        "is-number": "^4.0.0",
        "kind-of": "^6.0.0",
        "math-random": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.10.0"
      }
    },
    "node_modules/randomatic/node_modules/is-number": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-4.0.0.tgz",
      "integrity": "sha512-rSklcAIlf1OmFdyAqbnWTLVelsQ58uvZ66S/ZyawjWqIviTWCjg2PzVGw8WUA+nNuPTqb4wgA+NszrJ+08LlgQ==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/randomatic/node_modules/kind-of": {
      "version": "6.0.3",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",
      "integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/range-parser": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.2.1.tgz",
      "integrity": "sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg==",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/raw-body": {
      "version": "2.4.0",
      "resolved": "https://registry.npmjs.org/raw-body/-/raw-body-2.4.0.tgz",
      "integrity": "sha512-4Oz8DUIwdvoa5qMJelxipzi/iJIi40O5cGV1wNYp5hvZP8ZN0T+jiNkL0QepXs+EsQ9XJ8ipEDoiH70ySUJP3Q==",
      "dependencies": {
        "bytes": "3.1.0",
        "http-errors": "1.7.2",
        "iconv-lite": "0.4.24",
        "unpipe": "1.0.0"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/rc": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/rc/-/rc-1.2.8.tgz",
      "integrity": "sha512-y3bGgqKj3QBdxLbLkomlohkvsA8gdAiUQlSBJnBhfn+BPxg4bc62d8TcBW15wavDfgexCgccckhcZvywyQYPOw==",
      "dependencies": {
        "deep-extend": "^0.6.0",
        "ini": "~1.3.0",
        "minimist": "^1.2.0",
        "strip-json-comments": "~2.0.1"
      },
      "bin": {
        "rc": "cli.js"
      }
    },
    "node_modules/read-pkg": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/read-pkg/-/read-pkg-1.1.0.tgz",
      "integrity": "sha1-9f+qXs0pyzHAR0vKfXVra7KePyg=",
      "dev": true,
      "dependencies": {
        "load-json-file": "^1.0.0",
        "normalize-package-data": "^2.3.2",
        "path-type": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/read-pkg-up": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/read-pkg-up/-/read-pkg-up-1.0.1.tgz",
      "integrity": "sha1-nWPBMnbAZZGNV/ACpX9AobZD+wI=",
      "dev": true,
      "dependencies": {
        "find-up": "^1.0.0",
        "read-pkg": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/read-pkg-up/node_modules/find-up": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-1.1.2.tgz",
      "integrity": "sha1-ay6YIrGizgpgq2TWEOzK1TyyTQ8=",
      "dev": true,
      "dependencies": {
        "path-exists": "^2.0.0",
        "pinkie-promise": "^2.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/read-pkg-up/node_modules/path-exists": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-2.1.0.tgz",
      "integrity": "sha1-D+tsZPD8UY2adU3V77YscCJ2H0s=",
      "dev": true,
      "dependencies": {
        "pinkie-promise": "^2.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/readable-stream": {
      "version": "2.3.7",
      "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.7.tgz",
      "integrity": "sha512-Ebho8K4jIbHAxnuxi7o42OrZgF/ZTNcsZj6nRKyUmkhLFq8CHItp/fy6hQZuZmP/n3yZ9VBUbp4zz/mX8hmYPw==",
      "dependencies": {
        "core-util-is": "~1.0.0",
        "inherits": "~2.0.3",
        "isarray": "~1.0.0",
        "process-nextick-args": "~2.0.0",
        "safe-buffer": "~5.1.1",
        "string_decoder": "~1.1.1",
        "util-deprecate": "~1.0.1"
      }
    },
    "node_modules/readdirp": {
      "version": "3.5.0",
      "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-3.5.0.tgz",
      "integrity": "sha512-cMhu7c/8rdhkHXWsY+osBhfSy0JikwpHK/5+imo+LpeasTF8ouErHrlYkwT0++njiyuDvc7OFY5T3ukvZ8qmFQ==",
      "dependencies": {
        "picomatch": "^2.2.1"
      },
      "engines": {
        "node": ">=8.10.0"
      }
    },
    "node_modules/realpath-native": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/realpath-native/-/realpath-native-1.1.0.tgz",
      "integrity": "sha512-wlgPA6cCIIg9gKz0fgAPjnzh4yR/LnXovwuo9hvyGvx3h8nX4+/iLZplfUWasXpqD8BdnGnP5njOFjkUwPzvjA==",
      "dev": true,
      "dependencies": {
        "util.promisify": "^1.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/regenerator-runtime": {
      "version": "0.11.1",
      "resolved": "https://registry.npmjs.org/regenerator-runtime/-/regenerator-runtime-0.11.1.tgz",
      "integrity": "sha512-MguG95oij0fC3QV3URf4V2SDYGJhJnJGqvIIgdECeODCT98wSWDAJ94SSuVpYQUoTcGUIL6L4yNB7j1DFFHSBg==",
      "dev": true
    },
    "node_modules/regex-cache": {
      "version": "0.4.4",
      "resolved": "https://registry.npmjs.org/regex-cache/-/regex-cache-0.4.4.tgz",
      "integrity": "sha512-nVIZwtCjkC9YgvWkpM55B5rBhBYRZhAaJbgcFYXXsHnbZ9UZI9nnVWYZpBlCqv9ho2eZryPnWrZGsOdPwVWXWQ==",
      "dev": true,
      "dependencies": {
        "is-equal-shallow": "^0.1.3"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/regex-not": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/regex-not/-/regex-not-1.0.2.tgz",
      "integrity": "sha512-J6SDjUgDxQj5NusnOtdFxDwN/+HWykR8GELwctJ7mdqhcyy1xEc4SRFHUXvxTp661YaVKAjfRLZ9cCqS6tn32A==",
      "dev": true,
      "dependencies": {
        "extend-shallow": "^3.0.2",
        "safe-regex": "^1.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/regexp-clone": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/regexp-clone/-/regexp-clone-1.0.0.tgz",
      "integrity": "sha512-TuAasHQNamyyJ2hb97IuBEif4qBHGjPHBS64sZwytpLEqtBQ1gPJTnOaQ6qmpET16cK14kkjbazl6+p0RRv0yw=="
    },
    "node_modules/registry-auth-token": {
      "version": "4.2.1",
      "resolved": "https://registry.npmjs.org/registry-auth-token/-/registry-auth-token-4.2.1.tgz",
      "integrity": "sha512-6gkSb4U6aWJB4SF2ZvLb76yCBjcvufXBqvvEx1HbmKPkutswjW1xNVRY0+daljIYRbogN7O0etYSlbiaEQyMyw==",
      "dependencies": {
        "rc": "^1.2.8"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/registry-url": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/registry-url/-/registry-url-5.1.0.tgz",
      "integrity": "sha512-8acYXXTI0AkQv6RAOjE3vOaIXZkT9wo4LOFbBKYQEEnnMNBpKqdUrI6S4NT0KPIo/WVvJ5tE/X5LF/TQUf0ekw==",
      "dependencies": {
        "rc": "^1.2.8"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/remove-trailing-separator": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/remove-trailing-separator/-/remove-trailing-separator-1.1.0.tgz",
      "integrity": "sha1-wkvOKig62tW8P1jg1IJJuSN52O8=",
      "dev": true
    },
    "node_modules/repeat-element": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/repeat-element/-/repeat-element-1.1.4.tgz",
      "integrity": "sha512-LFiNfRcSu7KK3evMyYOuCzv3L10TW7yC1G2/+StMjK8Y6Vqd2MG7r/Qjw4ghtuCOjFvlnms/iMmLqpvW/ES/WQ==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/repeat-string": {
      "version": "1.6.1",
      "resolved": "https://registry.npmjs.org/repeat-string/-/repeat-string-1.6.1.tgz",
      "integrity": "sha1-jcrkcOHIirwtYA//Sndihtp15jc=",
      "dev": true,
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/repeating": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/repeating/-/repeating-2.0.1.tgz",
      "integrity": "sha1-UhTFOpJtNVJwdSf7q0FdvAjQbdo=",
      "dev": true,
      "dependencies": {
        "is-finite": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/request": {
      "version": "2.88.2",
      "resolved": "https://registry.npmjs.org/request/-/request-2.88.2.tgz",
      "integrity": "sha512-MsvtOrfG9ZcrOwAW+Qi+F6HbD0CWXEh9ou77uOb7FM2WPhwT7smM833PzanhJLsgXjN89Ir6V2PczXNnMpwKhw==",
      "deprecated": "request has been deprecated, see https://github.com/request/request/issues/3142",
      "dev": true,
      "dependencies": {
        "aws-sign2": "~0.7.0",
        "aws4": "^1.8.0",
        "caseless": "~0.12.0",
        "combined-stream": "~1.0.6",
        "extend": "~3.0.2",
        "forever-agent": "~0.6.1",
        "form-data": "~2.3.2",
        "har-validator": "~5.1.3",
        "http-signature": "~1.2.0",
        "is-typedarray": "~1.0.0",
        "isstream": "~0.1.2",
        "json-stringify-safe": "~5.0.1",
        "mime-types": "~2.1.19",
        "oauth-sign": "~0.9.0",
        "performance-now": "^2.1.0",
        "qs": "~6.5.2",
        "safe-buffer": "^5.1.2",
        "tough-cookie": "~2.5.0",
        "tunnel-agent": "^0.6.0",
        "uuid": "^3.3.2"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/request-promise-core": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/request-promise-core/-/request-promise-core-1.1.4.tgz",
      "integrity": "sha512-TTbAfBBRdWD7aNNOoVOBH4pN/KigV6LyapYNNlAPA8JwbovRti1E88m3sYAwsLi5ryhPKsE9APwnjFTgdUjTpw==",
      "dev": true,
      "dependencies": {
        "lodash": "^4.17.19"
      },
      "engines": {
        "node": ">=0.10.0"
      },
      "peerDependencies": {
        "request": "^2.34"
      }
    },
    "node_modules/request-promise-native": {
      "version": "1.0.9",
      "resolved": "https://registry.npmjs.org/request-promise-native/-/request-promise-native-1.0.9.tgz",
      "integrity": "sha512-wcW+sIUiWnKgNY0dqCpOZkUbF/I+YPi+f09JZIDa39Ec+q82CpSYniDp+ISgTTbKmnpJWASeJBPZmoxH84wt3g==",
      "deprecated": "request-promise-native has been deprecated because it extends the now deprecated request package, see https://github.com/request/request/issues/3142",
      "dev": true,
      "dependencies": {
        "request-promise-core": "1.1.4",
        "stealthy-require": "^1.1.1",
        "tough-cookie": "^2.3.3"
      },
      "engines": {
        "node": ">=0.12.0"
      },
      "peerDependencies": {
        "request": "^2.34"
      }
    },
    "node_modules/request/node_modules/qs": {
      "version": "6.5.2",
      "resolved": "https://registry.npmjs.org/qs/-/qs-6.5.2.tgz",
      "integrity": "sha512-N5ZAX4/LxJmF+7wN74pUD6qAh9/wnvdQcjq9TZjevvXzSUo7bfmw91saqMjzGS2xq91/odN2dW/WOl7qQHNDGA==",
      "dev": true,
      "engines": {
        "node": ">=0.6"
      }
    },
    "node_modules/require_optional": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/require_optional/-/require_optional-1.0.1.tgz",
      "integrity": "sha512-qhM/y57enGWHAe3v/NcwML6a3/vfESLe/sGM2dII+gEO0BpKRUkWZow/tyloNqJyN6kXSl3RyyM8Ll5D/sJP8g==",
      "dependencies": {
        "resolve-from": "^2.0.0",
        "semver": "^5.1.0"
      }
    },
    "node_modules/require-directory": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/require-directory/-/require-directory-2.1.1.tgz",
      "integrity": "sha1-jGStX9MNqxyXbiNE/+f3kqam30I=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/require-main-filename": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/require-main-filename/-/require-main-filename-1.0.1.tgz",
      "integrity": "sha1-l/cXtp1IeE9fUmpsWqj/3aBVpNE=",
      "dev": true
    },
    "node_modules/resolve": {
      "version": "1.1.7",
      "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.1.7.tgz",
      "integrity": "sha1-IDEU2CrSxe2ejgQRs5ModeiJ6Xs=",
      "dev": true
    },
    "node_modules/resolve-cwd": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/resolve-cwd/-/resolve-cwd-2.0.0.tgz",
      "integrity": "sha1-AKn3OHVW4nA46uIyyqNypqWbZlo=",
      "dev": true,
      "dependencies": {
        "resolve-from": "^3.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/resolve-cwd/node_modules/resolve-from": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-3.0.0.tgz",
      "integrity": "sha1-six699nWiBvItuZTM17rywoYh0g=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/resolve-from": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-2.0.0.tgz",
      "integrity": "sha1-lICrIOlP+h2egKgEx+oUdhGWa1c=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/resolve-url": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/resolve-url/-/resolve-url-0.2.1.tgz",
      "integrity": "sha1-LGN/53yJOv0qZj/iGqkIAGjiBSo=",
      "deprecated": "https://github.com/lydell/resolve-url#deprecated",
      "dev": true
    },
    "node_modules/responselike": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/responselike/-/responselike-1.0.2.tgz",
      "integrity": "sha1-kYcg7ztjHFZCvgaPFa3lpG9Loec=",
      "dependencies": {
        "lowercase-keys": "^1.0.0"
      }
    },
    "node_modules/ret": {
      "version": "0.1.15",
      "resolved": "https://registry.npmjs.org/ret/-/ret-0.1.15.tgz",
      "integrity": "sha512-TTlYpa+OL+vMMNG24xSlQGEJ3B/RzEfUlLct7b5G/ytav+wPrplCpVMFuwzXbkecJrb6IYo1iFb0S9v37754mg==",
      "dev": true,
      "engines": {
        "node": ">=0.12"
      }
    },
    "node_modules/rimraf": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-3.0.2.tgz",
      "integrity": "sha512-JZkJMZkAGFFPP2YqXZXPbMlMBgsxzE8ILs4lMIX/2o0L9UBw9O/Y3o6wFw/i9YLapcUJWwqbi3kdxIPdC62TIA==",
      "dependencies": {
        "glob": "^7.1.3"
      },
      "bin": {
        "rimraf": "bin.js"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/rsvp": {
      "version": "3.6.2",
      "resolved": "https://registry.npmjs.org/rsvp/-/rsvp-3.6.2.tgz",
      "integrity": "sha512-OfWGQTb9vnwRjwtA2QwpG2ICclHC3pgXZO5xt8H2EfgDquO0qVdSb5T88L4qJVAEugbS56pAuV4XZM58UX8ulw==",
      "dev": true,
      "engines": {
        "node": "0.12.* || 4.* || 6.* || >= 7.*"
      }
    },
    "node_modules/run-parallel": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/run-parallel/-/run-parallel-1.2.0.tgz",
      "integrity": "sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "dependencies": {
        "queue-microtask": "^1.2.2"
      }
    },
    "node_modules/safe-buffer": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
      "integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g=="
    },
    "node_modules/safe-regex": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/safe-regex/-/safe-regex-1.1.0.tgz",
      "integrity": "sha1-QKNmnzsHfR6UPURinhV91IAjvy4=",
      "dev": true,
      "dependencies": {
        "ret": "~0.1.10"
      }
    },
    "node_modules/safer-buffer": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
      "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg=="
    },
    "node_modules/sane": {
      "version": "2.5.2",
      "resolved": "https://registry.npmjs.org/sane/-/sane-2.5.2.tgz",
      "integrity": "sha1-tNwYYcIbQn6SlQej51HiosuKs/o=",
      "deprecated": "some dependency vulnerabilities fixed, support for node < 10 dropped, and newer ECMAScript syntax/features added",
      "dev": true,
      "dependencies": {
        "anymatch": "^2.0.0",
        "capture-exit": "^1.2.0",
        "exec-sh": "^0.2.0",
        "fb-watchman": "^2.0.0",
        "micromatch": "^3.1.4",
        "minimist": "^1.1.1",
        "walker": "~1.0.5",
        "watch": "~0.18.0"
      },
      "bin": {
        "sane": "src/cli.js"
      },
      "engines": {
        "node": ">=0.6.0"
      },
      "optionalDependencies": {
        "fsevents": "^1.2.3"
      }
    },
    "node_modules/sane/node_modules/anymatch": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-2.0.0.tgz",
      "integrity": "sha512-5teOsQWABXHHBFP9y3skS5P3d/WfWXpv3FUpy+LorMrNYaT9pI4oLMQX7jzQ2KklNpGpWHzdCXTDT2Y3XGlZBw==",
      "dev": true,
      "dependencies": {
        "micromatch": "^3.1.4",
        "normalize-path": "^2.1.1"
      }
    },
    "node_modules/sane/node_modules/arr-diff": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/arr-diff/-/arr-diff-4.0.0.tgz",
      "integrity": "sha1-1kYQdP6/7HHn4VI1dhoyml3HxSA=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/sane/node_modules/array-unique": {
      "version": "0.3.2",
      "resolved": "https://registry.npmjs.org/array-unique/-/array-unique-0.3.2.tgz",
      "integrity": "sha1-qJS3XUvE9s1nnvMkSp/Y9Gri1Cg=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/sane/node_modules/braces": {
      "version": "2.3.2",
      "resolved": "https://registry.npmjs.org/braces/-/braces-2.3.2.tgz",
      "integrity": "sha512-aNdbnj9P8PjdXU4ybaWLK2IF3jc/EoDYbC7AazW6to3TRsfXxscC9UXOB5iDiEQrkyIbWp2SLQda4+QAa7nc3w==",
      "dev": true,
      "dependencies": {
        "arr-flatten": "^1.1.0",
        "array-unique": "^0.3.2",
        "extend-shallow": "^2.0.1",
        "fill-range": "^4.0.0",
        "isobject": "^3.0.1",
        "repeat-element": "^1.1.2",
        "snapdragon": "^0.8.1",
        "snapdragon-node": "^2.0.1",
        "split-string": "^3.0.2",
        "to-regex": "^3.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/sane/node_modules/braces/node_modules/extend-shallow": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
      "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
      "dev": true,
      "dependencies": {
        "is-extendable": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/sane/node_modules/expand-brackets": {
      "version": "2.1.4",
      "resolved": "https://registry.npmjs.org/expand-brackets/-/expand-brackets-2.1.4.tgz",
      "integrity": "sha1-t3c14xXOMPa27/D4OwQVGiJEliI=",
      "dev": true,
      "dependencies": {
        "debug": "^2.3.3",
        "define-property": "^0.2.5",
        "extend-shallow": "^2.0.1",
        "posix-character-classes": "^0.1.0",
        "regex-not": "^1.0.0",
        "snapdragon": "^0.8.1",
        "to-regex": "^3.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/sane/node_modules/expand-brackets/node_modules/define-property": {
      "version": "0.2.5",
      "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
      "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
      "dev": true,
      "dependencies": {
        "is-descriptor": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/sane/node_modules/expand-brackets/node_modules/extend-shallow": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
      "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
      "dev": true,
      "dependencies": {
        "is-extendable": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/sane/node_modules/expand-brackets/node_modules/is-accessor-descriptor": {
      "version": "0.1.6",
      "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-0.1.6.tgz",
      "integrity": "sha1-qeEss66Nh2cn7u84Q/igiXtcmNY=",
      "dev": true,
      "dependencies": {
        "kind-of": "^3.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/sane/node_modules/expand-brackets/node_modules/is-accessor-descriptor/node_modules/kind-of": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
      "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
      "dev": true,
      "dependencies": {
        "is-buffer": "^1.1.5"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/sane/node_modules/expand-brackets/node_modules/is-data-descriptor": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-0.1.4.tgz",
      "integrity": "sha1-C17mSDiOLIYCgueT8YVv7D8wG1Y=",
      "dev": true,
      "dependencies": {
        "kind-of": "^3.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/sane/node_modules/expand-brackets/node_modules/is-data-descriptor/node_modules/kind-of": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
      "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
      "dev": true,
      "dependencies": {
        "is-buffer": "^1.1.5"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/sane/node_modules/expand-brackets/node_modules/is-descriptor": {
      "version": "0.1.6",
      "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-0.1.6.tgz",
      "integrity": "sha512-avDYr0SB3DwO9zsMov0gKCESFYqCnE4hq/4z3TdUlukEy5t9C0YRq7HLrsN52NAcqXKaepeCD0n+B0arnVG3Hg==",
      "dev": true,
      "dependencies": {
        "is-accessor-descriptor": "^0.1.6",
        "is-data-descriptor": "^0.1.4",
        "kind-of": "^5.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/sane/node_modules/expand-brackets/node_modules/kind-of": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-5.1.0.tgz",
      "integrity": "sha512-NGEErnH6F2vUuXDh+OlbcKW7/wOcfdRHaZ7VWtqCztfHri/++YKmP51OdWeGPuqCOba6kk2OTe5d02VmTB80Pw==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/sane/node_modules/extglob": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/extglob/-/extglob-2.0.4.tgz",
      "integrity": "sha512-Nmb6QXkELsuBr24CJSkilo6UHHgbekK5UiZgfE6UHD3Eb27YC6oD+bhcT+tJ6cl8dmsgdQxnWlcry8ksBIBLpw==",
      "dev": true,
      "dependencies": {
        "array-unique": "^0.3.2",
        "define-property": "^1.0.0",
        "expand-brackets": "^2.1.4",
        "extend-shallow": "^2.0.1",
        "fragment-cache": "^0.2.1",
        "regex-not": "^1.0.0",
        "snapdragon": "^0.8.1",
        "to-regex": "^3.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/sane/node_modules/extglob/node_modules/define-property": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
      "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
      "dev": true,
      "dependencies": {
        "is-descriptor": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/sane/node_modules/extglob/node_modules/extend-shallow": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
      "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
      "dev": true,
      "dependencies": {
        "is-extendable": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/sane/node_modules/fill-range": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-4.0.0.tgz",
      "integrity": "sha1-1USBHUKPmOsGpj3EAtJAPDKMOPc=",
      "dev": true,
      "dependencies": {
        "extend-shallow": "^2.0.1",
        "is-number": "^3.0.0",
        "repeat-string": "^1.6.1",
        "to-regex-range": "^2.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/sane/node_modules/fill-range/node_modules/extend-shallow": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
      "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
      "dev": true,
      "dependencies": {
        "is-extendable": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/sane/node_modules/fsevents": {
      "version": "1.2.13",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-1.2.13.tgz",
      "integrity": "sha512-oWb1Z6mkHIskLzEJ/XWX0srkpkTQ7vaopMQkyaEIoq0fmtFVxOthb8cCxeT+p3ynTdkk/RZwbgG4brR5BeWECw==",
      "deprecated": "fsevents 1 will break on node v14+ and could be using insecure binaries. Upgrade to fsevents 2.",
      "dev": true,
      "hasInstallScript": true,
      "optional": true,
      "os": [
        "darwin"
      ],
      "dependencies": {
        "bindings": "^1.5.0",
        "nan": "^2.12.1"
      },
      "engines": {
        "node": ">= 4.0"
      }
    },
    "node_modules/sane/node_modules/is-accessor-descriptor": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
      "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
      "dev": true,
      "dependencies": {
        "kind-of": "^6.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/sane/node_modules/is-data-descriptor": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
      "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
      "dev": true,
      "dependencies": {
        "kind-of": "^6.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/sane/node_modules/is-descriptor": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
      "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
      "dev": true,
      "dependencies": {
        "is-accessor-descriptor": "^1.0.0",
        "is-data-descriptor": "^1.0.0",
        "kind-of": "^6.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/sane/node_modules/is-number": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-3.0.0.tgz",
      "integrity": "sha1-JP1iAaR4LPUFYcgQJ2r8fRLXEZU=",
      "dev": true,
      "dependencies": {
        "kind-of": "^3.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/sane/node_modules/is-number/node_modules/kind-of": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
      "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
      "dev": true,
      "dependencies": {
        "is-buffer": "^1.1.5"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/sane/node_modules/isobject": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
      "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/sane/node_modules/kind-of": {
      "version": "6.0.3",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",
      "integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/sane/node_modules/micromatch": {
      "version": "3.1.10",
      "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-3.1.10.tgz",
      "integrity": "sha512-MWikgl9n9M3w+bpsY3He8L+w9eF9338xRl8IAO5viDizwSzziFEyUzo2xrrloB64ADbTf8uA8vRqqttDTOmccg==",
      "dev": true,
      "dependencies": {
        "arr-diff": "^4.0.0",
        "array-unique": "^0.3.2",
        "braces": "^2.3.1",
        "define-property": "^2.0.2",
        "extend-shallow": "^3.0.2",
        "extglob": "^2.0.4",
        "fragment-cache": "^0.2.1",
        "kind-of": "^6.0.2",
        "nanomatch": "^1.2.9",
        "object.pick": "^1.3.0",
        "regex-not": "^1.0.0",
        "snapdragon": "^0.8.1",
        "to-regex": "^3.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/sane/node_modules/normalize-path": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-2.1.1.tgz",
      "integrity": "sha1-GrKLVW4Zg2Oowab35vogE3/mrtk=",
      "dev": true,
      "dependencies": {
        "remove-trailing-separator": "^1.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/sane/node_modules/to-regex-range": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-2.1.1.tgz",
      "integrity": "sha1-fIDBe53+vlmeJzZ+DU3VWQFB2zg=",
      "dev": true,
      "dependencies": {
        "is-number": "^3.0.0",
        "repeat-string": "^1.6.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/saslprep": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/saslprep/-/saslprep-1.0.3.tgz",
      "integrity": "sha512-/MY/PEMbk2SuY5sScONwhUDsV2p77Znkb/q3nSVstq/yQzYJOH/Azh29p9oJLsl3LnQwSvZDKagDGBsBwSooag==",
      "optional": true,
      "dependencies": {
        "sparse-bitfield": "^3.0.3"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/sax": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/sax/-/sax-1.2.4.tgz",
      "integrity": "sha512-NqVDv9TpANUjFm0N8uM5GxL36UgKi9/atZw+x7YFnQ8ckwFGKrl4xX4yWtrey3UJm5nP1kUbnYgLopqWNSRhWw=="
    },
    "node_modules/semver": {
      "version": "5.7.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
      "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==",
      "bin": {
        "semver": "bin/semver"
      }
    },
    "node_modules/semver-diff": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/semver-diff/-/semver-diff-3.1.1.tgz",
      "integrity": "sha512-GX0Ix/CJcHyB8c4ykpHGIAvLyOwOobtM/8d+TQkAd81/bEjgPHrfba41Vpesr7jX/t8Uh+R3EX9eAS5be+jQYg==",
      "dependencies": {
        "semver": "^6.3.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/semver-diff/node_modules/semver": {
      "version": "6.3.0",
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
      "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/send": {
      "version": "0.17.1",
      "resolved": "https://registry.npmjs.org/send/-/send-0.17.1.tgz",
      "integrity": "sha512-BsVKsiGcQMFwT8UxypobUKyv7irCNRHk1T0G680vk88yf6LBByGcZJOTJCrTP2xVN6yI+XjPJcNuE3V4fT9sAg==",
      "dependencies": {
        "debug": "2.6.9",
        "depd": "~1.1.2",
        "destroy": "~1.0.4",
        "encodeurl": "~1.0.2",
        "escape-html": "~1.0.3",
        "etag": "~1.8.1",
        "fresh": "0.5.2",
        "http-errors": "~1.7.2",
        "mime": "1.6.0",
        "ms": "2.1.1",
        "on-finished": "~2.3.0",
        "range-parser": "~1.2.1",
        "statuses": "~1.5.0"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/send/node_modules/ms": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.1.tgz",
      "integrity": "sha512-tgp+dl5cGk28utYktBsrFqA7HKgrhgPsg6Z/EfhWI4gl1Hwq8B/GmY/0oXZ6nF8hDVesS/FpnYaD/kOWhYQvyg=="
    },
    "node_modules/serve-static": {
      "version": "1.14.1",
      "resolved": "https://registry.npmjs.org/serve-static/-/serve-static-1.14.1.tgz",
      "integrity": "sha512-JMrvUwE54emCYWlTI+hGrGv5I8dEwmco/00EvkzIIsR7MqrHonbD9pO2MOfFnpFntl7ecpZs+3mW+XbQZu9QCg==",
      "dependencies": {
        "encodeurl": "~1.0.2",
        "escape-html": "~1.0.3",
        "parseurl": "~1.3.3",
        "send": "0.17.1"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/set-blocking": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/set-blocking/-/set-blocking-2.0.0.tgz",
      "integrity": "sha1-BF+XgtARrppoA93TgrJDkrPYkPc="
    },
    "node_modules/set-value": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/set-value/-/set-value-2.0.1.tgz",
      "integrity": "sha512-JxHc1weCN68wRY0fhCoXpyK55m/XPHafOmK4UWD7m2CI14GMcFypt4w/0+NV5f/ZMby2F6S2wwA7fgynh9gWSw==",
      "dev": true,
      "dependencies": {
        "extend-shallow": "^2.0.1",
        "is-extendable": "^0.1.1",
        "is-plain-object": "^2.0.3",
        "split-string": "^3.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/set-value/node_modules/extend-shallow": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
      "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
      "dev": true,
      "dependencies": {
        "is-extendable": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/setprototypeof": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.1.1.tgz",
      "integrity": "sha512-JvdAWfbXeIGaZ9cILp38HntZSFSo3mWg6xGcJJsd+d4aRMOqauag1C63dJfDw7OaMYwEbHMOxEZ1lqVRYP2OAw=="
    },
    "node_modules/shebang-command": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-1.2.0.tgz",
      "integrity": "sha1-RKrGW2lbAzmJaMOfNj/uXer98eo=",
      "dev": true,
      "dependencies": {
        "shebang-regex": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/shebang-regex": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-1.0.0.tgz",
      "integrity": "sha1-2kL0l0DAtC2yypcoVxyxkMmO/qM=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/shellwords": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/shellwords/-/shellwords-0.1.1.tgz",
      "integrity": "sha512-vFwSUfQvqybiICwZY5+DAWIPLKsWO31Q91JSKl3UYv+K5c2QRPzn0qzec6QPu1Qc9eHYItiP3NdJqNVqetYAww==",
      "dev": true
    },
    "node_modules/side-channel": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/side-channel/-/side-channel-1.0.4.tgz",
      "integrity": "sha512-q5XPytqFEIKHkGdiMIrY10mvLRvnQh42/+GoBlFW3b2LXLE2xxJpZFdm94we0BaoV3RwJyGqg5wS7epxTv0Zvw==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.0",
        "get-intrinsic": "^1.0.2",
        "object-inspect": "^1.9.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/sift": {
      "version": "7.0.1",
      "resolved": "https://registry.npmjs.org/sift/-/sift-7.0.1.tgz",
      "integrity": "sha512-oqD7PMJ+uO6jV9EQCl0LrRw1OwsiPsiFQR5AR30heR+4Dl7jBBbDLnNvWiak20tzZlSE1H7RB30SX/1j/YYT7g=="
    },
    "node_modules/signal-exit": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.3.tgz",
      "integrity": "sha512-VUJ49FC8U1OxwZLxIbTTrDvLnf/6TDgxZcK8wxR8zs13xpx7xbG60ndBlhNrFi2EMuFRoeDoJO7wthSLq42EjA=="
    },
    "node_modules/simple-swizzle": {
      "version": "0.2.2",
      "resolved": "https://registry.npmjs.org/simple-swizzle/-/simple-swizzle-0.2.2.tgz",
      "integrity": "sha1-pNprY1/8zMoz9w0Xy5JZLeleVXo=",
      "dependencies": {
        "is-arrayish": "^0.3.1"
      }
    },
    "node_modules/slash": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/slash/-/slash-1.0.0.tgz",
      "integrity": "sha1-xB8vbDn8FtHNF61LXYlhFK5HDVU=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/sliced": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/sliced/-/sliced-1.0.1.tgz",
      "integrity": "sha1-CzpmK10Ewxd7GSa+qCsD+Dei70E="
    },
    "node_modules/snapdragon": {
      "version": "0.8.2",
      "resolved": "https://registry.npmjs.org/snapdragon/-/snapdragon-0.8.2.tgz",
      "integrity": "sha512-FtyOnWN/wCHTVXOMwvSv26d+ko5vWlIDD6zoUJ7LW8vh+ZBC8QdljveRP+crNrtBwioEUWy/4dMtbBjA4ioNlg==",
      "dev": true,
      "dependencies": {
        "base": "^0.11.1",
        "debug": "^2.2.0",
        "define-property": "^0.2.5",
        "extend-shallow": "^2.0.1",
        "map-cache": "^0.2.2",
        "source-map": "^0.5.6",
        "source-map-resolve": "^0.5.0",
        "use": "^3.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/snapdragon-node": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/snapdragon-node/-/snapdragon-node-2.1.1.tgz",
      "integrity": "sha512-O27l4xaMYt/RSQ5TR3vpWCAB5Kb/czIcqUFOM/C4fYcLnbZUc1PkjTAMjof2pBWaSTwOUd6qUHcFGVGj7aIwnw==",
      "dev": true,
      "dependencies": {
        "define-property": "^1.0.0",
        "isobject": "^3.0.0",
        "snapdragon-util": "^3.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/snapdragon-node/node_modules/define-property": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
      "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
      "dev": true,
      "dependencies": {
        "is-descriptor": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/snapdragon-node/node_modules/is-accessor-descriptor": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
      "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
      "dev": true,
      "dependencies": {
        "kind-of": "^6.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/snapdragon-node/node_modules/is-data-descriptor": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
      "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
      "dev": true,
      "dependencies": {
        "kind-of": "^6.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/snapdragon-node/node_modules/is-descriptor": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
      "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
      "dev": true,
      "dependencies": {
        "is-accessor-descriptor": "^1.0.0",
        "is-data-descriptor": "^1.0.0",
        "kind-of": "^6.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/snapdragon-node/node_modules/isobject": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
      "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/snapdragon-node/node_modules/kind-of": {
      "version": "6.0.3",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",
      "integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/snapdragon-util": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/snapdragon-util/-/snapdragon-util-3.0.1.tgz",
      "integrity": "sha512-mbKkMdQKsjX4BAL4bRYTj21edOf8cN7XHdYUJEe+Zn99hVEYcMvKPct1IqNe7+AZPirn8BCDOQBHQZknqmKlZQ==",
      "dev": true,
      "dependencies": {
        "kind-of": "^3.2.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/snapdragon/node_modules/define-property": {
      "version": "0.2.5",
      "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
      "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
      "dev": true,
      "dependencies": {
        "is-descriptor": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/snapdragon/node_modules/extend-shallow": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
      "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
      "dev": true,
      "dependencies": {
        "is-extendable": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/source-map": {
      "version": "0.5.7",
      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",
      "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/source-map-resolve": {
      "version": "0.5.3",
      "resolved": "https://registry.npmjs.org/source-map-resolve/-/source-map-resolve-0.5.3.tgz",
      "integrity": "sha512-Htz+RnsXWk5+P2slx5Jh3Q66vhQj1Cllm0zvnaY98+NFx+Dv2CF/f5O/t8x+KaNdrdIAsruNzoh/KpialbqAnw==",
      "dev": true,
      "dependencies": {
        "atob": "^2.1.2",
        "decode-uri-component": "^0.2.0",
        "resolve-url": "^0.2.1",
        "source-map-url": "^0.4.0",
        "urix": "^0.1.0"
      }
    },
    "node_modules/source-map-support": {
      "version": "0.5.19",
      "resolved": "https://registry.npmjs.org/source-map-support/-/source-map-support-0.5.19.tgz",
      "integrity": "sha512-Wonm7zOCIJzBGQdB+thsPar0kYuCIzYvxZwlBa87yi/Mdjv7Tip2cyVbLj5o0cFPN4EVkuTwb3GDDyUx2DGnGw==",
      "dev": true,
      "dependencies": {
        "buffer-from": "^1.0.0",
        "source-map": "^0.6.0"
      }
    },
    "node_modules/source-map-support/node_modules/source-map": {
      "version": "0.6.1",
      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
      "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/source-map-url": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/source-map-url/-/source-map-url-0.4.1.tgz",
      "integrity": "sha512-cPiFOTLUKvJFIg4SKVScy4ilPPW6rFgMgfuZJPNoDuMs3nC1HbMUycBoJw77xFIp6z1UJQJOfx6C9GMH80DiTw==",
      "dev": true
    },
    "node_modules/sparse-bitfield": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/sparse-bitfield/-/sparse-bitfield-3.0.3.tgz",
      "integrity": "sha1-/0rm5oZWBWuks+eSqzM004JzyhE=",
      "optional": true,
      "dependencies": {
        "memory-pager": "^1.0.2"
      }
    },
    "node_modules/spdx-correct": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/spdx-correct/-/spdx-correct-3.1.1.tgz",
      "integrity": "sha512-cOYcUWwhCuHCXi49RhFRCyJEK3iPj1Ziz9DpViV3tbZOwXD49QzIN3MpOLJNxh2qwq2lJJZaKMVw9qNi4jTC0w==",
      "dev": true,
      "dependencies": {
        "spdx-expression-parse": "^3.0.0",
        "spdx-license-ids": "^3.0.0"
      }
    },
    "node_modules/spdx-exceptions": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/spdx-exceptions/-/spdx-exceptions-2.3.0.tgz",
      "integrity": "sha512-/tTrYOC7PPI1nUAgx34hUpqXuyJG+DTHJTnIULG4rDygi4xu/tfgmq1e1cIRwRzwZgo4NLySi+ricLkZkw4i5A==",
      "dev": true
    },
    "node_modules/spdx-expression-parse": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/spdx-expression-parse/-/spdx-expression-parse-3.0.1.tgz",
      "integrity": "sha512-cbqHunsQWnJNE6KhVSMsMeH5H/L9EpymbzqTQ3uLwNCLZ1Q481oWaofqH7nO6V07xlXwY6PhQdQ2IedWx/ZK4Q==",
      "dev": true,
      "dependencies": {
        "spdx-exceptions": "^2.1.0",
        "spdx-license-ids": "^3.0.0"
      }
    },
    "node_modules/spdx-license-ids": {
      "version": "3.0.9",
      "resolved": "https://registry.npmjs.org/spdx-license-ids/-/spdx-license-ids-3.0.9.tgz",
      "integrity": "sha512-Ki212dKK4ogX+xDo4CtOZBVIwhsKBEfsEEcwmJfLQzirgc2jIWdzg40Unxz/HzEUqM1WFzVlQSMF9kZZ2HboLQ==",
      "dev": true
    },
    "node_modules/split-string": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/split-string/-/split-string-3.1.0.tgz",
      "integrity": "sha512-NzNVhJDYpwceVVii8/Hu6DKfD2G+NrQHlS/V/qgv763EYudVwEcMQNxd2lh+0VrUByXN/oJkl5grOhYWvQUYiw==",
      "dev": true,
      "dependencies": {
        "extend-shallow": "^3.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/sprintf-js": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/sprintf-js/-/sprintf-js-1.0.3.tgz",
      "integrity": "sha1-BOaSb2YolTVPPdAVIDYzuFcpfiw=",
      "dev": true
    },
    "node_modules/sshpk": {
      "version": "1.16.1",
      "resolved": "https://registry.npmjs.org/sshpk/-/sshpk-1.16.1.tgz",
      "integrity": "sha512-HXXqVUq7+pcKeLqqZj6mHFUMvXtOJt1uoUx09pFW6011inTMxqI8BA8PM95myrIyyKwdnzjdFjLiE6KBPVtJIg==",
      "dev": true,
      "dependencies": {
        "asn1": "~0.2.3",
        "assert-plus": "^1.0.0",
        "bcrypt-pbkdf": "^1.0.0",
        "dashdash": "^1.12.0",
        "ecc-jsbn": "~0.1.1",
        "getpass": "^0.1.1",
        "jsbn": "~0.1.0",
        "safer-buffer": "^2.0.2",
        "tweetnacl": "~0.14.0"
      },
      "bin": {
        "sshpk-conv": "bin/sshpk-conv",
        "sshpk-sign": "bin/sshpk-sign",
        "sshpk-verify": "bin/sshpk-verify"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/stack-trace": {
      "version": "0.0.10",
      "resolved": "https://registry.npmjs.org/stack-trace/-/stack-trace-0.0.10.tgz",
      "integrity": "sha1-VHxws0fo0ytOEI6hoqFZ5f3eGcA=",
      "engines": {
        "node": "*"
      }
    },
    "node_modules/stack-utils": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/stack-utils/-/stack-utils-1.0.5.tgz",
      "integrity": "sha512-KZiTzuV3CnSnSvgMRrARVCj+Ht7rMbauGDK0LdVFRGyenwdylpajAp4Q0i6SX8rEmbTpMMf6ryq2gb8pPq2WgQ==",
      "dev": true,
      "dependencies": {
        "escape-string-regexp": "^2.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/stack-utils/node_modules/escape-string-regexp": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-2.0.0.tgz",
      "integrity": "sha512-UpzcLCXolUWcNu5HtVMHYdXJjArjsF9C0aNnquZYY4uW/Vu0miy5YoWvbV345HauVvcAUnpRuhMMcqTcGOY2+w==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/static-extend": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/static-extend/-/static-extend-0.1.2.tgz",
      "integrity": "sha1-YICcOcv/VTNyJv1eC1IPNB8ftcY=",
      "dev": true,
      "dependencies": {
        "define-property": "^0.2.5",
        "object-copy": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/static-extend/node_modules/define-property": {
      "version": "0.2.5",
      "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
      "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
      "dev": true,
      "dependencies": {
        "is-descriptor": "^0.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/statuses": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/statuses/-/statuses-1.5.0.tgz",
      "integrity": "sha1-Fhx9rBd2Wf2YEfQ3cfqZOBR4Yow=",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/stealthy-require": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/stealthy-require/-/stealthy-require-1.1.1.tgz",
      "integrity": "sha1-NbCYdbT/SfJqd35QmzCQoyJr8ks=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/streamsearch": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/streamsearch/-/streamsearch-0.1.2.tgz",
      "integrity": "sha1-gIudDlb8Jz2Am6VzOOkpkZoanxo=",
      "engines": {
        "node": ">=0.8.0"
      }
    },
    "node_modules/string_decoder": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
      "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
      "dependencies": {
        "safe-buffer": "~5.1.0"
      }
    },
    "node_modules/string-length": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/string-length/-/string-length-2.0.0.tgz",
      "integrity": "sha1-1A27aGo6zpYMHP/KVivyxF+DY+0=",
      "dev": true,
      "dependencies": {
        "astral-regex": "^1.0.0",
        "strip-ansi": "^4.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/string-length/node_modules/ansi-regex": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-3.0.0.tgz",
      "integrity": "sha1-7QMXwyIGT3lGbAKWa922Bas32Zg=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/string-length/node_modules/strip-ansi": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-4.0.0.tgz",
      "integrity": "sha1-qEeQIusaw2iocTibY1JixQXuNo8=",
      "dev": true,
      "dependencies": {
        "ansi-regex": "^3.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/string-width": {
      "version": "4.2.2",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.2.tgz",
      "integrity": "sha512-XBJbT3N4JhVumXE0eoLU9DCjcaF92KLNqTmFCnG1pf8duUxFGwtP6AD6nkjw9a3IdiRtL3E2w3JDiE/xi3vOeA==",
      "dependencies": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/string-width/node_modules/ansi-regex": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.0.tgz",
      "integrity": "sha512-bY6fj56OUQ0hU1KjFNDQuJFezqKdrAyFdIevADiqrWHwSlbmBNMHp5ak2f40Pm8JTFyM2mqxkG6ngkHO11f/lg==",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/string-width/node_modules/emoji-regex": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
      "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A=="
    },
    "node_modules/string-width/node_modules/is-fullwidth-code-point": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
      "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/string-width/node_modules/strip-ansi": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.0.tgz",
      "integrity": "sha512-AuvKTrTfQNYNIctbR1K/YGTR1756GycPsg7b9bdV9Duqur4gv6aKqHXah67Z8ImS7WEz5QVcOtlfW2rZEugt6w==",
      "dependencies": {
        "ansi-regex": "^5.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/string.prototype.trimend": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/string.prototype.trimend/-/string.prototype.trimend-1.0.4.tgz",
      "integrity": "sha512-y9xCjw1P23Awk8EvTpcyL2NIr1j7wJ39f+k6lvRnSMz+mz9CGz9NYPelDk42kOz6+ql8xjfK8oYzy3jAP5QU5A==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.2",
        "define-properties": "^1.1.3"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/string.prototype.trimstart": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/string.prototype.trimstart/-/string.prototype.trimstart-1.0.4.tgz",
      "integrity": "sha512-jh6e984OBfvxS50tdY2nRZnoC5/mLFKOREQfw8t5yytkoUsJRNxvI/E39qu1sD0OtWI3OC0XgKSmcWwziwYuZw==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.2",
        "define-properties": "^1.1.3"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/strip-ansi": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-5.2.0.tgz",
      "integrity": "sha512-DuRs1gKbBqsMKIZlrffwlug8MHkcnpjs5VPmL1PAh+mA30U0DTotfDZ0d2UUsXpPmPmMMJ6W773MaA3J+lbiWA==",
      "dependencies": {
        "ansi-regex": "^4.1.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/strip-bom": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-2.0.0.tgz",
      "integrity": "sha1-YhmoVhZSBJHzV4i9vxRHqZx+aw4=",
      "dev": true,
      "dependencies": {
        "is-utf8": "^0.2.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/strip-eof": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/strip-eof/-/strip-eof-1.0.0.tgz",
      "integrity": "sha1-u0P/VZim6wXYm1n80SnJgzE2Br8=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/strip-json-comments": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-2.0.1.tgz",
      "integrity": "sha1-PFMZQukIwml8DsNEhYwobHygpgo=",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/superagent": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/superagent/-/superagent-6.1.0.tgz",
      "integrity": "sha512-OUDHEssirmplo3F+1HWKUrUjvnQuA+nZI6i/JJBdXb5eq9IyEQwPyPpqND+SSsxf6TygpBEkUjISVRN4/VOpeg==",
      "dev": true,
      "dependencies": {
        "component-emitter": "^1.3.0",
        "cookiejar": "^2.1.2",
        "debug": "^4.1.1",
        "fast-safe-stringify": "^2.0.7",
        "form-data": "^3.0.0",
        "formidable": "^1.2.2",
        "methods": "^1.1.2",
        "mime": "^2.4.6",
        "qs": "^6.9.4",
        "readable-stream": "^3.6.0",
        "semver": "^7.3.2"
      },
      "engines": {
        "node": ">= 7.0.0"
      }
    },
    "node_modules/superagent/node_modules/debug": {
      "version": "4.3.1",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.1.tgz",
      "integrity": "sha512-doEwdvm4PCeK4K3RQN2ZC2BYUBaxwLARCqZmMjtF8a51J2Rb0xpVloFRnCODwqjpwnAoao4pelN8l3RJdv3gRQ==",
      "dev": true,
      "dependencies": {
        "ms": "2.1.2"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/superagent/node_modules/form-data": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/form-data/-/form-data-3.0.1.tgz",
      "integrity": "sha512-RHkBKtLWUVwd7SqRIvCZMEvAMoGUp0XU+seQiZejj0COz3RI3hWP4sCv3gZWWLjJTd7rGwcsF5eKZGii0r/hbg==",
      "dev": true,
      "dependencies": {
        "asynckit": "^0.4.0",
        "combined-stream": "^1.0.8",
        "mime-types": "^2.1.12"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/superagent/node_modules/mime": {
      "version": "2.5.2",
      "resolved": "https://registry.npmjs.org/mime/-/mime-2.5.2.tgz",
      "integrity": "sha512-tqkh47FzKeCPD2PUiPB6pkbMzsCasjxAfC62/Wap5qrUWcb+sFasXUC5I3gYM5iBM8v/Qpn4UK0x+j0iHyFPDg==",
      "dev": true,
      "bin": {
        "mime": "cli.js"
      },
      "engines": {
        "node": ">=4.0.0"
      }
    },
    "node_modules/superagent/node_modules/ms": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
      "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==",
      "dev": true
    },
    "node_modules/superagent/node_modules/qs": {
      "version": "6.10.1",
      "resolved": "https://registry.npmjs.org/qs/-/qs-6.10.1.tgz",
      "integrity": "sha512-M528Hph6wsSVOBiYUnGf+K/7w0hNshs/duGsNXPUCLH5XAqjEtiPGwNONLV0tBH8NoGb0mvD5JubnUTrujKDTg==",
      "dev": true,
      "dependencies": {
        "side-channel": "^1.0.4"
      },
      "engines": {
        "node": ">=0.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/superagent/node_modules/readable-stream": {
      "version": "3.6.0",
      "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.0.tgz",
      "integrity": "sha512-BViHy7LKeTz4oNnkcLJ+lVSL6vpiFeX6/d3oSH8zCW7UxP2onchk+vTGB143xuFjHS3deTgkKoXXymXqymiIdA==",
      "dev": true,
      "dependencies": {
        "inherits": "^2.0.3",
        "string_decoder": "^1.1.1",
        "util-deprecate": "^1.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/superagent/node_modules/semver": {
      "version": "7.3.5",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.3.5.tgz",
      "integrity": "sha512-PoeGJYh8HK4BTO/a9Tf6ZG3veo/A7ZVsYrSA6J8ny9nb3B1VrpkuN+z9OE5wfE5p6H4LchYZsegiQgbJD94ZFQ==",
      "dev": true,
      "dependencies": {
        "lru-cache": "^6.0.0"
      },
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/supertest": {
      "version": "6.1.3",
      "resolved": "https://registry.npmjs.org/supertest/-/supertest-6.1.3.tgz",
      "integrity": "sha512-v2NVRyP73XDewKb65adz+yug1XMtmvij63qIWHZzSX8tp6wiq6xBLUy4SUAd2NII6wIipOmHT/FD9eicpJwdgQ==",
      "dev": true,
      "dependencies": {
        "methods": "^1.1.2",
        "superagent": "^6.1.0"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/supports-color": {
      "version": "5.5.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
      "integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",
      "dependencies": {
        "has-flag": "^3.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/symbol-tree": {
      "version": "3.2.4",
      "resolved": "https://registry.npmjs.org/symbol-tree/-/symbol-tree-3.2.4.tgz",
      "integrity": "sha512-9QNk5KwDF+Bvz+PyObkmSYjI5ksVUYtjW7AU22r2NKcfLJcXp96hkDWU3+XndOsUb+AQ9QhfzfCT2O+CNWT5Tw==",
      "dev": true
    },
    "node_modules/tar": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/tar/-/tar-6.1.0.tgz",
      "integrity": "sha512-DUCttfhsnLCjwoDoFcI+B2iJgYa93vBnDUATYEeRx6sntCTdN01VnqsIuTlALXla/LWooNg0yEGeB+Y8WdFxGA==",
      "dependencies": {
        "chownr": "^2.0.0",
        "fs-minipass": "^2.0.0",
        "minipass": "^3.0.0",
        "minizlib": "^2.1.1",
        "mkdirp": "^1.0.3",
        "yallist": "^4.0.0"
      },
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/term-size": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/term-size/-/term-size-2.2.1.tgz",
      "integrity": "sha512-wK0Ri4fOGjv/XPy8SBHZChl8CM7uMc5VML7SqiQ0zG7+J5Vr+RMQDoHa2CNT6KHUnTGIXH34UDMkPzAUyapBZg==",
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/test-exclude": {
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/test-exclude/-/test-exclude-4.2.3.tgz",
      "integrity": "sha512-SYbXgY64PT+4GAL2ocI3HwPa4Q4TBKm0cwAVeKOt/Aoc0gSpNRjJX8w0pA1LMKZ3LBmd8pYBqApFNQLII9kavA==",
      "dev": true,
      "dependencies": {
        "arrify": "^1.0.1",
        "micromatch": "^2.3.11",
        "object-assign": "^4.1.0",
        "read-pkg-up": "^1.0.1",
        "require-main-filename": "^1.0.1"
      }
    },
    "node_modules/text-hex": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/text-hex/-/text-hex-1.0.0.tgz",
      "integrity": "sha512-uuVGNWzgJ4yhRaNSiubPY7OjISw4sw4E5Uv0wbjp+OzcbmVU/rsT8ujgcXJhn9ypzsgr5vlzpPqP+MBBKcGvbg=="
    },
    "node_modules/throat": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/throat/-/throat-4.1.0.tgz",
      "integrity": "sha1-iQN8vJLFarGJJua6TLsgDhVnKmo=",
      "dev": true
    },
    "node_modules/tmpl": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/tmpl/-/tmpl-1.0.4.tgz",
      "integrity": "sha1-I2QN17QtAEM5ERQIIOXPRA5SHdE=",
      "dev": true
    },
    "node_modules/to-fast-properties": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/to-fast-properties/-/to-fast-properties-1.0.3.tgz",
      "integrity": "sha1-uDVx+k2MJbguIxsG46MFXeTKGkc=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/to-object-path": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/to-object-path/-/to-object-path-0.3.0.tgz",
      "integrity": "sha1-KXWIt7Dn4KwI4E5nL4XB9JmeF68=",
      "dev": true,
      "dependencies": {
        "kind-of": "^3.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/to-readable-stream": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/to-readable-stream/-/to-readable-stream-1.0.0.tgz",
      "integrity": "sha512-Iq25XBt6zD5npPhlLVXGFN3/gyR2/qODcKNNyTMd4vbm39HUaOiAM4PMq0eMVC/Tkxz+Zjdsc55g9yyz+Yq00Q==",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/to-regex": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/to-regex/-/to-regex-3.0.2.tgz",
      "integrity": "sha512-FWtleNAtZ/Ki2qtqej2CXTOayOH9bHDQF+Q48VpWyDXjbYxA4Yz8iDB31zXOBUlOHHKidDbqGVrTUvQMPmBGBw==",
      "dev": true,
      "dependencies": {
        "define-property": "^2.0.2",
        "extend-shallow": "^3.0.2",
        "regex-not": "^1.0.2",
        "safe-regex": "^1.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/to-regex-range": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
      "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
      "dependencies": {
        "is-number": "^7.0.0"
      },
      "engines": {
        "node": ">=8.0"
      }
    },
    "node_modules/toidentifier": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.0.tgz",
      "integrity": "sha512-yaOH/Pk/VEhBWWTlhI+qXxDFXlejDGcQipMlyxda9nthulaxLZUNcUqFxokp0vcYnvteJln5FNQDRrxj3YcbVw==",
      "engines": {
        "node": ">=0.6"
      }
    },
    "node_modules/topo": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/topo/-/topo-3.0.3.tgz",
      "integrity": "sha512-IgpPtvD4kjrJ7CRA3ov2FhWQADwv+Tdqbsf1ZnPUSAtCJ9e1Z44MmoSGDXGk4IppoZA7jd/QRkNddlLJWlUZsQ==",
      "deprecated": "This module has moved and is now available at @hapi/topo. Please update your dependencies as this version is no longer maintained an may contain bugs and security issues.",
      "dependencies": {
        "hoek": "6.x.x"
      }
    },
    "node_modules/topo/node_modules/hoek": {
      "version": "6.1.3",
      "resolved": "https://registry.npmjs.org/hoek/-/hoek-6.1.3.tgz",
      "integrity": "sha512-YXXAAhmF9zpQbC7LEcREFtXfGq5K1fmd+4PHkBq8NUqmzW3G+Dq10bI/i0KucLRwss3YYFQ0fSfoxBZYiGUqtQ==",
      "deprecated": "This module has moved and is now available at @hapi/hoek. Please update your dependencies as this version is no longer maintained an may contain bugs and security issues."
    },
    "node_modules/touch": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/touch/-/touch-3.1.0.tgz",
      "integrity": "sha512-WBx8Uy5TLtOSRtIq+M03/sKDrXCLHxwDcquSP2c43Le03/9serjQBIztjRz6FkJez9D/hleyAXTBGLwwZUw9lA==",
      "dependencies": {
        "nopt": "~1.0.10"
      },
      "bin": {
        "nodetouch": "bin/nodetouch.js"
      }
    },
    "node_modules/tough-cookie": {
      "version": "2.5.0",
      "resolved": "https://registry.npmjs.org/tough-cookie/-/tough-cookie-2.5.0.tgz",
      "integrity": "sha512-nlLsUzgm1kfLXSXfRZMc1KLAugd4hqJHDTvc2hDIwS3mZAfMEuMbc03SujMF+GEcpaX/qboeycw6iO8JwVv2+g==",
      "dev": true,
      "dependencies": {
        "psl": "^1.1.28",
        "punycode": "^2.1.1"
      },
      "engines": {
        "node": ">=0.8"
      }
    },
    "node_modules/tr46": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/tr46/-/tr46-1.0.1.tgz",
      "integrity": "sha1-qLE/1r/SSJUZZ0zN5VujaTtwbQk=",
      "dev": true,
      "dependencies": {
        "punycode": "^2.1.0"
      }
    },
    "node_modules/trim-right": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/trim-right/-/trim-right-1.0.1.tgz",
      "integrity": "sha1-yy4SAwZ+DI3h9hQJS5/kVwTqYAM=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/triple-beam": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/triple-beam/-/triple-beam-1.3.0.tgz",
      "integrity": "sha512-XrHUvV5HpdLmIj4uVMxHggLbFSZYIn7HEWsqePZcI50pco+MPqJ50wMGY794X7AOOhxOBAjbkqfAbEe/QMp2Lw=="
    },
    "node_modules/tslib": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.3.0.tgz",
      "integrity": "sha512-N82ooyxVNm6h1riLCoyS9e3fuJ3AMG2zIZs2Gd1ATcSFjSA23Q0fzjjZeh0jbJvWVDZ0cJT8yaNNaaXHzueNjg=="
    },
    "node_modules/tunnel-agent": {
      "version": "0.6.0",
      "resolved": "https://registry.npmjs.org/tunnel-agent/-/tunnel-agent-0.6.0.tgz",
      "integrity": "sha1-J6XeoGs2sEoKmWZ3SykIaPD8QP0=",
      "dev": true,
      "dependencies": {
        "safe-buffer": "^5.0.1"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/tweetnacl": {
      "version": "0.14.5",
      "resolved": "https://registry.npmjs.org/tweetnacl/-/tweetnacl-0.14.5.tgz",
      "integrity": "sha1-WuaBd/GS1EViadEIr6k/+HQ/T2Q=",
      "dev": true
    },
    "node_modules/type-check": {
      "version": "0.3.2",
      "resolved": "https://registry.npmjs.org/type-check/-/type-check-0.3.2.tgz",
      "integrity": "sha1-WITKtRLPHTVeP7eE8wgEsrUg23I=",
      "dev": true,
      "dependencies": {
        "prelude-ls": "~1.1.2"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/type-fest": {
      "version": "0.8.1",
      "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.8.1.tgz",
      "integrity": "sha512-4dbzIzqvjtgiM5rw1k5rEHtBANKmdudhGyBEajN01fEyhaAIhsoKNy6y7+IN93IfpFtwY9iqi7kD+xwKhQsNJA==",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/type-is": {
      "version": "1.6.18",
      "resolved": "https://registry.npmjs.org/type-is/-/type-is-1.6.18.tgz",
      "integrity": "sha512-TkRKr9sUTxEH8MdfuCSP7VizJyzRNMjj2J2do2Jr3Kym598JVdEksuzPQCnlFPW4ky9Q+iA+ma9BGm06XQBy8g==",
      "dependencies": {
        "media-typer": "0.3.0",
        "mime-types": "~2.1.24"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/typedarray": {
      "version": "0.0.6",
      "resolved": "https://registry.npmjs.org/typedarray/-/typedarray-0.0.6.tgz",
      "integrity": "sha1-hnrHTjhkGHsdPUfZlqeOxciDB3c="
    },
    "node_modules/typedarray-to-buffer": {
      "version": "3.1.5",
      "resolved": "https://registry.npmjs.org/typedarray-to-buffer/-/typedarray-to-buffer-3.1.5.tgz",
      "integrity": "sha512-zdu8XMNEDepKKR+XYOXAVPtWui0ly0NtohUscw+UmaHiAWT8hrV1rr//H6V+0DvJ3OQ19S979M0laLfX8rm82Q==",
      "dependencies": {
        "is-typedarray": "^1.0.0"
      }
    },
    "node_modules/uglify-js": {
      "version": "3.13.9",
      "resolved": "https://registry.npmjs.org/uglify-js/-/uglify-js-3.13.9.tgz",
      "integrity": "sha512-wZbyTQ1w6Y7fHdt8sJnHfSIuWeDgk6B5rCb4E/AM6QNNPbOMIZph21PW5dRB3h7Df0GszN+t7RuUH6sWK5bF0g==",
      "dev": true,
      "optional": true,
      "bin": {
        "uglifyjs": "bin/uglifyjs"
      },
      "engines": {
        "node": ">=0.8.0"
      }
    },
    "node_modules/uid2": {
      "version": "0.0.3",
      "resolved": "https://registry.npmjs.org/uid2/-/uid2-0.0.3.tgz",
      "integrity": "sha1-SDEm4Rd03y9xuLY53NeZw3YWK4I="
    },
    "node_modules/unbox-primitive": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/unbox-primitive/-/unbox-primitive-1.0.1.tgz",
      "integrity": "sha512-tZU/3NqK3dA5gpE1KtyiJUrEB0lxnGkMFHptJ7q6ewdZ8s12QrODwNbhIJStmJkd1QDXa1NRA8aF2A1zk/Ypyw==",
      "dev": true,
      "dependencies": {
        "function-bind": "^1.1.1",
        "has-bigints": "^1.0.1",
        "has-symbols": "^1.0.2",
        "which-boxed-primitive": "^1.0.2"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/undefsafe": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/undefsafe/-/undefsafe-2.0.3.tgz",
      "integrity": "sha512-nrXZwwXrD/T/JXeygJqdCO6NZZ1L66HrxM/Z7mIq2oPanoN0F1nLx3lwJMu6AwJY69hdixaFQOuoYsMjE5/C2A==",
      "dependencies": {
        "debug": "^2.2.0"
      }
    },
    "node_modules/union-value": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/union-value/-/union-value-1.0.1.tgz",
      "integrity": "sha512-tJfXmxMeWYnczCVs7XAEvIV7ieppALdyepWMkHkwciRpZraG/xwT+s2JN8+pr1+8jCRf80FFzvr+MpQeeoF4Xg==",
      "dev": true,
      "dependencies": {
        "arr-union": "^3.1.0",
        "get-value": "^2.0.6",
        "is-extendable": "^0.1.1",
        "set-value": "^2.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/unique-string": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/unique-string/-/unique-string-2.0.0.tgz",
      "integrity": "sha512-uNaeirEPvpZWSgzwsPGtU2zVSTrn/8L5q/IexZmH0eH6SA73CmAA5U4GwORTxQAZs95TAXLNqeLoPPNO5gZfWg==",
      "dependencies": {
        "crypto-random-string": "^2.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/unpipe": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",
      "integrity": "sha1-sr9O6FFKrmFltIF4KdIbLvSZBOw=",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/unset-value": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/unset-value/-/unset-value-1.0.0.tgz",
      "integrity": "sha1-g3aHP30jNRef+x5vw6jtDfyKtVk=",
      "dev": true,
      "dependencies": {
        "has-value": "^0.3.1",
        "isobject": "^3.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/unset-value/node_modules/has-value": {
      "version": "0.3.1",
      "resolved": "https://registry.npmjs.org/has-value/-/has-value-0.3.1.tgz",
      "integrity": "sha1-ex9YutpiyoJ+wKIHgCVlSEWZXh8=",
      "dev": true,
      "dependencies": {
        "get-value": "^2.0.3",
        "has-values": "^0.1.4",
        "isobject": "^2.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/unset-value/node_modules/has-value/node_modules/isobject": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/isobject/-/isobject-2.1.0.tgz",
      "integrity": "sha1-8GVWEJaj8dou9GJy+BXIQNh+DIk=",
      "dev": true,
      "dependencies": {
        "isarray": "1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/unset-value/node_modules/has-values": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/has-values/-/has-values-0.1.4.tgz",
      "integrity": "sha1-bWHeldkd/Km5oCCJrThL/49it3E=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/unset-value/node_modules/isobject": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
      "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/update-notifier": {
      "version": "4.1.3",
      "resolved": "https://registry.npmjs.org/update-notifier/-/update-notifier-4.1.3.tgz",
      "integrity": "sha512-Yld6Z0RyCYGB6ckIjffGOSOmHXj1gMeE7aROz4MG+XMkmixBX4jUngrGXNYz7wPKBmtoD4MnBa2Anu7RSKht/A==",
      "dependencies": {
        "boxen": "^4.2.0",
        "chalk": "^3.0.0",
        "configstore": "^5.0.1",
        "has-yarn": "^2.1.0",
        "import-lazy": "^2.1.0",
        "is-ci": "^2.0.0",
        "is-installed-globally": "^0.3.1",
        "is-npm": "^4.0.0",
        "is-yarn-global": "^0.3.0",
        "latest-version": "^5.0.0",
        "pupa": "^2.0.1",
        "semver-diff": "^3.1.1",
        "xdg-basedir": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/yeoman/update-notifier?sponsor=1"
      }
    },
    "node_modules/uri-js": {
      "version": "4.4.1",
      "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.4.1.tgz",
      "integrity": "sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==",
      "dev": true,
      "dependencies": {
        "punycode": "^2.1.0"
      }
    },
    "node_modules/urix": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/urix/-/urix-0.1.0.tgz",
      "integrity": "sha1-2pN/emLiH+wf0Y1Js1wpNQZ6bHI=",
      "deprecated": "Please see https://github.com/lydell/urix#deprecated",
      "dev": true
    },
    "node_modules/url": {
      "version": "0.10.3",
      "resolved": "https://registry.npmjs.org/url/-/url-0.10.3.tgz",
      "integrity": "sha1-Ah5NnHcF8hu/N9A861h2dAJ3TGQ=",
      "dependencies": {
        "punycode": "1.3.2",
        "querystring": "0.2.0"
      }
    },
    "node_modules/url-parse-lax": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/url-parse-lax/-/url-parse-lax-3.0.0.tgz",
      "integrity": "sha1-FrXK/Afb42dsGxmZF3gj1lA6yww=",
      "dependencies": {
        "prepend-http": "^2.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/url/node_modules/punycode": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/punycode/-/punycode-1.3.2.tgz",
      "integrity": "sha1-llOgNvt8HuQjQvIyXM7v6jkmxI0="
    },
    "node_modules/url/node_modules/querystring": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/querystring/-/querystring-0.2.0.tgz",
      "integrity": "sha1-sgmEkgO7Jd+CDadW50cAWHhSFiA=",
      "deprecated": "The",
      "engines": {
        "node": ">=0.4.x"
      }
    },
    "node_modules/use": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/use/-/use-3.1.1.tgz",
      "integrity": "sha512-cwESVXlO3url9YWlFW/TA9cshCEhtu7IKJ/p5soJ/gGpj7vbvFrAY/eIioQ6Dw23KjZhYgiIo8HOs1nQ2vr/oQ==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/util-deprecate": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
      "integrity": "sha1-RQ1Nyfpw3nMnYvvS1KKJgUGaDM8="
    },
    "node_modules/util.promisify": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/util.promisify/-/util.promisify-1.1.1.tgz",
      "integrity": "sha512-/s3UsZUrIfa6xDhr7zZhnE9SLQ5RIXyYfiVnMMyMDzOc8WhWN4Nbh36H842OyurKbCDAesZOJaVyvmSl6fhGQw==",
      "dev": true,
      "dependencies": {
        "call-bind": "^1.0.0",
        "define-properties": "^1.1.3",
        "for-each": "^0.3.3",
        "has-symbols": "^1.0.1",
        "object.getownpropertydescriptors": "^2.1.1"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/utils-merge": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/utils-merge/-/utils-merge-1.0.1.tgz",
      "integrity": "sha1-n5VxD1CiZ5R7LMwSR0HBAoQn5xM=",
      "engines": {
        "node": ">= 0.4.0"
      }
    },
    "node_modules/uuid": {
      "version": "3.4.0",
      "resolved": "https://registry.npmjs.org/uuid/-/uuid-3.4.0.tgz",
      "integrity": "sha512-HjSDRw6gZE5JMggctHBcjVak08+KEVhSIiDzFnT9S9aegmp85S/bReBVTb4QTFaRNptJ9kuYaNhnbNEOkbKb/A==",
      "deprecated": "Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.",
      "dev": true,
      "bin": {
        "uuid": "bin/uuid"
      }
    },
    "node_modules/validate-npm-package-license": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/validate-npm-package-license/-/validate-npm-package-license-3.0.4.tgz",
      "integrity": "sha512-DpKm2Ui/xN7/HQKCtpZxoRWBhZ9Z0kqtygG8XCgNQ8ZlDnxuQmWhj566j8fN4Cu3/JmbhsDo7fcAJq4s9h27Ew==",
      "dev": true,
      "dependencies": {
        "spdx-correct": "^3.0.0",
        "spdx-expression-parse": "^3.0.0"
      }
    },
    "node_modules/vary": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",
      "integrity": "sha1-IpnwLG3tMNSllhsLn3RSShj2NPw=",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/verror": {
      "version": "1.10.0",
      "resolved": "https://registry.npmjs.org/verror/-/verror-1.10.0.tgz",
      "integrity": "sha1-OhBcoXBTr1XW4nDB+CiGguGNpAA=",
      "dev": true,
      "engines": [
        "node >=0.6.0"
      ],
      "dependencies": {
        "assert-plus": "^1.0.0",
        "core-util-is": "1.0.2",
        "extsprintf": "^1.2.0"
      }
    },
    "node_modules/w3c-hr-time": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/w3c-hr-time/-/w3c-hr-time-1.0.2.tgz",
      "integrity": "sha512-z8P5DvDNjKDoFIHK7q8r8lackT6l+jo/Ye3HOle7l9nICP9lf1Ci25fy9vHd0JOWewkIFzXIEig3TdKT7JQ5fQ==",
      "dev": true,
      "dependencies": {
        "browser-process-hrtime": "^1.0.0"
      }
    },
    "node_modules/walker": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/walker/-/walker-1.0.7.tgz",
      "integrity": "sha1-L3+bj9ENZ3JisYqITijRlhjgKPs=",
      "dev": true,
      "dependencies": {
        "makeerror": "1.0.x"
      }
    },
    "node_modules/watch": {
      "version": "0.18.0",
      "resolved": "https://registry.npmjs.org/watch/-/watch-0.18.0.tgz",
      "integrity": "sha1-KAlUdsbffJDJYxOJkMClQj60uYY=",
      "dev": true,
      "dependencies": {
        "exec-sh": "^0.2.0",
        "minimist": "^1.2.0"
      },
      "bin": {
        "watch": "cli.js"
      },
      "engines": {
        "node": ">=0.1.95"
      }
    },
    "node_modules/webidl-conversions": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-4.0.2.tgz",
      "integrity": "sha512-YQ+BmxuTgd6UXZW3+ICGfyqRyHXVlD5GtQr5+qjiNW7bF0cqrzX500HVXPBOvgXb5YnzDd+h0zqyv61KUD7+Sg==",
      "dev": true
    },
    "node_modules/whatwg-encoding": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/whatwg-encoding/-/whatwg-encoding-1.0.5.tgz",
      "integrity": "sha512-b5lim54JOPN9HtzvK9HFXvBma/rnfFeqsic0hSpjtDbVxR3dJKLc+KB4V6GgiGOvl7CY/KNh8rxSo9DKQrnUEw==",
      "dev": true,
      "dependencies": {
        "iconv-lite": "0.4.24"
      }
    },
    "node_modules/whatwg-mimetype": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/whatwg-mimetype/-/whatwg-mimetype-2.3.0.tgz",
      "integrity": "sha512-M4yMwr6mAnQz76TbJm914+gPpB/nCwvZbJU28cUD6dR004SAxDLOOSUaB1JDRqLtaOV/vi0IC5lEAGFgrjGv/g==",
      "dev": true
    },
    "node_modules/whatwg-url": {
      "version": "6.5.0",
      "resolved": "https://registry.npmjs.org/whatwg-url/-/whatwg-url-6.5.0.tgz",
      "integrity": "sha512-rhRZRqx/TLJQWUpQ6bmrt2UV4f0HCQ463yQuONJqC6fO2VoEb1pTYddbe59SkYq87aoM5A3bdhMZiUiVws+fzQ==",
      "dev": true,
      "dependencies": {
        "lodash.sortby": "^4.7.0",
        "tr46": "^1.0.1",
        "webidl-conversions": "^4.0.2"
      }
    },
    "node_modules/which": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/which/-/which-1.3.1.tgz",
      "integrity": "sha512-HxJdYWq1MTIQbJ3nw0cqssHoTNU267KlrDuGZ1WYlxDStUtKUhOaJmh112/TZmHxxUfuJqPXSOm7tDyas0OSIQ==",
      "dev": true,
      "dependencies": {
        "isexe": "^2.0.0"
      },
      "bin": {
        "which": "bin/which"
      }
    },
    "node_modules/which-boxed-primitive": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/which-boxed-primitive/-/which-boxed-primitive-1.0.2.tgz",
      "integrity": "sha512-bwZdv0AKLpplFY2KZRX6TvyuN7ojjr7lwkg6ml0roIy9YeuSr7JS372qlNW18UQYzgYK9ziGcerWqZOmEn9VNg==",
      "dev": true,
      "dependencies": {
        "is-bigint": "^1.0.1",
        "is-boolean-object": "^1.1.0",
        "is-number-object": "^1.0.4",
        "is-string": "^1.0.5",
        "is-symbol": "^1.0.3"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/which-module": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/which-module/-/which-module-2.0.0.tgz",
      "integrity": "sha1-2e8H3Od7mQK4o6j6SzHD4/fm6Ho=",
      "dev": true
    },
    "node_modules/wide-align": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/wide-align/-/wide-align-1.1.3.tgz",
      "integrity": "sha512-QGkOQc8XL6Bt5PwnsExKBPuMKBxnGxWWW3fU55Xt4feHozMUhdUMaBCk290qpm/wG5u/RSKzwdAC4i51YigihA==",
      "dependencies": {
        "string-width": "^1.0.2 || 2"
      }
    },
    "node_modules/wide-align/node_modules/ansi-regex": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-3.0.0.tgz",
      "integrity": "sha1-7QMXwyIGT3lGbAKWa922Bas32Zg=",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/wide-align/node_modules/string-width": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-2.1.1.tgz",
      "integrity": "sha512-nOqH59deCq9SRHlxq1Aw85Jnt4w6KvLKqWVik6oA9ZklXLNIOlqg4F2yrT1MVaTjAqvVwdfeZ7w7aCvJD7ugkw==",
      "dependencies": {
        "is-fullwidth-code-point": "^2.0.0",
        "strip-ansi": "^4.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/wide-align/node_modules/strip-ansi": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-4.0.0.tgz",
      "integrity": "sha1-qEeQIusaw2iocTibY1JixQXuNo8=",
      "dependencies": {
        "ansi-regex": "^3.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/widest-line": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/widest-line/-/widest-line-3.1.0.tgz",
      "integrity": "sha512-NsmoXalsWVDMGupxZ5R08ka9flZjjiLvHVAWYOKtiKM8ujtZWr9cRffak+uSE48+Ob8ObalXpwyeUiyDD6QFgg==",
      "dependencies": {
        "string-width": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/winston": {
      "version": "3.3.3",
      "resolved": "https://registry.npmjs.org/winston/-/winston-3.3.3.tgz",
      "integrity": "sha512-oEXTISQnC8VlSAKf1KYSSd7J6IWuRPQqDdo8eoRNaYKLvwSb5+79Z3Yi1lrl6KDpU6/VWaxpakDAtb1oQ4n9aw==",
      "dependencies": {
        "@dabh/diagnostics": "^2.0.2",
        "async": "^3.1.0",
        "is-stream": "^2.0.0",
        "logform": "^2.2.0",
        "one-time": "^1.0.0",
        "readable-stream": "^3.4.0",
        "stack-trace": "0.0.x",
        "triple-beam": "^1.3.0",
        "winston-transport": "^4.4.0"
      },
      "engines": {
        "node": ">= 6.4.0"
      }
    },
    "node_modules/winston-mongodb": {
      "version": "5.0.7",
      "resolved": "https://registry.npmjs.org/winston-mongodb/-/winston-mongodb-5.0.7.tgz",
      "integrity": "sha512-6uUdd7IPfzKMth1vbO6zPyLQzn57CTNXbyjZmdD9UgBlY19BliFnYcK7+Aopo0GHIsWDo7xlerpj3x/ZULDIpg==",
      "dependencies": {
        "mongodb": "^3.6.2",
        "winston-transport": "^4.4.0"
      },
      "engines": {
        "node": ">=6.8.1"
      },
      "peerDependencies": {
        "winston": "^3.0.0"
      }
    },
    "node_modules/winston-transport": {
      "version": "4.4.0",
      "resolved": "https://registry.npmjs.org/winston-transport/-/winston-transport-4.4.0.tgz",
      "integrity": "sha512-Lc7/p3GtqtqPBYYtS6KCN3c77/2QCev51DvcJKbkFPQNoj1sinkGwLGFDxkXY9J6p9+EPnYs+D90uwbnaiURTw==",
      "dependencies": {
        "readable-stream": "^2.3.7",
        "triple-beam": "^1.2.0"
      },
      "engines": {
        "node": ">= 6.4.0"
      }
    },
    "node_modules/winston/node_modules/async": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/async/-/async-3.2.0.tgz",
      "integrity": "sha512-TR2mEZFVOj2pLStYxLht7TyfuRzaydfpxr3k9RpHIzMgw7A64dzsdqCxH1WJyQdoe8T10nDXd9wnEigmiuHIZw=="
    },
    "node_modules/winston/node_modules/readable-stream": {
      "version": "3.6.0",
      "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.0.tgz",
      "integrity": "sha512-BViHy7LKeTz4oNnkcLJ+lVSL6vpiFeX6/d3oSH8zCW7UxP2onchk+vTGB143xuFjHS3deTgkKoXXymXqymiIdA==",
      "dependencies": {
        "inherits": "^2.0.3",
        "string_decoder": "^1.1.1",
        "util-deprecate": "^1.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/word-wrap": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/word-wrap/-/word-wrap-1.2.3.tgz",
      "integrity": "sha512-Hz/mrNwitNRh/HUAtM/VT/5VH+ygD6DV7mYKZAtHOrbs8U7lvPS6xf7EJKMF0uW1KJCl0H701g3ZGus+muE5vQ==",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/wordwrap": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/wordwrap/-/wordwrap-1.0.0.tgz",
      "integrity": "sha1-J1hIEIkUVqQXHI0CJkQa3pDLyus=",
      "dev": true
    },
    "node_modules/wrap-ansi": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-2.1.0.tgz",
      "integrity": "sha1-2Pw9KE3QV5T+hJc8rs3Rz4JP3YU=",
      "dev": true,
      "dependencies": {
        "string-width": "^1.0.1",
        "strip-ansi": "^3.0.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/wrap-ansi/node_modules/ansi-regex": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz",
      "integrity": "sha1-w7M6te42DYbg5ijwRorn7yfWVN8=",
      "dev": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/wrap-ansi/node_modules/is-fullwidth-code-point": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-1.0.0.tgz",
      "integrity": "sha1-754xOG8DGn8NZDr4L95QxFfvAMs=",
      "dev": true,
      "dependencies": {
        "number-is-nan": "^1.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/wrap-ansi/node_modules/string-width": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-1.0.2.tgz",
      "integrity": "sha1-EYvfW4zcUaKn5w0hHgfisLmxB9M=",
      "dev": true,
      "dependencies": {
        "code-point-at": "^1.0.0",
        "is-fullwidth-code-point": "^1.0.0",
        "strip-ansi": "^3.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/wrap-ansi/node_modules/strip-ansi": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-3.0.1.tgz",
      "integrity": "sha1-ajhfuIU9lS1f8F0Oiq+UJ43GPc8=",
      "dev": true,
      "dependencies": {
        "ansi-regex": "^2.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/wrappy": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
      "integrity": "sha1-tSQ9jz7BqjXxNkYFvA0QNuMKtp8="
    },
    "node_modules/write-file-atomic": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/write-file-atomic/-/write-file-atomic-3.0.3.tgz",
      "integrity": "sha512-AvHcyZ5JnSfq3ioSyjrBkH9yW4m7Ayk8/9My/DD9onKeu/94fwrMocemO2QAJFAlnnDN+ZDS+ZjAR5ua1/PV/Q==",
      "dependencies": {
        "imurmurhash": "^0.1.4",
        "is-typedarray": "^1.0.0",
        "signal-exit": "^3.0.2",
        "typedarray-to-buffer": "^3.1.5"
      }
    },
    "node_modules/ws": {
      "version": "5.2.2",
      "resolved": "https://registry.npmjs.org/ws/-/ws-5.2.2.tgz",
      "integrity": "sha512-jaHFD6PFv6UgoIVda6qZllptQsMlDEJkTQcybzzXDYM1XO9Y8em691FGMPmM46WGyLU4z9KMgQN+qrux/nhlHA==",
      "dev": true,
      "dependencies": {
        "async-limiter": "~1.0.0"
      }
    },
    "node_modules/xdg-basedir": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/xdg-basedir/-/xdg-basedir-4.0.0.tgz",
      "integrity": "sha512-PSNhEJDejZYV7h50BohL09Er9VaIefr2LMAf3OEmpCkjOi34eYyQYAXUTjEQtZJTKcF0E2UKTh+osDLsgNim9Q==",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/xml-name-validator": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/xml-name-validator/-/xml-name-validator-3.0.0.tgz",
      "integrity": "sha512-A5CUptxDsvxKJEU3yO6DuWBSJz/qizqzJKOMIfUJHETbBw/sFaDxgd6fxm1ewUaM0jZ444Fc5vC5ROYurg/4Pw==",
      "dev": true
    },
    "node_modules/xml2js": {
      "version": "0.4.19",
      "resolved": "https://registry.npmjs.org/xml2js/-/xml2js-0.4.19.tgz",
      "integrity": "sha512-esZnJZJOiJR9wWKMyuvSE1y6Dq5LCuJanqhxslH2bxM6duahNZ+HMpCLhBQGZkbX6xRf8x1Y2eJlgt2q3qo49Q==",
      "dependencies": {
        "sax": ">=0.6.0",
        "xmlbuilder": "~9.0.1"
      }
    },
    "node_modules/xmlbuilder": {
      "version": "9.0.7",
      "resolved": "https://registry.npmjs.org/xmlbuilder/-/xmlbuilder-9.0.7.tgz",
      "integrity": "sha1-Ey7mPS7FVlxVfiD0wi35rKaGsQ0=",
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/xtend": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/xtend/-/xtend-4.0.2.tgz",
      "integrity": "sha512-LKYU1iAXJXUgAXn9URjiu+MWhyUXHsvfp7mcuYm9dSUKK0/CjtrUwFAxD82/mCWbtLsGjFIad0wIsod4zrTAEQ==",
      "engines": {
        "node": ">=0.4"
      }
    },
    "node_modules/y18n": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/y18n/-/y18n-3.2.2.tgz",
      "integrity": "sha512-uGZHXkHnhF0XeeAPgnKfPv1bgKAYyVvmNL1xlKsPYZPaIHxGti2hHqvOCQv71XMsLxu1QjergkqogUnms5D3YQ==",
      "dev": true
    },
    "node_modules/yallist": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-4.0.0.tgz",
      "integrity": "sha512-3wdGidZyq5PB084XLES5TpOSRA3wjXAlIWMhum2kRcv/41Sn2emQ0dycQW4uZXLejwKvg6EsvbdlVL+FYEct7A=="
    },
    "node_modules/yargs": {
      "version": "10.1.2",
      "resolved": "https://registry.npmjs.org/yargs/-/yargs-10.1.2.tgz",
      "integrity": "sha512-ivSoxqBGYOqQVruxD35+EyCFDYNEFL/Uo6FcOnz+9xZdZzK0Zzw4r4KhbrME1Oo2gOggwJod2MnsdamSG7H9ig==",
      "dev": true,
      "dependencies": {
        "cliui": "^4.0.0",
        "decamelize": "^1.1.1",
        "find-up": "^2.1.0",
        "get-caller-file": "^1.0.1",
        "os-locale": "^2.0.0",
        "require-directory": "^2.1.1",
        "require-main-filename": "^1.0.1",
        "set-blocking": "^2.0.0",
        "string-width": "^2.0.0",
        "which-module": "^2.0.0",
        "y18n": "^3.2.1",
        "yargs-parser": "^8.1.0"
      }
    },
    "node_modules/yargs-parser": {
      "version": "8.1.0",
      "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-8.1.0.tgz",
      "integrity": "sha512-yP+6QqN8BmrgW2ggLtTbdrOyBNSI7zBa4IykmiV5R1wl1JWNxQvWhMfMdmzIYtKU7oP3OOInY/tl2ov3BDjnJQ==",
      "dev": true,
      "dependencies": {
        "camelcase": "^4.1.0"
      }
    },
    "node_modules/yargs-parser/node_modules/camelcase": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-4.1.0.tgz",
      "integrity": "sha1-1UVjW+HjPFQmScaRc+Xeas+uNN0=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/yargs/node_modules/ansi-regex": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-3.0.0.tgz",
      "integrity": "sha1-7QMXwyIGT3lGbAKWa922Bas32Zg=",
      "dev": true,
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/yargs/node_modules/string-width": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-2.1.1.tgz",
      "integrity": "sha512-nOqH59deCq9SRHlxq1Aw85Jnt4w6KvLKqWVik6oA9ZklXLNIOlqg4F2yrT1MVaTjAqvVwdfeZ7w7aCvJD7ugkw==",
      "dev": true,
      "dependencies": {
        "is-fullwidth-code-point": "^2.0.0",
        "strip-ansi": "^4.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/yargs/node_modules/strip-ansi": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-4.0.0.tgz",
      "integrity": "sha1-qEeQIusaw2iocTibY1JixQXuNo8=",
      "dev": true,
      "dependencies": {
        "ansi-regex": "^3.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    }
  },
  "dependencies": {
    "@aws-crypto/crc32": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/@aws-crypto/crc32/-/crc32-1.0.0.tgz",
      "integrity": "sha512-wr4EyCv3ZfLH3Sg7FErV6e/cLhpk9rUP/l5322y8PRgpQsItdieaLbtE4aDOR+dxl8U7BG9FIwWXH4TleTDZ9A==",
      "requires": {
        "tslib": "^1.11.1"
      },
      "dependencies": {
        "tslib": {
          "version": "1.14.1",
          "resolved": "https://registry.npmjs.org/tslib/-/tslib-1.14.1.tgz",
          "integrity": "sha512-Xni35NKzjgMrwevysHTCArtLDpPvye8zV/0E4EyYn43P7/7qvQwPh9BGkHewbMulVntbigmcT7rdX3BNo9wRJg=="
        }
      }
    },
    "@aws-crypto/ie11-detection": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/@aws-crypto/ie11-detection/-/ie11-detection-1.0.0.tgz",
      "integrity": "sha512-kCKVhCF1oDxFYgQrxXmIrS5oaWulkvRcPz+QBDMsUr2crbF4VGgGT6+uQhSwJFdUAQ2A//Vq+uT83eJrkzFgXA==",
      "requires": {
        "tslib": "^1.11.1"
      },
      "dependencies": {
        "tslib": {
          "version": "1.14.1",
          "resolved": "https://registry.npmjs.org/tslib/-/tslib-1.14.1.tgz",
          "integrity": "sha512-Xni35NKzjgMrwevysHTCArtLDpPvye8zV/0E4EyYn43P7/7qvQwPh9BGkHewbMulVntbigmcT7rdX3BNo9wRJg=="
        }
      }
    },
    "@aws-crypto/sha256-browser": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@aws-crypto/sha256-browser/-/sha256-browser-1.1.0.tgz",
      "integrity": "sha512-VIpuLRDonMAHgomrsm/zKbeXTnxpr4aHDQmS4pF+NcpvBp64l675yjGA9hyUYs/QJwBjUl8WqMjh9tIRgi85Sg==",
      "requires": {
        "@aws-crypto/ie11-detection": "^1.0.0",
        "@aws-crypto/sha256-js": "^1.1.0",
        "@aws-crypto/supports-web-crypto": "^1.0.0",
        "@aws-sdk/types": "^3.1.0",
        "@aws-sdk/util-locate-window": "^3.0.0",
        "@aws-sdk/util-utf8-browser": "^3.0.0",
        "tslib": "^1.11.1"
      },
      "dependencies": {
        "tslib": {
          "version": "1.14.1",
          "resolved": "https://registry.npmjs.org/tslib/-/tslib-1.14.1.tgz",
          "integrity": "sha512-Xni35NKzjgMrwevysHTCArtLDpPvye8zV/0E4EyYn43P7/7qvQwPh9BGkHewbMulVntbigmcT7rdX3BNo9wRJg=="
        }
      }
    },
    "@aws-crypto/sha256-js": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@aws-crypto/sha256-js/-/sha256-js-1.1.0.tgz",
      "integrity": "sha512-VIhuqbPgXDVr8sZe2yhgQcDRRmzf4CI8fmC1A3bHiRfE6wlz1d8KpeemqbuoEHotz/Dch9yOxlshyQDNjNFeHA==",
      "requires": {
        "@aws-sdk/types": "^3.1.0",
        "@aws-sdk/util-utf8-browser": "^3.0.0",
        "tslib": "^1.11.1"
      },
      "dependencies": {
        "tslib": {
          "version": "1.14.1",
          "resolved": "https://registry.npmjs.org/tslib/-/tslib-1.14.1.tgz",
          "integrity": "sha512-Xni35NKzjgMrwevysHTCArtLDpPvye8zV/0E4EyYn43P7/7qvQwPh9BGkHewbMulVntbigmcT7rdX3BNo9wRJg=="
        }
      }
    },
    "@aws-crypto/supports-web-crypto": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/@aws-crypto/supports-web-crypto/-/supports-web-crypto-1.0.0.tgz",
      "integrity": "sha512-IHLfv+WmVH89EW4n6a5eE8/hUlz6qkWGMn/v4r5ZgzcXdTC5nolii2z3k46y01hWRiC2PPhOdeSLzMUCUMco7g==",
      "requires": {
        "tslib": "^1.11.1"
      },
      "dependencies": {
        "tslib": {
          "version": "1.14.1",
          "resolved": "https://registry.npmjs.org/tslib/-/tslib-1.14.1.tgz",
          "integrity": "sha512-Xni35NKzjgMrwevysHTCArtLDpPvye8zV/0E4EyYn43P7/7qvQwPh9BGkHewbMulVntbigmcT7rdX3BNo9wRJg=="
        }
      }
    },
    "@aws-sdk/abort-controller": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/abort-controller/-/abort-controller-3.20.0.tgz",
      "integrity": "sha512-DnJbLzICjB6NyZXFi5wv1m9Rd/+8GN+aeti76rFEunykG+O0+GQcqOxC/lH58MkLBjaLrQhGhC2H1/L4Z75TPw==",
      "requires": {
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      }
    },
    "@aws-sdk/chunked-blob-reader": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/chunked-blob-reader/-/chunked-blob-reader-3.20.0.tgz",
      "integrity": "sha512-fNXUt3rZsQyJhUR0yMog+lNqyMqyh0BzwEz67jW4sC7ExSnchRzwKo9C4XBXm1JMeBALaI5hY7Axwf1pE0ANzQ==",
      "requires": {
        "tslib": "^2.0.0"
      }
    },
    "@aws-sdk/chunked-blob-reader-native": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/chunked-blob-reader-native/-/chunked-blob-reader-native-3.20.0.tgz",
      "integrity": "sha512-GeN6rWJw8Z7iZLu6XTrkGGspmxwF8c3jR2HM2UdGlia0XR6AUaa1b1bdz1ACmVA1iG0sVA3YvnPy6LgsQaraGg==",
      "requires": {
        "@aws-sdk/util-base64-browser": "3.20.0",
        "tslib": "^2.0.0"
      }
    },
    "@aws-sdk/client-s3": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/client-s3/-/client-s3-3.20.0.tgz",
      "integrity": "sha512-ueyIICBi8i57KOfKk0mRNk0HV6wOgcj5p7TodrjuMJP0JAqxNG0NVsHSvowhb/8LPrDKTSlK0pikBn7niJv1GQ==",
      "requires": {
        "@aws-crypto/sha256-browser": "^1.0.0",
        "@aws-crypto/sha256-js": "^1.0.0",
        "@aws-sdk/client-sts": "3.20.0",
        "@aws-sdk/config-resolver": "3.20.0",
        "@aws-sdk/credential-provider-node": "3.20.0",
        "@aws-sdk/eventstream-serde-browser": "3.20.0",
        "@aws-sdk/eventstream-serde-config-resolver": "3.20.0",
        "@aws-sdk/eventstream-serde-node": "3.20.0",
        "@aws-sdk/fetch-http-handler": "3.20.0",
        "@aws-sdk/hash-blob-browser": "3.20.0",
        "@aws-sdk/hash-node": "3.20.0",
        "@aws-sdk/hash-stream-node": "3.20.0",
        "@aws-sdk/invalid-dependency": "3.20.0",
        "@aws-sdk/md5-js": "3.20.0",
        "@aws-sdk/middleware-apply-body-checksum": "3.20.0",
        "@aws-sdk/middleware-bucket-endpoint": "3.20.0",
        "@aws-sdk/middleware-content-length": "3.20.0",
        "@aws-sdk/middleware-expect-continue": "3.20.0",
        "@aws-sdk/middleware-host-header": "3.20.0",
        "@aws-sdk/middleware-location-constraint": "3.20.0",
        "@aws-sdk/middleware-logger": "3.20.0",
        "@aws-sdk/middleware-retry": "3.20.0",
        "@aws-sdk/middleware-sdk-s3": "3.20.0",
        "@aws-sdk/middleware-serde": "3.20.0",
        "@aws-sdk/middleware-signing": "3.20.0",
        "@aws-sdk/middleware-ssec": "3.20.0",
        "@aws-sdk/middleware-stack": "3.20.0",
        "@aws-sdk/middleware-user-agent": "3.20.0",
        "@aws-sdk/node-config-provider": "3.20.0",
        "@aws-sdk/node-http-handler": "3.20.0",
        "@aws-sdk/protocol-http": "3.20.0",
        "@aws-sdk/smithy-client": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "@aws-sdk/url-parser": "3.20.0",
        "@aws-sdk/util-base64-browser": "3.20.0",
        "@aws-sdk/util-base64-node": "3.20.0",
        "@aws-sdk/util-body-length-browser": "3.20.0",
        "@aws-sdk/util-body-length-node": "3.20.0",
        "@aws-sdk/util-user-agent-browser": "3.20.0",
        "@aws-sdk/util-user-agent-node": "3.20.0",
        "@aws-sdk/util-utf8-browser": "3.20.0",
        "@aws-sdk/util-utf8-node": "3.20.0",
        "@aws-sdk/util-waiter": "3.20.0",
        "@aws-sdk/xml-builder": "3.20.0",
        "entities": "2.2.0",
        "fast-xml-parser": "3.19.0",
        "tslib": "^2.0.0"
      }
    },
    "@aws-sdk/client-sso": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/client-sso/-/client-sso-3.20.0.tgz",
      "integrity": "sha512-pqLzjj9QIcsllFzakpZU8iPD38zkmfPq7EyLRLWwrR8GhRo+mBvmyG5D3rRDqmkR6G869OBa/hZngg9HmSfHDw==",
      "requires": {
        "@aws-crypto/sha256-browser": "^1.0.0",
        "@aws-crypto/sha256-js": "^1.0.0",
        "@aws-sdk/config-resolver": "3.20.0",
        "@aws-sdk/fetch-http-handler": "3.20.0",
        "@aws-sdk/hash-node": "3.20.0",
        "@aws-sdk/invalid-dependency": "3.20.0",
        "@aws-sdk/middleware-content-length": "3.20.0",
        "@aws-sdk/middleware-host-header": "3.20.0",
        "@aws-sdk/middleware-logger": "3.20.0",
        "@aws-sdk/middleware-retry": "3.20.0",
        "@aws-sdk/middleware-serde": "3.20.0",
        "@aws-sdk/middleware-stack": "3.20.0",
        "@aws-sdk/middleware-user-agent": "3.20.0",
        "@aws-sdk/node-config-provider": "3.20.0",
        "@aws-sdk/node-http-handler": "3.20.0",
        "@aws-sdk/protocol-http": "3.20.0",
        "@aws-sdk/smithy-client": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "@aws-sdk/url-parser": "3.20.0",
        "@aws-sdk/util-base64-browser": "3.20.0",
        "@aws-sdk/util-base64-node": "3.20.0",
        "@aws-sdk/util-body-length-browser": "3.20.0",
        "@aws-sdk/util-body-length-node": "3.20.0",
        "@aws-sdk/util-user-agent-browser": "3.20.0",
        "@aws-sdk/util-user-agent-node": "3.20.0",
        "@aws-sdk/util-utf8-browser": "3.20.0",
        "@aws-sdk/util-utf8-node": "3.20.0",
        "tslib": "^2.0.0"
      }
    },
    "@aws-sdk/client-sts": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/client-sts/-/client-sts-3.20.0.tgz",
      "integrity": "sha512-Do3cg1p0c68mIAypDjLKJX12TQjWyM82Zh5XUbMFlYpQu4zKGkpG29nVSRXlBkCpHFS1T7WJUgqQjW36Xln6mg==",
      "requires": {
        "@aws-crypto/sha256-browser": "^1.0.0",
        "@aws-crypto/sha256-js": "^1.0.0",
        "@aws-sdk/config-resolver": "3.20.0",
        "@aws-sdk/credential-provider-node": "3.20.0",
        "@aws-sdk/fetch-http-handler": "3.20.0",
        "@aws-sdk/hash-node": "3.20.0",
        "@aws-sdk/invalid-dependency": "3.20.0",
        "@aws-sdk/middleware-content-length": "3.20.0",
        "@aws-sdk/middleware-host-header": "3.20.0",
        "@aws-sdk/middleware-logger": "3.20.0",
        "@aws-sdk/middleware-retry": "3.20.0",
        "@aws-sdk/middleware-sdk-sts": "3.20.0",
        "@aws-sdk/middleware-serde": "3.20.0",
        "@aws-sdk/middleware-signing": "3.20.0",
        "@aws-sdk/middleware-stack": "3.20.0",
        "@aws-sdk/middleware-user-agent": "3.20.0",
        "@aws-sdk/node-config-provider": "3.20.0",
        "@aws-sdk/node-http-handler": "3.20.0",
        "@aws-sdk/protocol-http": "3.20.0",
        "@aws-sdk/smithy-client": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "@aws-sdk/url-parser": "3.20.0",
        "@aws-sdk/util-base64-browser": "3.20.0",
        "@aws-sdk/util-base64-node": "3.20.0",
        "@aws-sdk/util-body-length-browser": "3.20.0",
        "@aws-sdk/util-body-length-node": "3.20.0",
        "@aws-sdk/util-user-agent-browser": "3.20.0",
        "@aws-sdk/util-user-agent-node": "3.20.0",
        "@aws-sdk/util-utf8-browser": "3.20.0",
        "@aws-sdk/util-utf8-node": "3.20.0",
        "entities": "2.2.0",
        "fast-xml-parser": "3.19.0",
        "tslib": "^2.0.0"
      }
    },
    "@aws-sdk/config-resolver": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/config-resolver/-/config-resolver-3.20.0.tgz",
      "integrity": "sha512-mOq2RZIQHdZJxHWeNT0u3ulaWHAXr4NHuB/TBW66dJ8rRr5OlumnPHqbVb7x4qRbJqpzWvc1dj4RGR1x9NcIJA==",
      "requires": {
        "@aws-sdk/signature-v4": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      }
    },
    "@aws-sdk/credential-provider-env": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/credential-provider-env/-/credential-provider-env-3.20.0.tgz",
      "integrity": "sha512-6jSgVUw3eZfU8ufCsCeJf5k+AJVDdKobK9Hkg0nTA07zOObo/xElri8a3XmjYj5iVuAcK/ErP5SXEEB3h/fjrQ==",
      "requires": {
        "@aws-sdk/property-provider": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      }
    },
    "@aws-sdk/credential-provider-imds": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/credential-provider-imds/-/credential-provider-imds-3.20.0.tgz",
      "integrity": "sha512-l2R3HSwSb3Pm4jwMo0YWcbbapoK2/gBgb4h68JcsNXBI2yTthU41vioTNdMoWWlyCR0ii6QX3IUnB4NJY7RlLQ==",
      "requires": {
        "@aws-sdk/property-provider": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      }
    },
    "@aws-sdk/credential-provider-ini": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/credential-provider-ini/-/credential-provider-ini-3.20.0.tgz",
      "integrity": "sha512-03HAQq9iP5YW+XnRw59LCPov0v9J7yovYIinmOGDiUaqNJl1aoizoryVqt5cLwZNjF+Xdxh2+41rP/u+agSfwA==",
      "requires": {
        "@aws-sdk/credential-provider-env": "3.20.0",
        "@aws-sdk/credential-provider-imds": "3.20.0",
        "@aws-sdk/credential-provider-web-identity": "3.20.0",
        "@aws-sdk/property-provider": "3.20.0",
        "@aws-sdk/shared-ini-file-loader": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      }
    },
    "@aws-sdk/credential-provider-node": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/credential-provider-node/-/credential-provider-node-3.20.0.tgz",
      "integrity": "sha512-Pbcr0YYUQ8Y/o8xjHTF/TxnHEft+3FMqlN5WMTvA4yCQJowDKzcsAXp8m/FpHo55I0oC02PfVWHSAHZ86PmohQ==",
      "requires": {
        "@aws-sdk/credential-provider-env": "3.20.0",
        "@aws-sdk/credential-provider-imds": "3.20.0",
        "@aws-sdk/credential-provider-ini": "3.20.0",
        "@aws-sdk/credential-provider-process": "3.20.0",
        "@aws-sdk/credential-provider-sso": "3.20.0",
        "@aws-sdk/credential-provider-web-identity": "3.20.0",
        "@aws-sdk/property-provider": "3.20.0",
        "@aws-sdk/shared-ini-file-loader": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      }
    },
    "@aws-sdk/credential-provider-process": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/credential-provider-process/-/credential-provider-process-3.20.0.tgz",
      "integrity": "sha512-GV6XCR5/tKgJVKyMhplsCh8vo5GhKBkmvB2HNZYBE0KQzh7Km8+raYQlzcfow++CZKddHN0PPuIfL94C0hpdtw==",
      "requires": {
        "@aws-sdk/credential-provider-ini": "3.20.0",
        "@aws-sdk/property-provider": "3.20.0",
        "@aws-sdk/shared-ini-file-loader": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      }
    },
    "@aws-sdk/credential-provider-sso": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/credential-provider-sso/-/credential-provider-sso-3.20.0.tgz",
      "integrity": "sha512-EJ+QiB+OXftY3fNNaFO8vaJm/Xe6x15iyl7W9qaUrPzifIBzFjkOQb4uhCM83S6OS/icWXZeMjbgsrGIqrtMHA==",
      "requires": {
        "@aws-sdk/client-sso": "3.20.0",
        "@aws-sdk/credential-provider-ini": "3.20.0",
        "@aws-sdk/property-provider": "3.20.0",
        "@aws-sdk/shared-ini-file-loader": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      }
    },
    "@aws-sdk/credential-provider-web-identity": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/credential-provider-web-identity/-/credential-provider-web-identity-3.20.0.tgz",
      "integrity": "sha512-JJ1RQW5byI7FWSZOhWkTsrcs1wPdC6uG5JERQmcdPXOx9jCpBo8gETwYjlKxls/MbE+NSLCq5pQQKJs7Yz6K5g==",
      "requires": {
        "@aws-sdk/property-provider": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      }
    },
    "@aws-sdk/eventstream-marshaller": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/eventstream-marshaller/-/eventstream-marshaller-3.20.0.tgz",
      "integrity": "sha512-2Yw7u/YO4XFPiXnADxNGM6bU2qqP1ZTv7vfiCtykqLYZwVElPSVPjbXdEykLwb4vPVsZvInD+6z1P5qzF9m8TQ==",
      "requires": {
        "@aws-crypto/crc32": "^1.0.0",
        "@aws-sdk/types": "3.20.0",
        "@aws-sdk/util-hex-encoding": "3.20.0",
        "tslib": "^2.0.0"
      }
    },
    "@aws-sdk/eventstream-serde-browser": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/eventstream-serde-browser/-/eventstream-serde-browser-3.20.0.tgz",
      "integrity": "sha512-Zvi6ItVaxRDKfe+U6stYhxnljoY0NTm6Mq+8/KeERrSO304f9ldXuvszSVaoeM4b7BXq1Qd3swr5VZocEEa0rw==",
      "requires": {
        "@aws-sdk/eventstream-marshaller": "3.20.0",
        "@aws-sdk/eventstream-serde-universal": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      }
    },
    "@aws-sdk/eventstream-serde-config-resolver": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/eventstream-serde-config-resolver/-/eventstream-serde-config-resolver-3.20.0.tgz",
      "integrity": "sha512-LOCaAvhGclqpiUlNO6ZcShqqENnbTjLnR4x3PYDsud5rc8x5RF0159InwxOURoSvN05XDpgHDnOmfFQaiTlMcQ==",
      "requires": {
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      }
    },
    "@aws-sdk/eventstream-serde-node": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/eventstream-serde-node/-/eventstream-serde-node-3.20.0.tgz",
      "integrity": "sha512-xPIUpVpVB4pCy9w3J/p2nDcBD04K00dsGzbQFamO38k+EPCsqdgdneUY/dl4aKeVC9B5gotOOf7iDQYLlIm2xA==",
      "requires": {
        "@aws-sdk/eventstream-marshaller": "3.20.0",
        "@aws-sdk/eventstream-serde-universal": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      }
    },
    "@aws-sdk/eventstream-serde-universal": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/eventstream-serde-universal/-/eventstream-serde-universal-3.20.0.tgz",
      "integrity": "sha512-fLc6lG2migDkTVqRt52xfHcQkLxCFLzQNEA9/+8lf06AyGJP6aMU9erTjg1xhaM3+dnVgHiwayv3UK75FnpnnA==",
      "requires": {
        "@aws-sdk/eventstream-marshaller": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      }
    },
    "@aws-sdk/fetch-http-handler": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/fetch-http-handler/-/fetch-http-handler-3.20.0.tgz",
      "integrity": "sha512-VWCalEondhOsd5inE9W+p8jNVQAwgxR/k8yZys8ZuAQERhCKJcimgu7j9t5ruoGprmqnGcFmyFqZynxBZj6Urw==",
      "requires": {
        "@aws-sdk/protocol-http": "3.20.0",
        "@aws-sdk/querystring-builder": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "@aws-sdk/util-base64-browser": "3.20.0",
        "tslib": "^2.0.0"
      }
    },
    "@aws-sdk/hash-blob-browser": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/hash-blob-browser/-/hash-blob-browser-3.20.0.tgz",
      "integrity": "sha512-d2TnhlaBrSzGS8h20Q5goTHcczD9se9xX45D09hQ0M6I6LUbwuDt3K0oNGgteUbl2V3yRLAQY3lMH4vX8uXpIA==",
      "requires": {
        "@aws-sdk/chunked-blob-reader": "3.20.0",
        "@aws-sdk/chunked-blob-reader-native": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      }
    },
    "@aws-sdk/hash-node": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/hash-node/-/hash-node-3.20.0.tgz",
      "integrity": "sha512-PMRbrgkvXzWhmY2w/+rXG76tgCEB4+m7CM+OrXtbOdwwG6hyxPgdbvGwOLzbZXo4uxCcjQGpOUZTV54rW2rqgQ==",
      "requires": {
        "@aws-sdk/types": "3.20.0",
        "@aws-sdk/util-buffer-from": "3.20.0",
        "tslib": "^2.0.0"
      }
    },
    "@aws-sdk/hash-stream-node": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/hash-stream-node/-/hash-stream-node-3.20.0.tgz",
      "integrity": "sha512-FsXotjWaLTIkLBSS5EEYaFpdPjwVQuH9FavOVRES2hKJPmFOmNyvGP40hBRXOjwGAWCIYDPWFI2oAfzUb0HhlQ==",
      "requires": {
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      }
    },
    "@aws-sdk/invalid-dependency": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/invalid-dependency/-/invalid-dependency-3.20.0.tgz",
      "integrity": "sha512-++0e6Z4m0qZXMbhiezJroJhh1x4rWgTm2AI6k0+Jkl6gTN8TzLHFXLoaK1UGKzhouSleL982b1DeJoNLVgE5zA==",
      "requires": {
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      }
    },
    "@aws-sdk/is-array-buffer": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/is-array-buffer/-/is-array-buffer-3.20.0.tgz",
      "integrity": "sha512-l7A254/SA+DE1kNWcNHDKGUbpmmR3fjr65LPJeiB88Rnh+3M7F103JCNoA5x1Heb7QfUd4GMAUaYkaUlaWmnJw==",
      "requires": {
        "tslib": "^2.0.0"
      }
    },
    "@aws-sdk/md5-js": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/md5-js/-/md5-js-3.20.0.tgz",
      "integrity": "sha512-82h0L3F6lxh+MqZn7DxoxokdORCiVGll6zYrwKKZe/iZb3IfKbPlgq/2uSILVU2OzWK6+aAYNXRAcykvMp19ng==",
      "requires": {
        "@aws-sdk/types": "3.20.0",
        "@aws-sdk/util-utf8-browser": "3.20.0",
        "tslib": "^2.0.0"
      }
    },
    "@aws-sdk/middleware-apply-body-checksum": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/middleware-apply-body-checksum/-/middleware-apply-body-checksum-3.20.0.tgz",
      "integrity": "sha512-4//sJ0FcaMXplfHEzxcn3gzMqfJcM9JY3VbXsmyvfkveh8UfCQ0VOa+SgIPYQGLafMbEPZy+jL1s3DdBwaeVAQ==",
      "requires": {
        "@aws-sdk/is-array-buffer": "3.20.0",
        "@aws-sdk/protocol-http": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      }
    },
    "@aws-sdk/middleware-bucket-endpoint": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/middleware-bucket-endpoint/-/middleware-bucket-endpoint-3.20.0.tgz",
      "integrity": "sha512-smvLGrfz3xC6BzHfv9BnleJ1cS28Bt6RSIF072DIXvlSU9UhZRIplLgi9ncq5lvifSXE8Hd0932VZpBe1ReSzA==",
      "requires": {
        "@aws-sdk/protocol-http": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "@aws-sdk/util-arn-parser": "3.20.0",
        "tslib": "^2.0.0"
      }
    },
    "@aws-sdk/middleware-content-length": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/middleware-content-length/-/middleware-content-length-3.20.0.tgz",
      "integrity": "sha512-UXp+RQOHfv18EpPcELBtB4WktOqQnICW5JsGWkYfVv/WAxeZD1C2SC7wiNfeSLRsHfcfefAW5zznvFtdzke4AA==",
      "requires": {
        "@aws-sdk/protocol-http": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      }
    },
    "@aws-sdk/middleware-expect-continue": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/middleware-expect-continue/-/middleware-expect-continue-3.20.0.tgz",
      "integrity": "sha512-FRyNUlIJZxfQgpzv0AOOSHrWxk0+d/k6Sy9fAPDimZHFqJaD7ok/AhHhLs6m1C9ihyBY9hLSn4/xN+/t3lQNyg==",
      "requires": {
        "@aws-sdk/middleware-header-default": "3.20.0",
        "@aws-sdk/protocol-http": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      }
    },
    "@aws-sdk/middleware-header-default": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/middleware-header-default/-/middleware-header-default-3.20.0.tgz",
      "integrity": "sha512-Zj9a11jtJgpxsf+RyZ84vSPvNSxR/0A+Tjl/pIRqguVTxT11c2yH9d18/Flopg3juibKHKoQ3YwSjYslMer78A==",
      "requires": {
        "@aws-sdk/protocol-http": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      }
    },
    "@aws-sdk/middleware-host-header": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/middleware-host-header/-/middleware-host-header-3.20.0.tgz",
      "integrity": "sha512-7FNZlfahz7J1aoJxdsPS49dYtBYJLap8WofQw8fJodOEGsVDvphCEApInfCVIqiGcpqMcQaR9mGPsKIbV1qZQw==",
      "requires": {
        "@aws-sdk/protocol-http": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      }
    },
    "@aws-sdk/middleware-location-constraint": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/middleware-location-constraint/-/middleware-location-constraint-3.20.0.tgz",
      "integrity": "sha512-m1qtd3B5v6hkeRiH0znFFqJMOO6YO8SAYMp+Lnc0x7UYTngRWT420manqsFqavrD7q0K++WQEHJ23XR93b36yw==",
      "requires": {
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      }
    },
    "@aws-sdk/middleware-logger": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/middleware-logger/-/middleware-logger-3.20.0.tgz",
      "integrity": "sha512-0zYQJsBHRwop8N3uKtoa8rm58Y1Wkz2TADnWXSkMQg+vX4SgWE/1fYMb23I7p0tjTp8jZ0nRbxaO59DGu73kxQ==",
      "requires": {
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      }
    },
    "@aws-sdk/middleware-retry": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/middleware-retry/-/middleware-retry-3.20.0.tgz",
      "integrity": "sha512-Cyu9GDJ/TcxQDw/O5iZckHRzRs9ystvf5nEWB40QT5++485Lpkh/mz2WPdsboTmcPSGlPM8llaboyI8/DvAUJg==",
      "requires": {
        "@aws-sdk/protocol-http": "3.20.0",
        "@aws-sdk/service-error-classification": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0",
        "uuid": "^8.3.2"
      },
      "dependencies": {
        "uuid": {
          "version": "8.3.2",
          "resolved": "https://registry.npmjs.org/uuid/-/uuid-8.3.2.tgz",
          "integrity": "sha512-+NYs2QeMWy+GWFOEm9xnn6HCDp0l7QBD7ml8zLUmJ+93Q5NF0NocErnwkTkXVFNiX3/fpC6afS8Dhb/gz7R7eg=="
        }
      }
    },
    "@aws-sdk/middleware-sdk-s3": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/middleware-sdk-s3/-/middleware-sdk-s3-3.20.0.tgz",
      "integrity": "sha512-dxCVeWscgWgHaC3Ci4coIuNjCcA9Uad+u5xpPafGDsBeH9RPSPwODBKKnpNEyBbm4qfYN6t7OUaEJXHVdpi5Ow==",
      "requires": {
        "@aws-sdk/protocol-http": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "@aws-sdk/util-arn-parser": "3.20.0",
        "tslib": "^2.0.0"
      }
    },
    "@aws-sdk/middleware-sdk-sts": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/middleware-sdk-sts/-/middleware-sdk-sts-3.20.0.tgz",
      "integrity": "sha512-dHsWL3aryeCl2BX3UVHFQPCsIQdx3Y2bWlY+6dUZdd65YWxvrrpoR5m5LrubUvt7SD+KQ++K/6h8A3gFGKs4UA==",
      "requires": {
        "@aws-sdk/middleware-signing": "3.20.0",
        "@aws-sdk/property-provider": "3.20.0",
        "@aws-sdk/protocol-http": "3.20.0",
        "@aws-sdk/signature-v4": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      }
    },
    "@aws-sdk/middleware-serde": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/middleware-serde/-/middleware-serde-3.20.0.tgz",
      "integrity": "sha512-Hz5fmo0APcfkyqQGiGof7fNOcvi4CS7m9Gb+iJMiIzpVPSsve3tVe45rqYHo7NOj4Jed5E6/lujUprNHRxFEMQ==",
      "requires": {
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      }
    },
    "@aws-sdk/middleware-signing": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/middleware-signing/-/middleware-signing-3.20.0.tgz",
      "integrity": "sha512-ittOpXvHFRLUteWPEeemJeqyvi+lYlkXXF60dqnpza8sJOtsRP03VSeN9aLGNGcIKeg97WkejVCiobRoJnE4ig==",
      "requires": {
        "@aws-sdk/property-provider": "3.20.0",
        "@aws-sdk/protocol-http": "3.20.0",
        "@aws-sdk/signature-v4": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      }
    },
    "@aws-sdk/middleware-ssec": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/middleware-ssec/-/middleware-ssec-3.20.0.tgz",
      "integrity": "sha512-MziaXbSxmIackNvwIr2I2VpMeso0f2oxWq5Kth63n9BLxyCsLYINDixJdqF01vMt9549iXjArhQSv7Zu1rI8DA==",
      "requires": {
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      }
    },
    "@aws-sdk/middleware-stack": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/middleware-stack/-/middleware-stack-3.20.0.tgz",
      "integrity": "sha512-1lYl93BuYWQ7rWyTtIlaPTCvAnabMQ2kbJFH5j76ag7esRLownObmcqWNMEJ4bbw5TXXY4nG7BdRoTlmo47Mow==",
      "requires": {
        "tslib": "^2.0.0"
      }
    },
    "@aws-sdk/middleware-user-agent": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/middleware-user-agent/-/middleware-user-agent-3.20.0.tgz",
      "integrity": "sha512-EBiTXpUAjimSdzkEwHgcH96fWg8hDbtmus9ABf6Cor6EHUlHVeRAFULGIYo5ZFTy7DXbeHxjzPE7CcWEaUBvQQ==",
      "requires": {
        "@aws-sdk/protocol-http": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      }
    },
    "@aws-sdk/node-config-provider": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/node-config-provider/-/node-config-provider-3.20.0.tgz",
      "integrity": "sha512-bHevyN3hHbtrAg3EQ85MFHKfCwSr481vgd3nQL1zhzGOAp2DWM0C3w7otV8H+ejcplwDwtL+9JVhhEFTFROniw==",
      "requires": {
        "@aws-sdk/property-provider": "3.20.0",
        "@aws-sdk/shared-ini-file-loader": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      }
    },
    "@aws-sdk/node-http-handler": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/node-http-handler/-/node-http-handler-3.20.0.tgz",
      "integrity": "sha512-uK6qVeWFoNZfZTutj6RAAJjrlDMSp3dGzuF2xIbxSLjITNPtaXszssxVgaBYDZdDIaqe8I5DuyjGPoEW/xxJ1A==",
      "requires": {
        "@aws-sdk/abort-controller": "3.20.0",
        "@aws-sdk/protocol-http": "3.20.0",
        "@aws-sdk/querystring-builder": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      }
    },
    "@aws-sdk/property-provider": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/property-provider/-/property-provider-3.20.0.tgz",
      "integrity": "sha512-mShEXLj9ZsAOu1VL+XlqssBr7TNVRKvkaAovzifxaHaLP91jFltWlSmAPFc2Yuc8MsVToHfpfTYc2dSFTBqGtw==",
      "requires": {
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      }
    },
    "@aws-sdk/protocol-http": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/protocol-http/-/protocol-http-3.20.0.tgz",
      "integrity": "sha512-ZW9uyVk1Zbbaqo8LYc+MJ1EynZVQsa08o2I6Pho1fvheMcF/prcz+1HLQcJnfyNG76lM3Z/qQaEL7gGy2Ve6Cg==",
      "requires": {
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      }
    },
    "@aws-sdk/querystring-builder": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/querystring-builder/-/querystring-builder-3.20.0.tgz",
      "integrity": "sha512-iImp9CEQHtJkVhchuH9dZWkhiCWcPSsEbeeNctydigB9RMAaThtkGJ/423mQFkzXuOplbYkpwlfW9hu4gutSOQ==",
      "requires": {
        "@aws-sdk/types": "3.20.0",
        "@aws-sdk/util-uri-escape": "3.20.0",
        "tslib": "^2.0.0"
      }
    },
    "@aws-sdk/querystring-parser": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/querystring-parser/-/querystring-parser-3.20.0.tgz",
      "integrity": "sha512-Ven5A56SDDRJHCt84jzjrnW85LRzE9nClzbY14MjuITBo+azkbjZhyTutxK8/q8GQZMa2lhjnXLtfcT5rj1YjQ==",
      "requires": {
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      }
    },
    "@aws-sdk/service-error-classification": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/service-error-classification/-/service-error-classification-3.20.0.tgz",
      "integrity": "sha512-mJb465doN5yq+XxP4bPnAubriewEPoICNQZouDVKZ44Q48USn6e7zX0OrYqBT56Inw8JrSD9u5VHqGsFiubnSA=="
    },
    "@aws-sdk/shared-ini-file-loader": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/shared-ini-file-loader/-/shared-ini-file-loader-3.20.0.tgz",
      "integrity": "sha512-yUjSo5epgytDEaGSN+Sp/vY0HEdt9FU03KC3ON/q99+XEWVU2Y4045khXXWPHJ1wlvq3EOcRKG3u/0MDUJPnTg==",
      "requires": {
        "tslib": "^2.0.0"
      }
    },
    "@aws-sdk/signature-v4": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/signature-v4/-/signature-v4-3.20.0.tgz",
      "integrity": "sha512-LvbRMPlTt7X55EEE/cYcXm/VoCtr0frEC3KoAiq1zSNHXkiw741NK0d44W0RyJciBcXYfnYYBocNH+wIkjFZEQ==",
      "requires": {
        "@aws-sdk/is-array-buffer": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "@aws-sdk/util-hex-encoding": "3.20.0",
        "@aws-sdk/util-uri-escape": "3.20.0",
        "tslib": "^2.0.0"
      }
    },
    "@aws-sdk/smithy-client": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/smithy-client/-/smithy-client-3.20.0.tgz",
      "integrity": "sha512-co8VEuod5QoFbdXGouO+Kem6knj0NW302zUmYILk3r2UX5RJ/eVcaFJGS8oV89a8qZ7debazNS6IXZUxhlWUSg==",
      "requires": {
        "@aws-sdk/middleware-stack": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      }
    },
    "@aws-sdk/types": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/types/-/types-3.20.0.tgz",
      "integrity": "sha512-ztrHBTJM0wU4rrt51Kff8DjGT5ReoEdY1IUu6T0lN7aH9113235WnBE44y+z/Y+nMC+t5+r74CkldkLf/vngNg=="
    },
    "@aws-sdk/url-parser": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/url-parser/-/url-parser-3.20.0.tgz",
      "integrity": "sha512-9IvUtQ0p044KaVp7bdiXNB2vjhc6nZ02ph75e1wF1ISQiisDpQdTfAEy+TLFaw+95dBjyEG3PF6ybmFx6hNFxA==",
      "requires": {
        "@aws-sdk/querystring-parser": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      }
    },
    "@aws-sdk/util-arn-parser": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/util-arn-parser/-/util-arn-parser-3.20.0.tgz",
      "integrity": "sha512-E698STtAcfBwkogMCQVKoHYc1B1XxtoDpqwfGII5dGYBmXR2N41Ct5Zlb4uO7uqL89A7L3Zbc/83h99CRLFWaQ==",
      "requires": {
        "tslib": "^2.0.0"
      }
    },
    "@aws-sdk/util-base64-browser": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/util-base64-browser/-/util-base64-browser-3.20.0.tgz",
      "integrity": "sha512-55ubHL6AyskjVg/gi21XubmGP11eHY1QG912L3ZZuf83IQOT5ApLXEJ8KZIReMCH62sFMrUl3Q/G3zB3daTyiQ==",
      "requires": {
        "tslib": "^2.0.0"
      }
    },
    "@aws-sdk/util-base64-node": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/util-base64-node/-/util-base64-node-3.20.0.tgz",
      "integrity": "sha512-okeDxYT+hUoWAWB0QIMDry8NoTXNrK7bFtFoyRL+GUI98NCe5R8Md1SSm4aQZCoc4eaW4TKrM0gKB98VHXGZYA==",
      "requires": {
        "@aws-sdk/util-buffer-from": "3.20.0",
        "tslib": "^2.0.0"
      }
    },
    "@aws-sdk/util-body-length-browser": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/util-body-length-browser/-/util-body-length-browser-3.20.0.tgz",
      "integrity": "sha512-/VnDExoqYwuEwlLMO1UHkmJpN+ujNgU7T+q4kVoTlcK90PZBjzRS0X+2c/xC005ArSwDDFxSyc8QNq4DWjZCsQ==",
      "requires": {
        "tslib": "^2.0.0"
      }
    },
    "@aws-sdk/util-body-length-node": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/util-body-length-node/-/util-body-length-node-3.20.0.tgz",
      "integrity": "sha512-qn1ZGzaCULDwZTOsAXySp0b6lRBSinIujnRJM0155H8O1N8CDfvSeNPO9EUI/1M7u9zCS8zZ7jVO+MSVjn65ww==",
      "requires": {
        "tslib": "^2.0.0"
      }
    },
    "@aws-sdk/util-buffer-from": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/util-buffer-from/-/util-buffer-from-3.20.0.tgz",
      "integrity": "sha512-nNed2o88c/Dagkszz0A75ARGOrmnpI+Ep4MopcAQ7tcLn5IXAHIAx7Hbs5pLxBVceh8d9nMu6xY516txRBgG+A==",
      "requires": {
        "@aws-sdk/is-array-buffer": "3.20.0",
        "tslib": "^2.0.0"
      }
    },
    "@aws-sdk/util-hex-encoding": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/util-hex-encoding/-/util-hex-encoding-3.20.0.tgz",
      "integrity": "sha512-hUXgUVNpN61+F26qdBCQCclTGRWER/H1O8axuPKoyC7PPJPzxrHZbst7o/hEAIUYq76iJLGCSCC+dXlxvRN4HQ==",
      "requires": {
        "tslib": "^2.0.0"
      }
    },
    "@aws-sdk/util-locate-window": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/util-locate-window/-/util-locate-window-3.20.0.tgz",
      "integrity": "sha512-AqSMOm+hwxdywQ/jmprZXJY8uftHTi4p9JuftxTnP7Nl28+G8+RrVmoGcOtYf9VfWRDo/AM7zhvDwu4jB9yclg==",
      "requires": {
        "tslib": "^2.0.0"
      }
    },
    "@aws-sdk/util-uri-escape": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/util-uri-escape/-/util-uri-escape-3.20.0.tgz",
      "integrity": "sha512-BmlmK0zCAehj7V6Kql9vsXY0GTJZgXzSsyAVeXMvXq6D2JHU1UuJq0PAtxtGD4E8+CoSeowAaGyfUrqiCjJFBw==",
      "requires": {
        "tslib": "^2.0.0"
      }
    },
    "@aws-sdk/util-user-agent-browser": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/util-user-agent-browser/-/util-user-agent-browser-3.20.0.tgz",
      "integrity": "sha512-DSXJsihYDk2QiBUjgeAf/oTOnALAPWiKbeLIF4aPMcTKBsY5MCbZjEtoODLGxY5V2TpWFlfcKNjhYSesZIDIqA==",
      "requires": {
        "@aws-sdk/types": "3.20.0",
        "bowser": "^2.11.0",
        "tslib": "^2.0.0"
      }
    },
    "@aws-sdk/util-user-agent-node": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/util-user-agent-node/-/util-user-agent-node-3.20.0.tgz",
      "integrity": "sha512-WfC8p+ofygAhFArtXu/u6BZQDwrC/E5MffyoHdxbm4KpRznAOmEM/vzwrUFS8e93/OPYP8bFRMJCLRlER35a7g==",
      "requires": {
        "@aws-sdk/node-config-provider": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      }
    },
    "@aws-sdk/util-utf8-browser": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/util-utf8-browser/-/util-utf8-browser-3.20.0.tgz",
      "integrity": "sha512-9ZSirHLA8RtNkrZj9jLcxujQCsflNY3PWyuRArce5OpPv6+vVzL2QvdG191xfTSi5EMIHvwlRl56bNo64D7dLg==",
      "requires": {
        "tslib": "^2.0.0"
      }
    },
    "@aws-sdk/util-utf8-node": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/util-utf8-node/-/util-utf8-node-3.20.0.tgz",
      "integrity": "sha512-rEgl9slmtKYQkGgUmyMeqKzbaRq0YUtVqp+KddV9k12xvDJ05aJWw65YS83m4oX8bAeODKRUe7a1JuY2CIOzNQ==",
      "requires": {
        "@aws-sdk/util-buffer-from": "3.20.0",
        "tslib": "^2.0.0"
      }
    },
    "@aws-sdk/util-waiter": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/util-waiter/-/util-waiter-3.20.0.tgz",
      "integrity": "sha512-LwRVZ7mlFkrMaPdmYl4XxJqv2d0M/Knygwmd8glYn03UU26Zjli5ZI1t0Jr6du71FChxAG/X4ko4TWh2zDD1hw==",
      "requires": {
        "@aws-sdk/abort-controller": "3.20.0",
        "@aws-sdk/types": "3.20.0",
        "tslib": "^2.0.0"
      }
    },
    "@aws-sdk/xml-builder": {
      "version": "3.20.0",
      "resolved": "https://registry.npmjs.org/@aws-sdk/xml-builder/-/xml-builder-3.20.0.tgz",
      "integrity": "sha512-ejQwpqfA2/vvJ2qhPHcs6KtLgM+1rKkvQ6xuXC/2C6vEpTKc6Bcm8szk1MXYikaPYiQNgoi2nQ1C+Yw4zmlc+A==",
      "requires": {
        "tslib": "^2.0.0"
      }
    },
    "@babel/code-frame": {
      "version": "7.12.13",
      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.12.13.tgz",
      "integrity": "sha512-HV1Cm0Q3ZrpCR93tkWOYiuYIgLxZXZFVG2VgK+MBWjUqZTundupbfx2aXarXuw5Ko5aMcjtJgbSs4vUGBS5v6g==",
      "dev": true,
      "requires": {
        "@babel/highlight": "^7.12.13"
      }
    },
    "@babel/helper-validator-identifier": {
      "version": "7.14.0",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.14.0.tgz",
      "integrity": "sha512-V3ts7zMSu5lfiwWDVWzRDGIN+lnCEUdaXgtVHJgLb1rGaA6jMrtB9EmE7L18foXJIE8Un/A/h6NJfGQp/e1J4A==",
      "dev": true
    },
    "@babel/highlight": {
      "version": "7.14.0",
      "resolved": "https://registry.npmjs.org/@babel/highlight/-/highlight-7.14.0.tgz",
      "integrity": "sha512-YSCOwxvTYEIMSGaBQb5kDDsCopDdiUGsqpatp3fOlI4+2HQSkTmEVWnVuySdAC5EWCqSWWTv0ib63RjR7dTBdg==",
      "dev": true,
      "requires": {
        "@babel/helper-validator-identifier": "^7.14.0",
        "chalk": "^2.0.0",
        "js-tokens": "^4.0.0"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "3.2.1",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
          "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
          "dev": true,
          "requires": {
            "color-convert": "^1.9.0"
          }
        },
        "chalk": {
          "version": "2.4.2",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
          "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
          "dev": true,
          "requires": {
            "ansi-styles": "^3.2.1",
            "escape-string-regexp": "^1.0.5",
            "supports-color": "^5.3.0"
          }
        },
        "color-convert": {
          "version": "1.9.3",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
          "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
          "dev": true,
          "requires": {
            "color-name": "1.1.3"
          }
        },
        "color-name": {
          "version": "1.1.3",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
          "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU=",
          "dev": true
        },
        "js-tokens": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
          "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==",
          "dev": true
        }
      }
    },
    "@dabh/diagnostics": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/@dabh/diagnostics/-/diagnostics-2.0.2.tgz",
      "integrity": "sha512-+A1YivoVDNNVCdfozHSR8v/jyuuLTMXwjWuxPFlFlUapXoGc+Gj9mDlTDDfrwl7rXCl2tNZ0kE8sIBO6YOn96Q==",
      "requires": {
        "colorspace": "1.1.x",
        "enabled": "2.0.x",
        "kuler": "^2.0.0"
      }
    },
    "@hapi/address": {
      "version": "2.1.4",
      "resolved": "https://registry.npmjs.org/@hapi/address/-/address-2.1.4.tgz",
      "integrity": "sha512-QD1PhQk+s31P1ixsX0H0Suoupp3VMXzIVMSwobR3F3MSUO2YCV0B7xqLcUw/Bh8yuvd3LhpyqLQWTNcRmp6IdQ=="
    },
    "@hapi/hoek": {
      "version": "6.2.4",
      "resolved": "https://registry.npmjs.org/@hapi/hoek/-/hoek-6.2.4.tgz",
      "integrity": "sha512-HOJ20Kc93DkDVvjwHyHawPwPkX44sIrbXazAUDiUXaY2R9JwQGo2PhFfnQtdrsIe4igjG2fPgMra7NYw7qhy0A=="
    },
    "@hapi/joi": {
      "version": "15.0.3",
      "resolved": "https://registry.npmjs.org/@hapi/joi/-/joi-15.0.3.tgz",
      "integrity": "sha512-z6CesJ2YBwgVCi+ci8SI8zixoj8bGFn/vZb9MBPbSyoxsS2PnWYjHcyTM17VLK6tx64YVK38SDIh10hJypB+ig==",
      "requires": {
        "@hapi/address": "2.x.x",
        "@hapi/hoek": "6.x.x",
        "@hapi/topo": "3.x.x"
      }
    },
    "@hapi/topo": {
      "version": "3.1.6",
      "resolved": "https://registry.npmjs.org/@hapi/topo/-/topo-3.1.6.tgz",
      "integrity": "sha512-tAag0jEcjwH+P2quUfipd7liWCNX2F8NvYjQp2wtInsZxnMlypdw0FtAOLxtvvkO+GSRRbmNi8m/5y42PQJYCQ==",
      "requires": {
        "@hapi/hoek": "^8.3.0"
      },
      "dependencies": {
        "@hapi/hoek": {
          "version": "8.5.1",
          "resolved": "https://registry.npmjs.org/@hapi/hoek/-/hoek-8.5.1.tgz",
          "integrity": "sha512-yN7kbciD87WzLGc5539Tn0sApjyiGHAJgKvG9W8C7O+6c7qmoQMfVs0W4bX17eqz6C78QJqqFrtgdK5EWf6Qow=="
        }
      }
    },
    "@mapbox/node-pre-gyp": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/@mapbox/node-pre-gyp/-/node-pre-gyp-1.0.5.tgz",
      "integrity": "sha512-4srsKPXWlIxp5Vbqz5uLfBN+du2fJChBoYn/f2h991WLdk7jUvcSk/McVLSv/X+xQIPI8eGD5GjrnygdyHnhPA==",
      "requires": {
        "detect-libc": "^1.0.3",
        "https-proxy-agent": "^5.0.0",
        "make-dir": "^3.1.0",
        "node-fetch": "^2.6.1",
        "nopt": "^5.0.0",
        "npmlog": "^4.1.2",
        "rimraf": "^3.0.2",
        "semver": "^7.3.4",
        "tar": "^6.1.0"
      },
      "dependencies": {
        "nopt": {
          "version": "5.0.0",
          "resolved": "https://registry.npmjs.org/nopt/-/nopt-5.0.0.tgz",
          "integrity": "sha512-Tbj67rffqceeLpcRXrT7vKAN8CwfPeIBgM7E6iBkmKLV7bEMwpGgYLGv0jACUsECaa/vuxP0IjEont6umdMgtQ==",
          "requires": {
            "abbrev": "1"
          }
        },
        "semver": {
          "version": "7.3.5",
          "resolved": "https://registry.npmjs.org/semver/-/semver-7.3.5.tgz",
          "integrity": "sha512-PoeGJYh8HK4BTO/a9Tf6ZG3veo/A7ZVsYrSA6J8ny9nb3B1VrpkuN+z9OE5wfE5p6H4LchYZsegiQgbJD94ZFQ==",
          "requires": {
            "lru-cache": "^6.0.0"
          }
        }
      }
    },
    "@sindresorhus/is": {
      "version": "0.14.0",
      "resolved": "https://registry.npmjs.org/@sindresorhus/is/-/is-0.14.0.tgz",
      "integrity": "sha512-9NET910DNaIPngYnLLPeg+Ogzqsi9uM4mSboU5y6p8S5DzMTVEsJZrawi+BoDNUVBa2DhJqQYUFvMDfgU062LQ=="
    },
    "@szmarczak/http-timer": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/@szmarczak/http-timer/-/http-timer-1.1.2.tgz",
      "integrity": "sha512-XIB2XbzHTN6ieIjfIMV9hlVcfPU26s2vafYWQcZHWXHOxiaRZYEDKEwdl129Zyg50+foYV2jCgtrqSA6qNuNSA==",
      "requires": {
        "defer-to-connect": "^1.0.1"
      }
    },
    "@types/bson": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/@types/bson/-/bson-4.0.3.tgz",
      "integrity": "sha512-mVRvYnTOZJz3ccpxhr3wgxVmSeiYinW+zlzQz3SXWaJmD1DuL05Jeq7nKw3SnbKmbleW5qrLG5vdyWe/A9sXhw==",
      "requires": {
        "@types/node": "*"
      }
    },
    "@types/mongodb": {
      "version": "3.6.12",
      "resolved": "https://registry.npmjs.org/@types/mongodb/-/mongodb-3.6.12.tgz",
      "integrity": "sha512-49aEzQD5VdHPxyd5dRyQdqEveAg9LanwrH8RQipnMuulwzKmODXIZRp0umtxi1eBUfEusRkoy8AVOMr+kVuFog==",
      "requires": {
        "@types/bson": "*",
        "@types/node": "*"
      }
    },
    "@types/node": {
      "version": "14.14.41",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-14.14.41.tgz",
      "integrity": "sha512-dueRKfaJL4RTtSa7bWeTK1M+VH+Gns73oCgzvYfHZywRCoPSd8EkXBL0mZ9unPTveBn+D9phZBaxuzpwjWkW0g=="
    },
    "abab": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/abab/-/abab-2.0.5.tgz",
      "integrity": "sha512-9IK9EadsbHo6jLWIpxpR6pL0sazTXV6+SQv25ZB+F7Bj9mJNaOc4nCRabwd5M/JwmUa8idz6Eci6eKfJryPs6Q==",
      "dev": true
    },
    "abbrev": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
      "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q=="
    },
    "accepts": {
      "version": "1.3.7",
      "resolved": "https://registry.npmjs.org/accepts/-/accepts-1.3.7.tgz",
      "integrity": "sha512-Il80Qs2WjYlJIBNzNkK6KYqlVMTbZLXgHx2oT0pU/fjRHyEp+PEfEPY0R3WCwAGVOtauxh1hOxNgIf5bv7dQpA==",
      "requires": {
        "mime-types": "~2.1.24",
        "negotiator": "0.6.2"
      }
    },
    "acorn": {
      "version": "5.7.4",
      "resolved": "https://registry.npmjs.org/acorn/-/acorn-5.7.4.tgz",
      "integrity": "sha512-1D++VG7BhrtvQpNbBzovKNc1FLGGEE/oGe7b9xJm/RFHMBeUaUGpluV9RLjZa47YFdPcDAenEYuq9pQPcMdLJg==",
      "dev": true
    },
    "acorn-globals": {
      "version": "4.3.4",
      "resolved": "https://registry.npmjs.org/acorn-globals/-/acorn-globals-4.3.4.tgz",
      "integrity": "sha512-clfQEh21R+D0leSbUdWf3OcfqyaCSAQ8Ryq00bofSekfr9W8u1jyYZo6ir0xu9Gtcf7BjcHJpnbZH7JOCpP60A==",
      "dev": true,
      "requires": {
        "acorn": "^6.0.1",
        "acorn-walk": "^6.0.1"
      },
      "dependencies": {
        "acorn": {
          "version": "6.4.2",
          "resolved": "https://registry.npmjs.org/acorn/-/acorn-6.4.2.tgz",
          "integrity": "sha512-XtGIhXwF8YM8bJhGxG5kXgjkEuNGLTkoYqVE+KMR+aspr4KGYmKYg7yUe3KghyQ9yheNwLnjmzh/7+gfDBmHCQ==",
          "dev": true
        }
      }
    },
    "acorn-walk": {
      "version": "6.2.0",
      "resolved": "https://registry.npmjs.org/acorn-walk/-/acorn-walk-6.2.0.tgz",
      "integrity": "sha512-7evsyfH1cLOCdAzZAd43Cic04yKydNx0cF+7tiA19p1XnLLPU4dpCQOqpjqwokFe//vS0QqfqqjCS2JkiIs0cA==",
      "dev": true
    },
    "agent-base": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/agent-base/-/agent-base-6.0.2.tgz",
      "integrity": "sha512-RZNwNclF7+MS/8bDg70amg32dyeZGZxiDuQmZxKLAlQjr3jGyLx+4Kkk58UO7D2QdgFIQCovuSuZESne6RG6XQ==",
      "requires": {
        "debug": "4"
      },
      "dependencies": {
        "debug": {
          "version": "4.3.1",
          "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.1.tgz",
          "integrity": "sha512-doEwdvm4PCeK4K3RQN2ZC2BYUBaxwLARCqZmMjtF8a51J2Rb0xpVloFRnCODwqjpwnAoao4pelN8l3RJdv3gRQ==",
          "requires": {
            "ms": "2.1.2"
          }
        },
        "ms": {
          "version": "2.1.2",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
          "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
        }
      }
    },
    "ajv": {
      "version": "6.12.6",
      "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.12.6.tgz",
      "integrity": "sha512-j3fVLgvTo527anyYyJOGTYJbG+vnnQYvE0m5mmkc1TK+nxAppkCLMIL0aZ4dblVCNoGShhm+kzE4ZUykBoMg4g==",
      "dev": true,
      "requires": {
        "fast-deep-equal": "^3.1.1",
        "fast-json-stable-stringify": "^2.0.0",
        "json-schema-traverse": "^0.4.1",
        "uri-js": "^4.2.2"
      }
    },
    "ansi-align": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/ansi-align/-/ansi-align-3.0.0.tgz",
      "integrity": "sha512-ZpClVKqXN3RGBmKibdfWzqCY4lnjEuoNzU5T0oEFpfd/z5qJHVarukridD4juLO2FXMiwUQxr9WqQtaYa8XRYw==",
      "requires": {
        "string-width": "^3.0.0"
      },
      "dependencies": {
        "string-width": {
          "version": "3.1.0",
          "resolved": "https://registry.npmjs.org/string-width/-/string-width-3.1.0.tgz",
          "integrity": "sha512-vafcv6KjVZKSgz06oM/H6GDBrAtz8vdhQakGjFIvNrHA6y3HCF1CInLy+QLq8dTJPQ1b+KDUqDFctkdRW44e1w==",
          "requires": {
            "emoji-regex": "^7.0.1",
            "is-fullwidth-code-point": "^2.0.0",
            "strip-ansi": "^5.1.0"
          }
        }
      }
    },
    "ansi-escapes": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/ansi-escapes/-/ansi-escapes-3.2.0.tgz",
      "integrity": "sha512-cBhpre4ma+U0T1oM5fXg7Dy1Jw7zzwv7lt/GoCpr+hDQJoYnKVPLL4dCvSEFMmQurOQvSrwT7SL/DAlhBI97RQ==",
      "dev": true
    },
    "ansi-regex": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-4.1.0.tgz",
      "integrity": "sha512-1apePfXM1UOSqw0o9IiFAovVz9M5S1Dg+4TrDwfMewQ6p/rmMueb7tWZjQ1rx4Loy1ArBggoqGpfqqdI4rondg=="
    },
    "ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "requires": {
        "color-convert": "^2.0.1"
      }
    },
    "anymatch": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.2.tgz",
      "integrity": "sha512-P43ePfOAIupkguHUycrc4qJ9kz8ZiuOUijaETwX7THt0Y/GNK7v0aa8rY816xWjZ7rJdA5XdMcpVFTKMq+RvWg==",
      "requires": {
        "normalize-path": "^3.0.0",
        "picomatch": "^2.0.4"
      }
    },
    "append-field": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/append-field/-/append-field-1.0.0.tgz",
      "integrity": "sha1-HjRA6RXwsSA9I3SOeO3XubW0PlY="
    },
    "append-transform": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/append-transform/-/append-transform-0.4.0.tgz",
      "integrity": "sha1-126/jKlNJ24keja61EpLdKthGZE=",
      "dev": true,
      "requires": {
        "default-require-extensions": "^1.0.0"
      }
    },
    "aproba": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/aproba/-/aproba-1.2.0.tgz",
      "integrity": "sha512-Y9J6ZjXtoYh8RnXVCMOU/ttDmk1aBjunq9vO0ta5x85WDQiQfUF9sIPBITdbiiIVcBo03Hi3jMxigBtsddlXRw=="
    },
    "are-we-there-yet": {
      "version": "1.1.5",
      "resolved": "https://registry.npmjs.org/are-we-there-yet/-/are-we-there-yet-1.1.5.tgz",
      "integrity": "sha512-5hYdAkZlcG8tOLujVDTgCT+uPX0VnpAH28gWsLfzpXYm7wP6mp5Q/gYyR7YQ0cKVJcXJnl3j2kpBan13PtQf6w==",
      "requires": {
        "delegates": "^1.0.0",
        "readable-stream": "^2.0.6"
      }
    },
    "argparse": {
      "version": "1.0.10",
      "resolved": "https://registry.npmjs.org/argparse/-/argparse-1.0.10.tgz",
      "integrity": "sha512-o5Roy6tNG4SL/FOkCAN6RzjiakZS25RLYFrcMttJqbdd8BWrnA+fGz57iN5Pb06pvBGvl5gQ0B48dJlslXvoTg==",
      "dev": true,
      "requires": {
        "sprintf-js": "~1.0.2"
      }
    },
    "arr-diff": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/arr-diff/-/arr-diff-2.0.0.tgz",
      "integrity": "sha1-jzuCf5Vai9ZpaX5KQlasPOrjVs8=",
      "dev": true,
      "requires": {
        "arr-flatten": "^1.0.1"
      }
    },
    "arr-flatten": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/arr-flatten/-/arr-flatten-1.1.0.tgz",
      "integrity": "sha512-L3hKV5R/p5o81R7O02IGnwpDmkp6E982XhtbuwSe3O4qOtMMMtodicASA1Cny2U+aCXcNpml+m4dPsvsJ3jatg==",
      "dev": true
    },
    "arr-union": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/arr-union/-/arr-union-3.1.0.tgz",
      "integrity": "sha1-45sJrqne+Gao8gbiiK9jkZuuOcQ=",
      "dev": true
    },
    "array-equal": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/array-equal/-/array-equal-1.0.0.tgz",
      "integrity": "sha1-jCpe8kcv2ep0KwTHenUJO6J1fJM=",
      "dev": true
    },
    "array-flatten": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/array-flatten/-/array-flatten-1.1.1.tgz",
      "integrity": "sha1-ml9pkFGx5wczKPKgCJaLZOopVdI="
    },
    "array-unique": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/array-unique/-/array-unique-0.2.1.tgz",
      "integrity": "sha1-odl8yvy8JiXMcPrc6zalDFiwGlM=",
      "dev": true
    },
    "arrify": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/arrify/-/arrify-1.0.1.tgz",
      "integrity": "sha1-iYUI2iIm84DfkEcoRWhJwVAaSw0=",
      "dev": true
    },
    "asn1": {
      "version": "0.2.4",
      "resolved": "https://registry.npmjs.org/asn1/-/asn1-0.2.4.tgz",
      "integrity": "sha512-jxwzQpLQjSmWXgwaCZE9Nz+glAG01yF1QnWgbhGwHI5A6FRIEY6IVqtHhIepHqI7/kyEyQEagBC5mBEFlIYvdg==",
      "dev": true,
      "requires": {
        "safer-buffer": "~2.1.0"
      }
    },
    "assert-plus": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/assert-plus/-/assert-plus-1.0.0.tgz",
      "integrity": "sha1-8S4PPF13sLHN2RRpQuTpbB5N1SU=",
      "dev": true
    },
    "assign-symbols": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/assign-symbols/-/assign-symbols-1.0.0.tgz",
      "integrity": "sha1-WWZ/QfrdTyDMvCu5a41Pf3jsA2c=",
      "dev": true
    },
    "astral-regex": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/astral-regex/-/astral-regex-1.0.0.tgz",
      "integrity": "sha512-+Ryf6g3BKoRc7jfp7ad8tM4TtMiaWvbF/1/sQcZPkkS7ag3D5nMBCe2UfOTONtAkaG0tO0ij3C5Lwmf1EiyjHg==",
      "dev": true
    },
    "async": {
      "version": "2.1.4",
      "resolved": "https://registry.npmjs.org/async/-/async-2.1.4.tgz",
      "integrity": "sha1-LSFgx3iAMuTdbL4lAvH5osj2zeQ=",
      "requires": {
        "lodash": "^4.14.0"
      }
    },
    "async-limiter": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/async-limiter/-/async-limiter-1.0.1.tgz",
      "integrity": "sha512-csOlWGAcRFJaI6m+F2WKdnMKr4HhdhFVBk0H/QbJFMCr+uO2kwohwXQPxw/9OCxp05r5ghVBFSyioixx3gfkNQ==",
      "dev": true
    },
    "asynckit": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/asynckit/-/asynckit-0.4.0.tgz",
      "integrity": "sha1-x57Zf380y48robyXkLzDZkdLS3k=",
      "dev": true
    },
    "atob": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/atob/-/atob-2.1.2.tgz",
      "integrity": "sha512-Wm6ukoaOGJi/73p/cl2GvLjTI5JM1k/O14isD73YML8StrH/7/lRFgmg8nICZgD3bZZvjwCGxtMOD3wWNAu8cg==",
      "dev": true
    },
    "aws-sdk": {
      "version": "2.941.0",
      "resolved": "https://registry.npmjs.org/aws-sdk/-/aws-sdk-2.941.0.tgz",
      "integrity": "sha512-MzVYHaZNtWy7UgFnCBg8rXFfSd4svjUVkLpQnPb/XJb3Qq4082SN5ZjaDITFFAQs/xttV3jm5jtbbcc5dpICYg==",
      "requires": {
        "buffer": "4.9.2",
        "events": "1.1.1",
        "ieee754": "1.1.13",
        "jmespath": "0.15.0",
        "querystring": "0.2.0",
        "sax": "1.2.1",
        "url": "0.10.3",
        "uuid": "3.3.2",
        "xml2js": "0.4.19"
      },
      "dependencies": {
        "querystring": {
          "version": "0.2.0",
          "resolved": "https://registry.npmjs.org/querystring/-/querystring-0.2.0.tgz",
          "integrity": "sha1-sgmEkgO7Jd+CDadW50cAWHhSFiA="
        },
        "sax": {
          "version": "1.2.1",
          "resolved": "https://registry.npmjs.org/sax/-/sax-1.2.1.tgz",
          "integrity": "sha1-e45lYZCyKOgaZq6nSEgNgozS03o="
        },
        "uuid": {
          "version": "3.3.2",
          "resolved": "https://registry.npmjs.org/uuid/-/uuid-3.3.2.tgz",
          "integrity": "sha512-yXJmeNaw3DnnKAOKJE51sL/ZaYfWJRl1pK9dr19YFCu0ObS231AB1/LbqTKRAQ5kw8A90rA6fr4riOUpTZvQZA=="
        }
      }
    },
    "aws-sign2": {
      "version": "0.7.0",
      "resolved": "https://registry.npmjs.org/aws-sign2/-/aws-sign2-0.7.0.tgz",
      "integrity": "sha1-tG6JCTSpWR8tL2+G1+ap8bP+dqg=",
      "dev": true
    },
    "aws4": {
      "version": "1.11.0",
      "resolved": "https://registry.npmjs.org/aws4/-/aws4-1.11.0.tgz",
      "integrity": "sha512-xh1Rl34h6Fi1DC2WWKfxUTVqRsNnr6LsKz2+hfwDxQJWmrx8+c7ylaqBMcHfl1U1r2dsifOvKX3LQuLNZ+XSvA==",
      "dev": true
    },
    "babel-code-frame": {
      "version": "6.26.0",
      "resolved": "https://registry.npmjs.org/babel-code-frame/-/babel-code-frame-6.26.0.tgz",
      "integrity": "sha1-Y/1D99weO7fONZR9uP42mj9Yx0s=",
      "dev": true,
      "requires": {
        "chalk": "^1.1.3",
        "esutils": "^2.0.2",
        "js-tokens": "^3.0.2"
      },
      "dependencies": {
        "ansi-regex": {
          "version": "2.1.1",
          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz",
          "integrity": "sha1-w7M6te42DYbg5ijwRorn7yfWVN8=",
          "dev": true
        },
        "ansi-styles": {
          "version": "2.2.1",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-2.2.1.tgz",
          "integrity": "sha1-tDLdM1i2NM914eRmQ2gkBTPB3b4=",
          "dev": true
        },
        "chalk": {
          "version": "1.1.3",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-1.1.3.tgz",
          "integrity": "sha1-qBFcVeSnAv5NFQq9OHKCKn4J/Jg=",
          "dev": true,
          "requires": {
            "ansi-styles": "^2.2.1",
            "escape-string-regexp": "^1.0.2",
            "has-ansi": "^2.0.0",
            "strip-ansi": "^3.0.0",
            "supports-color": "^2.0.0"
          }
        },
        "strip-ansi": {
          "version": "3.0.1",
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-3.0.1.tgz",
          "integrity": "sha1-ajhfuIU9lS1f8F0Oiq+UJ43GPc8=",
          "dev": true,
          "requires": {
            "ansi-regex": "^2.0.0"
          }
        },
        "supports-color": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-2.0.0.tgz",
          "integrity": "sha1-U10EXOa2Nj+kARcIRimZXp3zJMc=",
          "dev": true
        }
      }
    },
    "babel-core": {
      "version": "6.26.3",
      "resolved": "https://registry.npmjs.org/babel-core/-/babel-core-6.26.3.tgz",
      "integrity": "sha512-6jyFLuDmeidKmUEb3NM+/yawG0M2bDZ9Z1qbZP59cyHLz8kYGKYwpJP0UwUKKUiTRNvxfLesJnTedqczP7cTDA==",
      "dev": true,
      "requires": {
        "babel-code-frame": "^6.26.0",
        "babel-generator": "^6.26.0",
        "babel-helpers": "^6.24.1",
        "babel-messages": "^6.23.0",
        "babel-register": "^6.26.0",
        "babel-runtime": "^6.26.0",
        "babel-template": "^6.26.0",
        "babel-traverse": "^6.26.0",
        "babel-types": "^6.26.0",
        "babylon": "^6.18.0",
        "convert-source-map": "^1.5.1",
        "debug": "^2.6.9",
        "json5": "^0.5.1",
        "lodash": "^4.17.4",
        "minimatch": "^3.0.4",
        "path-is-absolute": "^1.0.1",
        "private": "^0.1.8",
        "slash": "^1.0.0",
        "source-map": "^0.5.7"
      },
      "dependencies": {
        "json5": {
          "version": "0.5.1",
          "resolved": "https://registry.npmjs.org/json5/-/json5-0.5.1.tgz",
          "integrity": "sha1-Hq3nrMASA0rYTiOWdn6tn6VJWCE=",
          "dev": true
        }
      }
    },
    "babel-generator": {
      "version": "6.26.1",
      "resolved": "https://registry.npmjs.org/babel-generator/-/babel-generator-6.26.1.tgz",
      "integrity": "sha512-HyfwY6ApZj7BYTcJURpM5tznulaBvyio7/0d4zFOeMPUmfxkCjHocCuoLa2SAGzBI8AREcH3eP3758F672DppA==",
      "dev": true,
      "requires": {
        "babel-messages": "^6.23.0",
        "babel-runtime": "^6.26.0",
        "babel-types": "^6.26.0",
        "detect-indent": "^4.0.0",
        "jsesc": "^1.3.0",
        "lodash": "^4.17.4",
        "source-map": "^0.5.7",
        "trim-right": "^1.0.1"
      }
    },
    "babel-helpers": {
      "version": "6.24.1",
      "resolved": "https://registry.npmjs.org/babel-helpers/-/babel-helpers-6.24.1.tgz",
      "integrity": "sha1-NHHenK7DiOXIUOWX5Yom3fN2ArI=",
      "dev": true,
      "requires": {
        "babel-runtime": "^6.22.0",
        "babel-template": "^6.24.1"
      }
    },
    "babel-jest": {
      "version": "22.4.4",
      "resolved": "https://registry.npmjs.org/babel-jest/-/babel-jest-22.4.4.tgz",
      "integrity": "sha512-A9NB6/lZhYyypR9ATryOSDcqBaqNdzq4U+CN+/wcMsLcmKkPxQEoTKLajGfd3IkxNyVBT8NewUK2nWyGbSzHEQ==",
      "dev": true,
      "requires": {
        "babel-plugin-istanbul": "^4.1.5",
        "babel-preset-jest": "^22.4.4"
      }
    },
    "babel-messages": {
      "version": "6.23.0",
      "resolved": "https://registry.npmjs.org/babel-messages/-/babel-messages-6.23.0.tgz",
      "integrity": "sha1-8830cDhYA1sqKVHG7F7fbGLyYw4=",
      "dev": true,
      "requires": {
        "babel-runtime": "^6.22.0"
      }
    },
    "babel-plugin-istanbul": {
      "version": "4.1.6",
      "resolved": "https://registry.npmjs.org/babel-plugin-istanbul/-/babel-plugin-istanbul-4.1.6.tgz",
      "integrity": "sha512-PWP9FQ1AhZhS01T/4qLSKoHGY/xvkZdVBGlKM/HuxxS3+sC66HhTNR7+MpbO/so/cz/wY94MeSWJuP1hXIPfwQ==",
      "dev": true,
      "requires": {
        "babel-plugin-syntax-object-rest-spread": "^6.13.0",
        "find-up": "^2.1.0",
        "istanbul-lib-instrument": "^1.10.1",
        "test-exclude": "^4.2.1"
      }
    },
    "babel-plugin-jest-hoist": {
      "version": "22.4.4",
      "resolved": "https://registry.npmjs.org/babel-plugin-jest-hoist/-/babel-plugin-jest-hoist-22.4.4.tgz",
      "integrity": "sha512-DUvGfYaAIlkdnygVIEl0O4Av69NtuQWcrjMOv6DODPuhuGLDnbsARz3AwiiI/EkIMMlxQDUcrZ9yoyJvTNjcVQ==",
      "dev": true
    },
    "babel-plugin-syntax-object-rest-spread": {
      "version": "6.13.0",
      "resolved": "https://registry.npmjs.org/babel-plugin-syntax-object-rest-spread/-/babel-plugin-syntax-object-rest-spread-6.13.0.tgz",
      "integrity": "sha1-/WU28rzhODb/o6VFjEkDpZe7O/U=",
      "dev": true
    },
    "babel-preset-jest": {
      "version": "22.4.4",
      "resolved": "https://registry.npmjs.org/babel-preset-jest/-/babel-preset-jest-22.4.4.tgz",
      "integrity": "sha512-+dxMtOFwnSYWfum0NaEc0O03oSdwBsjx4tMSChRDPGwu/4wSY6Q6ANW3wkjKpJzzguaovRs/DODcT4hbSN8yiA==",
      "dev": true,
      "requires": {
        "babel-plugin-jest-hoist": "^22.4.4",
        "babel-plugin-syntax-object-rest-spread": "^6.13.0"
      }
    },
    "babel-register": {
      "version": "6.26.0",
      "resolved": "https://registry.npmjs.org/babel-register/-/babel-register-6.26.0.tgz",
      "integrity": "sha1-btAhFz4vy0htestFxgCahW9kcHE=",
      "dev": true,
      "requires": {
        "babel-core": "^6.26.0",
        "babel-runtime": "^6.26.0",
        "core-js": "^2.5.0",
        "home-or-tmp": "^2.0.0",
        "lodash": "^4.17.4",
        "mkdirp": "^0.5.1",
        "source-map-support": "^0.4.15"
      },
      "dependencies": {
        "mkdirp": {
          "version": "0.5.5",
          "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-0.5.5.tgz",
          "integrity": "sha512-NKmAlESf6jMGym1++R0Ra7wvhV+wFW63FaSOFPwRahvea0gMUcGUhVeAg/0BC0wiv9ih5NYPB1Wn1UEI1/L+xQ==",
          "dev": true,
          "requires": {
            "minimist": "^1.2.5"
          }
        },
        "source-map-support": {
          "version": "0.4.18",
          "resolved": "https://registry.npmjs.org/source-map-support/-/source-map-support-0.4.18.tgz",
          "integrity": "sha512-try0/JqxPLF9nOjvSta7tVondkP5dwgyLDjVoyMDlmjugT2lRZ1OfsrYTkCd2hkDnJTKRbO/Rl3orm8vlsUzbA==",
          "dev": true,
          "requires": {
            "source-map": "^0.5.6"
          }
        }
      }
    },
    "babel-runtime": {
      "version": "6.26.0",
      "resolved": "https://registry.npmjs.org/babel-runtime/-/babel-runtime-6.26.0.tgz",
      "integrity": "sha1-llxwWGaOgrVde/4E/yM3vItWR/4=",
      "dev": true,
      "requires": {
        "core-js": "^2.4.0",
        "regenerator-runtime": "^0.11.0"
      }
    },
    "babel-template": {
      "version": "6.26.0",
      "resolved": "https://registry.npmjs.org/babel-template/-/babel-template-6.26.0.tgz",
      "integrity": "sha1-3gPi0WOWsGn0bdn/+FIfsaDjXgI=",
      "dev": true,
      "requires": {
        "babel-runtime": "^6.26.0",
        "babel-traverse": "^6.26.0",
        "babel-types": "^6.26.0",
        "babylon": "^6.18.0",
        "lodash": "^4.17.4"
      }
    },
    "babel-traverse": {
      "version": "6.26.0",
      "resolved": "https://registry.npmjs.org/babel-traverse/-/babel-traverse-6.26.0.tgz",
      "integrity": "sha1-RqnL1+3MYsjlwGTi0tjQ9ANXZu4=",
      "dev": true,
      "requires": {
        "babel-code-frame": "^6.26.0",
        "babel-messages": "^6.23.0",
        "babel-runtime": "^6.26.0",
        "babel-types": "^6.26.0",
        "babylon": "^6.18.0",
        "debug": "^2.6.8",
        "globals": "^9.18.0",
        "invariant": "^2.2.2",
        "lodash": "^4.17.4"
      }
    },
    "babel-types": {
      "version": "6.26.0",
      "resolved": "https://registry.npmjs.org/babel-types/-/babel-types-6.26.0.tgz",
      "integrity": "sha1-o7Bz+Uq0nrb6Vc1lInozQ4BjJJc=",
      "dev": true,
      "requires": {
        "babel-runtime": "^6.26.0",
        "esutils": "^2.0.2",
        "lodash": "^4.17.4",
        "to-fast-properties": "^1.0.3"
      }
    },
    "babylon": {
      "version": "6.18.0",
      "resolved": "https://registry.npmjs.org/babylon/-/babylon-6.18.0.tgz",
      "integrity": "sha512-q/UEjfGJ2Cm3oKV71DJz9d25TPnq5rhBVL2Q4fA5wcC3jcrdn7+SssEybFIxwAvvP+YCsCYNKughoF33GxgycQ==",
      "dev": true
    },
    "balanced-match": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
      "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw=="
    },
    "base": {
      "version": "0.11.2",
      "resolved": "https://registry.npmjs.org/base/-/base-0.11.2.tgz",
      "integrity": "sha512-5T6P4xPgpp0YDFvSWwEZ4NoE3aM4QBQXDzmVbraCkFj8zHM+mba8SyqB5DbZWyR7mYHo6Y7BdQo3MoA4m0TeQg==",
      "dev": true,
      "requires": {
        "cache-base": "^1.0.1",
        "class-utils": "^0.3.5",
        "component-emitter": "^1.2.1",
        "define-property": "^1.0.0",
        "isobject": "^3.0.1",
        "mixin-deep": "^1.2.0",
        "pascalcase": "^0.1.1"
      },
      "dependencies": {
        "define-property": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
          "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
          "dev": true,
          "requires": {
            "is-descriptor": "^1.0.0"
          }
        },
        "is-accessor-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
          "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
          "dev": true,
          "requires": {
            "kind-of": "^6.0.0"
          }
        },
        "is-data-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
          "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
          "dev": true,
          "requires": {
            "kind-of": "^6.0.0"
          }
        },
        "is-descriptor": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
          "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
          "dev": true,
          "requires": {
            "is-accessor-descriptor": "^1.0.0",
            "is-data-descriptor": "^1.0.0",
            "kind-of": "^6.0.2"
          }
        },
        "isobject": {
          "version": "3.0.1",
          "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
          "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",
          "dev": true
        },
        "kind-of": {
          "version": "6.0.3",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",
          "integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw==",
          "dev": true
        }
      }
    },
    "base64-js": {
      "version": "1.5.1",
      "resolved": "https://registry.npmjs.org/base64-js/-/base64-js-1.5.1.tgz",
      "integrity": "sha512-AKpaYlHn8t4SVbOHCy+b5+KKgvR4vrsD8vbvrbiQJps7fKDTkjkDry6ji0rUJjC0kzbNePLwzxq8iypo41qeWA=="
    },
    "base64url": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/base64url/-/base64url-3.0.1.tgz",
      "integrity": "sha512-ir1UPr3dkwexU7FdV8qBBbNDRUhMmIekYMFZfi+C/sLNnRESKPl23nB9b2pltqfOQNnGzsDdId90AEtG5tCx4A=="
    },
    "bcrypt": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/bcrypt/-/bcrypt-5.0.1.tgz",
      "integrity": "sha512-9BTgmrhZM2t1bNuDtrtIMVSmmxZBrJ71n8Wg+YgdjHuIWYF7SjjmCPZFB+/5i/o/PIeRpwVJR3P+NrpIItUjqw==",
      "requires": {
        "@mapbox/node-pre-gyp": "^1.0.0",
        "node-addon-api": "^3.1.0"
      }
    },
    "bcrypt-pbkdf": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/bcrypt-pbkdf/-/bcrypt-pbkdf-1.0.2.tgz",
      "integrity": "sha1-pDAdOJtqQ/m2f/PKEaP2Y342Dp4=",
      "dev": true,
      "requires": {
        "tweetnacl": "^0.14.3"
      }
    },
    "binary-extensions": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.2.0.tgz",
      "integrity": "sha512-jDctJ/IVQbZoJykoeHbhXpOlNBqGNcwXJKJog42E5HDPUwQTSdjCHdihjj0DlnheQ7blbT6dHOafNAiS8ooQKA=="
    },
    "bl": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/bl/-/bl-2.2.1.tgz",
      "integrity": "sha512-6Pesp1w0DEX1N550i/uGV/TqucVL4AM/pgThFSN/Qq9si1/DF9aIHs1BxD8V/QU0HoeHO6cQRTAuYnLPKq1e4g==",
      "requires": {
        "readable-stream": "^2.3.5",
        "safe-buffer": "^5.1.1"
      }
    },
    "bluebird": {
      "version": "3.5.1",
      "resolved": "https://registry.npmjs.org/bluebird/-/bluebird-3.5.1.tgz",
      "integrity": "sha512-MKiLiV+I1AA596t9w1sQJ8jkiSr5+ZKi0WKrYGUn6d1Fx+Ij4tIj+m2WMQSGczs5jZVxV339chE8iwk6F64wjA=="
    },
    "body-parser": {
      "version": "1.19.0",
      "resolved": "https://registry.npmjs.org/body-parser/-/body-parser-1.19.0.tgz",
      "integrity": "sha512-dhEPs72UPbDnAQJ9ZKMNTP6ptJaionhP5cBb541nXPlW60Jepo9RV/a4fX4XWW9CuFNK22krhrj1+rgzifNCsw==",
      "requires": {
        "bytes": "3.1.0",
        "content-type": "~1.0.4",
        "debug": "2.6.9",
        "depd": "~1.1.2",
        "http-errors": "1.7.2",
        "iconv-lite": "0.4.24",
        "on-finished": "~2.3.0",
        "qs": "6.7.0",
        "raw-body": "2.4.0",
        "type-is": "~1.6.17"
      }
    },
    "bowser": {
      "version": "2.11.0",
      "resolved": "https://registry.npmjs.org/bowser/-/bowser-2.11.0.tgz",
      "integrity": "sha512-AlcaJBi/pqqJBIQ8U9Mcpc9i8Aqxn88Skv5d+xBX006BY5u8N3mGLHa5Lgppa7L/HfwgwLgZ6NYs+Ag6uUmJRA=="
    },
    "boxen": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/boxen/-/boxen-4.2.0.tgz",
      "integrity": "sha512-eB4uT9RGzg2odpER62bBwSLvUeGC+WbRjjyyFhGsKnc8wp/m0+hQsMUvUe3H2V0D5vw0nBdO1hCJoZo5mKeuIQ==",
      "requires": {
        "ansi-align": "^3.0.0",
        "camelcase": "^5.3.1",
        "chalk": "^3.0.0",
        "cli-boxes": "^2.2.0",
        "string-width": "^4.1.0",
        "term-size": "^2.1.0",
        "type-fest": "^0.8.1",
        "widest-line": "^3.1.0"
      }
    },
    "brace-expansion": {
      "version": "1.1.11",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
      "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
      "requires": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "braces": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.2.tgz",
      "integrity": "sha512-b8um+L1RzM3WDSzvhm6gIz1yfTbBt6YTlcEKAvsmqCZZFw46z626lVj9j1yEPW33H5H+lBQpZMP1k8l+78Ha0A==",
      "requires": {
        "fill-range": "^7.0.1"
      }
    },
    "browser-process-hrtime": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/browser-process-hrtime/-/browser-process-hrtime-1.0.0.tgz",
      "integrity": "sha512-9o5UecI3GhkpM6DrXr69PblIuWxPKk9Y0jHBRhdocZ2y7YECBFCsHm79Pr3OyR2AvjhDkabFJaDJMYRazHgsow==",
      "dev": true
    },
    "browser-resolve": {
      "version": "1.11.3",
      "resolved": "https://registry.npmjs.org/browser-resolve/-/browser-resolve-1.11.3.tgz",
      "integrity": "sha512-exDi1BYWB/6raKHmDTCicQfTkqwN5fioMFV4j8BsfMU4R2DK/QfZfK7kOVkmWCNANf0snkBzqGqAJBao9gZMdQ==",
      "dev": true,
      "requires": {
        "resolve": "1.1.7"
      }
    },
    "bser": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/bser/-/bser-2.1.1.tgz",
      "integrity": "sha512-gQxTNE/GAfIIrmHLUE3oJyp5FO6HRBfhjnw4/wMmA63ZGDJnWBmgY/lyQBpnDUkGmAhbSe39tx2d/iTOAfglwQ==",
      "dev": true,
      "requires": {
        "node-int64": "^0.4.0"
      }
    },
    "bson": {
      "version": "1.1.6",
      "resolved": "https://registry.npmjs.org/bson/-/bson-1.1.6.tgz",
      "integrity": "sha512-EvVNVeGo4tHxwi8L6bPj3y3itEvStdwvvlojVxxbyYfoaxJ6keLgrTuKdyfEAszFK+H3olzBuafE0yoh0D1gdg=="
    },
    "buffer": {
      "version": "4.9.2",
      "resolved": "https://registry.npmjs.org/buffer/-/buffer-4.9.2.tgz",
      "integrity": "sha512-xq+q3SRMOxGivLhBNaUdC64hDTQwejJ+H0T/NB1XMtTVEwNTrfFF3gAxiyW0Bu/xWEGhjVKgUcMhCrUy2+uCWg==",
      "requires": {
        "base64-js": "^1.0.2",
        "ieee754": "^1.1.4",
        "isarray": "^1.0.0"
      }
    },
    "buffer-equal-constant-time": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/buffer-equal-constant-time/-/buffer-equal-constant-time-1.0.1.tgz",
      "integrity": "sha1-+OcRMvf/5uAaXJaXpMbz5I1cyBk="
    },
    "buffer-from": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/buffer-from/-/buffer-from-1.1.1.tgz",
      "integrity": "sha512-MQcXEUbCKtEo7bhqEs6560Hyd4XaovZlO/k9V3hjVUF/zwW7KBVdSK4gIt/bzwS9MbR5qob+F5jusZsb0YQK2A=="
    },
    "buffer-shims": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/buffer-shims/-/buffer-shims-1.0.0.tgz",
      "integrity": "sha1-mXjOMXOIxkmth5MCjDR37wRKi1E="
    },
    "busboy": {
      "version": "0.2.14",
      "resolved": "https://registry.npmjs.org/busboy/-/busboy-0.2.14.tgz",
      "integrity": "sha1-bCpiLvz0fFe7vh4qnDetNseSVFM=",
      "requires": {
        "dicer": "0.2.5",
        "readable-stream": "1.1.x"
      },
      "dependencies": {
        "isarray": {
          "version": "0.0.1",
          "resolved": "https://registry.npmjs.org/isarray/-/isarray-0.0.1.tgz",
          "integrity": "sha1-ihis/Kmo9Bd+Cav8YDiTmwXR7t8="
        },
        "readable-stream": {
          "version": "1.1.14",
          "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-1.1.14.tgz",
          "integrity": "sha1-fPTFTvZI44EwhMY23SB54WbAgdk=",
          "requires": {
            "core-util-is": "~1.0.0",
            "inherits": "~2.0.1",
            "isarray": "0.0.1",
            "string_decoder": "~0.10.x"
          }
        },
        "string_decoder": {
          "version": "0.10.31",
          "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-0.10.31.tgz",
          "integrity": "sha1-YuIDvEF2bGwoyfyEMB2rHFMQ+pQ="
        }
      }
    },
    "bytes": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.0.tgz",
      "integrity": "sha512-zauLjrfCG+xvoyaqLoV8bLVXXNGC4JqlxFCutSDWA6fJrTo2ZuvLYTqZ7aHBLZSMOopbzwv8f+wZcVzfVTI2Dg=="
    },
    "cache-base": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/cache-base/-/cache-base-1.0.1.tgz",
      "integrity": "sha512-AKcdTnFSWATd5/GCPRxr2ChwIJ85CeyrEyjRHlKxQ56d4XJMGym0uAiKn0xbLOGOl3+yRpOTi484dVCEc5AUzQ==",
      "dev": true,
      "requires": {
        "collection-visit": "^1.0.0",
        "component-emitter": "^1.2.1",
        "get-value": "^2.0.6",
        "has-value": "^1.0.0",
        "isobject": "^3.0.1",
        "set-value": "^2.0.0",
        "to-object-path": "^0.3.0",
        "union-value": "^1.0.0",
        "unset-value": "^1.0.0"
      },
      "dependencies": {
        "isobject": {
          "version": "3.0.1",
          "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
          "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",
          "dev": true
        }
      }
    },
    "cacheable-request": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/cacheable-request/-/cacheable-request-6.1.0.tgz",
      "integrity": "sha512-Oj3cAGPCqOZX7Rz64Uny2GYAZNliQSqfbePrgAQ1wKAihYmCUnraBtJtKcGR4xz7wF+LoJC+ssFZvv5BgF9Igg==",
      "requires": {
        "clone-response": "^1.0.2",
        "get-stream": "^5.1.0",
        "http-cache-semantics": "^4.0.0",
        "keyv": "^3.0.0",
        "lowercase-keys": "^2.0.0",
        "normalize-url": "^4.1.0",
        "responselike": "^1.0.2"
      },
      "dependencies": {
        "get-stream": {
          "version": "5.2.0",
          "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-5.2.0.tgz",
          "integrity": "sha512-nBF+F1rAZVCu/p7rjzgA+Yb4lfYXrpl7a6VmJrU8wF9I1CKvP/QwPNZHnOlwbTkY6dvtFIzFMSyQXbLoTQPRpA==",
          "requires": {
            "pump": "^3.0.0"
          }
        },
        "lowercase-keys": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/lowercase-keys/-/lowercase-keys-2.0.0.tgz",
          "integrity": "sha512-tqNXrS78oMOE73NMxK4EMLQsQowWf8jKooH9g7xPavRT706R6bkQJ6DY2Te7QukaZsulxa30wQ7bk0pm4XiHmA=="
        }
      }
    },
    "call-bind": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/call-bind/-/call-bind-1.0.2.tgz",
      "integrity": "sha512-7O+FbCihrB5WGbFYesctwmTKae6rOiIzmz1icreWJ+0aA7LJfuqhEso2T9ncpcFtzMQtzXf2QGGueWJGTYsqrA==",
      "dev": true,
      "requires": {
        "function-bind": "^1.1.1",
        "get-intrinsic": "^1.0.2"
      }
    },
    "callsites": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/callsites/-/callsites-2.0.0.tgz",
      "integrity": "sha1-BuuE8A7qQT2oav/vrL/7Ngk7PFA=",
      "dev": true
    },
    "camelcase": {
      "version": "5.3.1",
      "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-5.3.1.tgz",
      "integrity": "sha512-L28STB170nwWS63UjtlEOE3dldQApaJXZkOI1uMFfzf3rRuPegHaHesyee+YxQ+W6SvRDQV6UrdOdRiR153wJg=="
    },
    "capture-exit": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/capture-exit/-/capture-exit-1.2.0.tgz",
      "integrity": "sha1-HF/MSJ/QqwDU8ax64QcuMXP7q28=",
      "dev": true,
      "requires": {
        "rsvp": "^3.3.3"
      }
    },
    "caseless": {
      "version": "0.12.0",
      "resolved": "https://registry.npmjs.org/caseless/-/caseless-0.12.0.tgz",
      "integrity": "sha1-G2gcIf+EAzyCZUMJBolCDRhxUdw=",
      "dev": true
    },
    "chalk": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-3.0.0.tgz",
      "integrity": "sha512-4D3B6Wf41KOYRFdszmDqMCGq5VV/uMAB273JILmO+3jAlh8X4qDtdtgCR3fxtbLEMzSx22QdhnDcJvu2u1fVwg==",
      "requires": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "dependencies": {
        "has-flag": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
        },
        "supports-color": {
          "version": "7.2.0",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
          "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
          "requires": {
            "has-flag": "^4.0.0"
          }
        }
      }
    },
    "chokidar": {
      "version": "3.5.1",
      "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.5.1.tgz",
      "integrity": "sha512-9+s+Od+W0VJJzawDma/gvBNQqkTiqYTWLuZoyAsivsI4AaWTCzHG06/TMjsf1cYe9Cb97UCEhjz7HvnPk2p/tw==",
      "requires": {
        "anymatch": "~3.1.1",
        "braces": "~3.0.2",
        "fsevents": "~2.3.1",
        "glob-parent": "~5.1.0",
        "is-binary-path": "~2.1.0",
        "is-glob": "~4.0.1",
        "normalize-path": "~3.0.0",
        "readdirp": "~3.5.0"
      }
    },
    "chownr": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/chownr/-/chownr-2.0.0.tgz",
      "integrity": "sha512-bIomtDF5KGpdogkLd9VspvFzk9KfpyyGlS8YFVZl7TGPBHL5snIOnxeshwVgPteQ9b4Eydl+pVbIyE1DcvCWgQ=="
    },
    "ci-info": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/ci-info/-/ci-info-2.0.0.tgz",
      "integrity": "sha512-5tK7EtrZ0N+OLFMthtqOj4fI2Jeb88C4CAZPu25LDVUgXJ0A3Js4PMGqrn0JU1W0Mh1/Z8wZzYPxqUrXeBboCQ=="
    },
    "class-utils": {
      "version": "0.3.6",
      "resolved": "https://registry.npmjs.org/class-utils/-/class-utils-0.3.6.tgz",
      "integrity": "sha512-qOhPa/Fj7s6TY8H8esGu5QNpMMQxz79h+urzrNYN6mn+9BnxlDGf5QZ+XeCDsxSjPqsSR56XOZOJmpeurnLMeg==",
      "dev": true,
      "requires": {
        "arr-union": "^3.1.0",
        "define-property": "^0.2.5",
        "isobject": "^3.0.0",
        "static-extend": "^0.1.1"
      },
      "dependencies": {
        "define-property": {
          "version": "0.2.5",
          "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
          "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
          "dev": true,
          "requires": {
            "is-descriptor": "^0.1.0"
          }
        },
        "isobject": {
          "version": "3.0.1",
          "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
          "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",
          "dev": true
        }
      }
    },
    "cli-boxes": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/cli-boxes/-/cli-boxes-2.2.1.tgz",
      "integrity": "sha512-y4coMcylgSCdVinjiDBuR8PCC2bLjyGTwEmPb9NHR/QaNU6EUOXcTY/s6VjGMD6ENSEaeQYHCY0GNGS5jfMwPw=="
    },
    "cliui": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/cliui/-/cliui-4.1.0.tgz",
      "integrity": "sha512-4FG+RSG9DL7uEwRUZXZn3SS34DiDPfzP0VOiEwtUWlE+AR2EIg+hSyvrIgUUfhdgR/UkAeW2QHgeP+hWrXs7jQ==",
      "dev": true,
      "requires": {
        "string-width": "^2.1.1",
        "strip-ansi": "^4.0.0",
        "wrap-ansi": "^2.0.0"
      },
      "dependencies": {
        "ansi-regex": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-3.0.0.tgz",
          "integrity": "sha1-7QMXwyIGT3lGbAKWa922Bas32Zg=",
          "dev": true
        },
        "string-width": {
          "version": "2.1.1",
          "resolved": "https://registry.npmjs.org/string-width/-/string-width-2.1.1.tgz",
          "integrity": "sha512-nOqH59deCq9SRHlxq1Aw85Jnt4w6KvLKqWVik6oA9ZklXLNIOlqg4F2yrT1MVaTjAqvVwdfeZ7w7aCvJD7ugkw==",
          "dev": true,
          "requires": {
            "is-fullwidth-code-point": "^2.0.0",
            "strip-ansi": "^4.0.0"
          }
        },
        "strip-ansi": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-4.0.0.tgz",
          "integrity": "sha1-qEeQIusaw2iocTibY1JixQXuNo8=",
          "dev": true,
          "requires": {
            "ansi-regex": "^3.0.0"
          }
        }
      }
    },
    "clone-response": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/clone-response/-/clone-response-1.0.2.tgz",
      "integrity": "sha1-0dyXOSAxTfZ/vrlCI7TuNQI56Ws=",
      "requires": {
        "mimic-response": "^1.0.0"
      }
    },
    "co": {
      "version": "4.6.0",
      "resolved": "https://registry.npmjs.org/co/-/co-4.6.0.tgz",
      "integrity": "sha1-bqa989hTrlTMuOR7+gvz+QMfsYQ=",
      "dev": true
    },
    "code-point-at": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/code-point-at/-/code-point-at-1.1.0.tgz",
      "integrity": "sha1-DQcLTQQ6W+ozovGkDi7bPZpMz3c="
    },
    "collection-visit": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/collection-visit/-/collection-visit-1.0.0.tgz",
      "integrity": "sha1-S8A3PBZLwykbTTaMgpzxqApZ3KA=",
      "dev": true,
      "requires": {
        "map-visit": "^1.0.0",
        "object-visit": "^1.0.0"
      }
    },
    "color": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/color/-/color-3.0.0.tgz",
      "integrity": "sha512-jCpd5+s0s0t7p3pHQKpnJ0TpQKKdleP71LWcA0aqiljpiuAkOSUFN/dyH8ZwF0hRmFlrIuRhufds1QyEP9EB+w==",
      "requires": {
        "color-convert": "^1.9.1",
        "color-string": "^1.5.2"
      },
      "dependencies": {
        "color-convert": {
          "version": "1.9.3",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
          "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
          "requires": {
            "color-name": "1.1.3"
          }
        },
        "color-name": {
          "version": "1.1.3",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
          "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU="
        }
      }
    },
    "color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "requires": {
        "color-name": "~1.1.4"
      }
    },
    "color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
    },
    "color-string": {
      "version": "1.5.5",
      "resolved": "https://registry.npmjs.org/color-string/-/color-string-1.5.5.tgz",
      "integrity": "sha512-jgIoum0OfQfq9Whcfc2z/VhCNcmQjWbey6qBX0vqt7YICflUmBCh9E9CiQD5GSJ+Uehixm3NUwHVhqUAWRivZg==",
      "requires": {
        "color-name": "^1.0.0",
        "simple-swizzle": "^0.2.2"
      }
    },
    "colors": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/colors/-/colors-1.4.0.tgz",
      "integrity": "sha512-a+UqTh4kgZg/SlGvfbzDHpgRu7AAQOmmqRHJnxhRZICKFUT91brVhNNt58CMWU9PsBbv3PDCZUHbVxuDiH2mtA=="
    },
    "colorspace": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/colorspace/-/colorspace-1.1.2.tgz",
      "integrity": "sha512-vt+OoIP2d76xLhjwbBaucYlNSpPsrJWPlBTtwCpQKIu6/CSMutyzX93O/Do0qzpH3YoHEes8YEFXyZ797rEhzQ==",
      "requires": {
        "color": "3.0.x",
        "text-hex": "1.0.x"
      }
    },
    "combined-stream": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/combined-stream/-/combined-stream-1.0.8.tgz",
      "integrity": "sha512-FQN4MRfuJeHf7cBbBMJFXhKSDq+2kAArBlmRBvcvFE5BB1HZKXtSFASDhdlz9zOYwxh8lDdnvmMOe/+5cdoEdg==",
      "dev": true,
      "requires": {
        "delayed-stream": "~1.0.0"
      }
    },
    "component-emitter": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/component-emitter/-/component-emitter-1.3.0.tgz",
      "integrity": "sha512-Rd3se6QB+sO1TwqZjscQrurpEPIfO0/yYnSin6Q/rD3mOutHvUrCAhJub3r90uNb+SESBuE0QYoB90YdfatsRg==",
      "dev": true
    },
    "compressible": {
      "version": "2.0.18",
      "resolved": "https://registry.npmjs.org/compressible/-/compressible-2.0.18.tgz",
      "integrity": "sha512-AF3r7P5dWxL8MxyITRMlORQNaOA2IkAFaTr4k7BUumjPtRpGDTZpl0Pb1XCO6JeDCBdp126Cgs9sMxqSjgYyRg==",
      "requires": {
        "mime-db": ">= 1.43.0 < 2"
      }
    },
    "compression": {
      "version": "1.7.4",
      "resolved": "https://registry.npmjs.org/compression/-/compression-1.7.4.tgz",
      "integrity": "sha512-jaSIDzP9pZVS4ZfQ+TzvtiWhdpFhE2RDHz8QJkpX9SIpLq88VueF5jJw6t+6CUQcAoA6t+x89MLrWAqpfDE8iQ==",
      "requires": {
        "accepts": "~1.3.5",
        "bytes": "3.0.0",
        "compressible": "~2.0.16",
        "debug": "2.6.9",
        "on-headers": "~1.0.2",
        "safe-buffer": "5.1.2",
        "vary": "~1.1.2"
      },
      "dependencies": {
        "bytes": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.0.0.tgz",
          "integrity": "sha1-0ygVQE1olpn4Wk6k+odV3ROpYEg="
        }
      }
    },
    "concat-map": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
      "integrity": "sha1-2Klr13/Wjfd5OnMDajug1UBdR3s="
    },
    "concat-stream": {
      "version": "1.6.2",
      "resolved": "https://registry.npmjs.org/concat-stream/-/concat-stream-1.6.2.tgz",
      "integrity": "sha512-27HBghJxjiZtIk3Ycvn/4kbJk/1uZuJFfuPEns6LaEvpvG1f0hTea8lilrouyo9mVc2GWdcEZ8OLoGmSADlrCw==",
      "requires": {
        "buffer-from": "^1.0.0",
        "inherits": "^2.0.3",
        "readable-stream": "^2.2.2",
        "typedarray": "^0.0.6"
      }
    },
    "config": {
      "version": "3.3.6",
      "resolved": "https://registry.npmjs.org/config/-/config-3.3.6.tgz",
      "integrity": "sha512-Hj5916C5HFawjYJat1epbyY2PlAgLpBtDUlr0MxGLgo3p5+7kylyvnRY18PqJHgnNWXcdd0eWDemT7eYWuFgwg==",
      "requires": {
        "json5": "^2.1.1"
      }
    },
    "configstore": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/configstore/-/configstore-5.0.1.tgz",
      "integrity": "sha512-aMKprgk5YhBNyH25hj8wGt2+D52Sw1DRRIzqBwLp2Ya9mFmY8KPvvtvmna8SxVR9JMZ4kzMD68N22vlaRpkeFA==",
      "requires": {
        "dot-prop": "^5.2.0",
        "graceful-fs": "^4.1.2",
        "make-dir": "^3.0.0",
        "unique-string": "^2.0.0",
        "write-file-atomic": "^3.0.0",
        "xdg-basedir": "^4.0.0"
      }
    },
    "console-control-strings": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/console-control-strings/-/console-control-strings-1.1.0.tgz",
      "integrity": "sha1-PXz0Rk22RG6mRL9LOVB/mFEAjo4="
    },
    "content-disposition": {
      "version": "0.5.3",
      "resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-0.5.3.tgz",
      "integrity": "sha512-ExO0774ikEObIAEV9kDo50o+79VCUdEB6n6lzKgGwupcVeRlhrj3qGAfwq8G6uBJjkqLrhT0qEYFcWng8z1z0g==",
      "requires": {
        "safe-buffer": "5.1.2"
      }
    },
    "content-type": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/content-type/-/content-type-1.0.4.tgz",
      "integrity": "sha512-hIP3EEPs8tB9AT1L+NUqtwOAps4mk2Zob89MWXMHjHWg9milF/j4osnnQLXBCBFBk/tvIG/tUc9mOUJiPBhPXA=="
    },
    "convert-source-map": {
      "version": "1.7.0",
      "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-1.7.0.tgz",
      "integrity": "sha512-4FJkXzKXEDB1snCFZlLP4gpC3JILicCpGbzG9f9G7tGqGCzETQ2hWPrcinA9oU4wtf2biUaEH5065UnMeR33oA==",
      "dev": true,
      "requires": {
        "safe-buffer": "~5.1.1"
      }
    },
    "cookie": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.4.0.tgz",
      "integrity": "sha512-+Hp8fLp57wnUSt0tY0tHEXh4voZRDnoIrZPqlo3DPiI4y9lwg/jqx+1Om94/W6ZaPDOUbnjOt/99w66zk+l1Xg=="
    },
    "cookie-signature": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.0.6.tgz",
      "integrity": "sha1-4wOogrNCzD7oylE6eZmXNNqzriw="
    },
    "cookiejar": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/cookiejar/-/cookiejar-2.1.2.tgz",
      "integrity": "sha512-Mw+adcfzPxcPeI+0WlvRrr/3lGVO0bD75SxX6811cxSh1Wbxx7xZBGK1eVtDf6si8rg2lhnUjsVLMFMfbRIuwA==",
      "dev": true
    },
    "copy-descriptor": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/copy-descriptor/-/copy-descriptor-0.1.1.tgz",
      "integrity": "sha1-Z29us8OZl8LuGsOpJP1hJHSPV40=",
      "dev": true
    },
    "core-js": {
      "version": "2.6.12",
      "resolved": "https://registry.npmjs.org/core-js/-/core-js-2.6.12.tgz",
      "integrity": "sha512-Kb2wC0fvsWfQrgk8HU5lW6U/Lcs8+9aaYcy4ZFc6DDlo4nZ7n70dEgE5rtR0oG6ufKDUnrwfWL1mXR5ljDatrQ==",
      "dev": true
    },
    "core-util-is": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.2.tgz",
      "integrity": "sha1-tf1UIgqivFq1eqtxQMlAdUUDwac="
    },
    "cors": {
      "version": "2.8.5",
      "resolved": "https://registry.npmjs.org/cors/-/cors-2.8.5.tgz",
      "integrity": "sha512-KIHbLJqu73RGr/hnbrO9uBeixNGuvSQjul/jdFvS/KFSIH1hWVd1ng7zOHx+YrEfInLG7q4n6GHQ9cDtxv/P6g==",
      "requires": {
        "object-assign": "^4",
        "vary": "^1"
      }
    },
    "cross-spawn": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-5.1.0.tgz",
      "integrity": "sha1-6L0O/uWPz/b4+UUQoKVUu/ojVEk=",
      "dev": true,
      "requires": {
        "lru-cache": "^4.0.1",
        "shebang-command": "^1.2.0",
        "which": "^1.2.9"
      },
      "dependencies": {
        "lru-cache": {
          "version": "4.1.5",
          "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-4.1.5.tgz",
          "integrity": "sha512-sWZlbEP2OsHNkXrMl5GYk/jKk70MBng6UU4YI/qGDYbgf6YbP4EvmqISbXCoJiRKs+1bSpFHVgQxvJ17F2li5g==",
          "dev": true,
          "requires": {
            "pseudomap": "^1.0.2",
            "yallist": "^2.1.2"
          }
        },
        "yallist": {
          "version": "2.1.2",
          "resolved": "https://registry.npmjs.org/yallist/-/yallist-2.1.2.tgz",
          "integrity": "sha1-HBH5IY8HYImkfdUS+TxmmaaoHVI=",
          "dev": true
        }
      }
    },
    "crypto-random-string": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/crypto-random-string/-/crypto-random-string-2.0.0.tgz",
      "integrity": "sha512-v1plID3y9r/lPhviJ1wrXpLeyUIGAZ2SHNYTEapm7/8A9nLPoyvVp3RK/EPFqn5kEznyWgYZNsRtYYIWbuG8KA=="
    },
    "cssom": {
      "version": "0.3.8",
      "resolved": "https://registry.npmjs.org/cssom/-/cssom-0.3.8.tgz",
      "integrity": "sha512-b0tGHbfegbhPJpxpiBPU2sCkigAqtM9O121le6bbOlgyV+NyGyCmVfJ6QW9eRjz8CpNfWEOYBIMIGRYkLwsIYg==",
      "dev": true
    },
    "cssstyle": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/cssstyle/-/cssstyle-1.4.0.tgz",
      "integrity": "sha512-GBrLZYZ4X4x6/QEoBnIrqb8B/f5l4+8me2dkom/j1Gtbxy0kBv6OGzKuAsGM75bkGwGAFkt56Iwg28S3XTZgSA==",
      "dev": true,
      "requires": {
        "cssom": "0.3.x"
      }
    },
    "dashdash": {
      "version": "1.14.1",
      "resolved": "https://registry.npmjs.org/dashdash/-/dashdash-1.14.1.tgz",
      "integrity": "sha1-hTz6D3y+L+1d4gMmuN1YEDX24vA=",
      "dev": true,
      "requires": {
        "assert-plus": "^1.0.0"
      }
    },
    "data-urls": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/data-urls/-/data-urls-1.1.0.tgz",
      "integrity": "sha512-YTWYI9se1P55u58gL5GkQHW4P6VJBJ5iBT+B5a7i2Tjadhv52paJG0qHX4A0OR6/t52odI64KP2YvFpkDOi3eQ==",
      "dev": true,
      "requires": {
        "abab": "^2.0.0",
        "whatwg-mimetype": "^2.2.0",
        "whatwg-url": "^7.0.0"
      },
      "dependencies": {
        "whatwg-url": {
          "version": "7.1.0",
          "resolved": "https://registry.npmjs.org/whatwg-url/-/whatwg-url-7.1.0.tgz",
          "integrity": "sha512-WUu7Rg1DroM7oQvGWfOiAK21n74Gg+T4elXEQYkOhtyLeWiJFoOGLXPKI/9gzIie9CtwVLm8wtw6YJdKyxSjeg==",
          "dev": true,
          "requires": {
            "lodash.sortby": "^4.7.0",
            "tr46": "^1.0.1",
            "webidl-conversions": "^4.0.2"
          }
        }
      }
    },
    "debug": {
      "version": "2.6.9",
      "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
      "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
      "requires": {
        "ms": "2.0.0"
      }
    },
    "decamelize": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/decamelize/-/decamelize-1.2.0.tgz",
      "integrity": "sha1-9lNNFRSCabIDUue+4m9QH5oZEpA=",
      "dev": true
    },
    "decode-uri-component": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/decode-uri-component/-/decode-uri-component-0.2.0.tgz",
      "integrity": "sha1-6zkTMzRYd1y4TNGh+uBiEGu4dUU=",
      "dev": true
    },
    "decompress-response": {
      "version": "3.3.0",
      "resolved": "https://registry.npmjs.org/decompress-response/-/decompress-response-3.3.0.tgz",
      "integrity": "sha1-gKTdMjdIOEv6JICDYirt7Jgq3/M=",
      "requires": {
        "mimic-response": "^1.0.0"
      }
    },
    "deep-extend": {
      "version": "0.6.0",
      "resolved": "https://registry.npmjs.org/deep-extend/-/deep-extend-0.6.0.tgz",
      "integrity": "sha512-LOHxIOaPYdHlJRtCQfDIVZtfw/ufM8+rVj649RIHzcm/vGwQRXFt6OPqIFWsm2XEMrNIEtWR64sY1LEKD2vAOA=="
    },
    "deep-is": {
      "version": "0.1.3",
      "resolved": "https://registry.npmjs.org/deep-is/-/deep-is-0.1.3.tgz",
      "integrity": "sha1-s2nW+128E+7PUk+RsHD+7cNXzzQ=",
      "dev": true
    },
    "default-require-extensions": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/default-require-extensions/-/default-require-extensions-1.0.0.tgz",
      "integrity": "sha1-836hXT4T/9m0N9M+GnW1+5eHTLg=",
      "dev": true,
      "requires": {
        "strip-bom": "^2.0.0"
      }
    },
    "defer-to-connect": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/defer-to-connect/-/defer-to-connect-1.1.3.tgz",
      "integrity": "sha512-0ISdNousHvZT2EiFlZeZAHBUvSxmKswVCEf8hW7KWgG4a8MVEu/3Vb6uWYozkjylyCxe0JBIiRB1jV45S70WVQ=="
    },
    "define-properties": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/define-properties/-/define-properties-1.1.3.tgz",
      "integrity": "sha512-3MqfYKj2lLzdMSf8ZIZE/V+Zuy+BgD6f164e8K2w7dgnpKArBDerGYpM46IYYcjnkdPNMjPk9A6VFB8+3SKlXQ==",
      "dev": true,
      "requires": {
        "object-keys": "^1.0.12"
      }
    },
    "define-property": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/define-property/-/define-property-2.0.2.tgz",
      "integrity": "sha512-jwK2UV4cnPpbcG7+VRARKTZPUWowwXA8bzH5NP6ud0oeAxyYPuGZUAC7hMugpCdz4BeSZl2Dl9k66CHJ/46ZYQ==",
      "dev": true,
      "requires": {
        "is-descriptor": "^1.0.2",
        "isobject": "^3.0.1"
      },
      "dependencies": {
        "is-accessor-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
          "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
          "dev": true,
          "requires": {
            "kind-of": "^6.0.0"
          }
        },
        "is-data-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
          "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
          "dev": true,
          "requires": {
            "kind-of": "^6.0.0"
          }
        },
        "is-descriptor": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
          "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
          "dev": true,
          "requires": {
            "is-accessor-descriptor": "^1.0.0",
            "is-data-descriptor": "^1.0.0",
            "kind-of": "^6.0.2"
          }
        },
        "isobject": {
          "version": "3.0.1",
          "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
          "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",
          "dev": true
        },
        "kind-of": {
          "version": "6.0.3",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",
          "integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw==",
          "dev": true
        }
      }
    },
    "delayed-stream": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/delayed-stream/-/delayed-stream-1.0.0.tgz",
      "integrity": "sha1-3zrhmayt+31ECqrgsp4icrJOxhk=",
      "dev": true
    },
    "delegates": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/delegates/-/delegates-1.0.0.tgz",
      "integrity": "sha1-hMbhWbgZBP3KWaDvRM2HDTElD5o="
    },
    "denque": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/denque/-/denque-1.5.0.tgz",
      "integrity": "sha512-CYiCSgIF1p6EUByQPlGkKnP1M9g0ZV3qMIrqMqZqdwazygIA/YP2vrbcyl1h/WppKJTdl1F85cXIle+394iDAQ=="
    },
    "depd": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/depd/-/depd-1.1.2.tgz",
      "integrity": "sha1-m81S4UwJd2PnSbJ0xDRu0uVgtak="
    },
    "destroy": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/destroy/-/destroy-1.0.4.tgz",
      "integrity": "sha1-l4hXRCxEdJ5CBmE+N5RiBYJqvYA="
    },
    "detect-indent": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/detect-indent/-/detect-indent-4.0.0.tgz",
      "integrity": "sha1-920GQ1LN9Docts5hnE7jqUdd4gg=",
      "dev": true,
      "requires": {
        "repeating": "^2.0.0"
      }
    },
    "detect-libc": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-1.0.3.tgz",
      "integrity": "sha1-+hN8S9aY7fVc1c0CrFWfkaTEups="
    },
    "detect-newline": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/detect-newline/-/detect-newline-2.1.0.tgz",
      "integrity": "sha1-9B8cEL5LAOh7XxPaaAdZ8sW/0+I=",
      "dev": true
    },
    "dicer": {
      "version": "0.2.5",
      "resolved": "https://registry.npmjs.org/dicer/-/dicer-0.2.5.tgz",
      "integrity": "sha1-WZbAhrszIYyBLAkL3cCc0S+stw8=",
      "requires": {
        "readable-stream": "1.1.x",
        "streamsearch": "0.1.2"
      },
      "dependencies": {
        "isarray": {
          "version": "0.0.1",
          "resolved": "https://registry.npmjs.org/isarray/-/isarray-0.0.1.tgz",
          "integrity": "sha1-ihis/Kmo9Bd+Cav8YDiTmwXR7t8="
        },
        "readable-stream": {
          "version": "1.1.14",
          "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-1.1.14.tgz",
          "integrity": "sha1-fPTFTvZI44EwhMY23SB54WbAgdk=",
          "requires": {
            "core-util-is": "~1.0.0",
            "inherits": "~2.0.1",
            "isarray": "0.0.1",
            "string_decoder": "~0.10.x"
          }
        },
        "string_decoder": {
          "version": "0.10.31",
          "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-0.10.31.tgz",
          "integrity": "sha1-YuIDvEF2bGwoyfyEMB2rHFMQ+pQ="
        }
      }
    },
    "diff": {
      "version": "3.5.0",
      "resolved": "https://registry.npmjs.org/diff/-/diff-3.5.0.tgz",
      "integrity": "sha512-A46qtFgd+g7pDZinpnwiRJtxbC1hpgf0uzP3iG89scHk0AUC7A1TGxf5OiiOUv/JMZR8GOt8hL900hV0bOy5xA==",
      "dev": true
    },
    "domexception": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/domexception/-/domexception-1.0.1.tgz",
      "integrity": "sha512-raigMkn7CJNNo6Ihro1fzG7wr3fHuYVytzquZKX5n0yizGsTcYgzdIUwj1X9pK0VvjeihV+XiclP+DjwbsSKug==",
      "dev": true,
      "requires": {
        "webidl-conversions": "^4.0.2"
      }
    },
    "dot-prop": {
      "version": "5.3.0",
      "resolved": "https://registry.npmjs.org/dot-prop/-/dot-prop-5.3.0.tgz",
      "integrity": "sha512-QM8q3zDe58hqUqjraQOmzZ1LIH9SWQJTlEKCH4kJ2oQvLZk7RbQXvtDM2XEq3fwkV9CCvvH4LA0AV+ogFsBM2Q==",
      "requires": {
        "is-obj": "^2.0.0"
      }
    },
    "duplexer3": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/duplexer3/-/duplexer3-0.1.4.tgz",
      "integrity": "sha1-7gHdHKwO08vH/b6jfcCo8c4ALOI="
    },
    "ecc-jsbn": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/ecc-jsbn/-/ecc-jsbn-0.1.2.tgz",
      "integrity": "sha1-OoOpBOVDUyh4dMVkt1SThoSamMk=",
      "dev": true,
      "requires": {
        "jsbn": "~0.1.0",
        "safer-buffer": "^2.1.0"
      }
    },
    "ecdsa-sig-formatter": {
      "version": "1.0.11",
      "resolved": "https://registry.npmjs.org/ecdsa-sig-formatter/-/ecdsa-sig-formatter-1.0.11.tgz",
      "integrity": "sha512-nagl3RYrbNv6kQkeJIpt6NJZy8twLB/2vtz6yN9Z4vRKHN4/QZJIEbqohALSgwKdnksuY3k5Addp5lg8sVoVcQ==",
      "requires": {
        "safe-buffer": "^5.0.1"
      }
    },
    "ee-first": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",
      "integrity": "sha1-WQxhFWsK4vTwJVcyoViyZrxWsh0="
    },
    "emoji-regex": {
      "version": "7.0.3",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-7.0.3.tgz",
      "integrity": "sha512-CwBLREIQ7LvYFB0WyRvwhq5N5qPhc6PMjD6bYggFlI5YyDgl+0vxq5VHbMOFqLg7hfWzmu8T5Z1QofhmTIhItA=="
    },
    "enabled": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/enabled/-/enabled-2.0.0.tgz",
      "integrity": "sha512-AKrN98kuwOzMIdAizXGI86UFBoo26CL21UM763y1h/GMSJ4/OHU9k2YlsmBpyScFo/wbLzWQJBMCW4+IO3/+OQ=="
    },
    "encodeurl": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-1.0.2.tgz",
      "integrity": "sha1-rT/0yG7C0CkyL1oCw6mmBslbP1k="
    },
    "end-of-stream": {
      "version": "1.4.4",
      "resolved": "https://registry.npmjs.org/end-of-stream/-/end-of-stream-1.4.4.tgz",
      "integrity": "sha512-+uw1inIHVPQoaVuHzRyXd21icM+cnt4CzD5rW+NC1wjOUSTOs+Te7FOv7AhN7vS9x/oIyhLP5PR1H+phQAHu5Q==",
      "requires": {
        "once": "^1.4.0"
      }
    },
    "entities": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/entities/-/entities-2.2.0.tgz",
      "integrity": "sha512-p92if5Nz619I0w+akJrLZH0MX0Pb5DX39XOwQTtXSdQQOaYH03S1uIQp4mhOZtAXrxq4ViO67YTiLBo2638o9A=="
    },
    "error-ex": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/error-ex/-/error-ex-1.3.2.tgz",
      "integrity": "sha512-7dFHNmqeFSEt2ZBsCriorKnn3Z2pj+fd9kmI6QoWw4//DL+icEBfc0U7qJCisqrTsKTjw4fNFy2pW9OqStD84g==",
      "dev": true,
      "requires": {
        "is-arrayish": "^0.2.1"
      },
      "dependencies": {
        "is-arrayish": {
          "version": "0.2.1",
          "resolved": "https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.2.1.tgz",
          "integrity": "sha1-d8mYQFJ6qOyxqLppe4BkWnqSap0=",
          "dev": true
        }
      }
    },
    "es-abstract": {
      "version": "1.18.3",
      "resolved": "https://registry.npmjs.org/es-abstract/-/es-abstract-1.18.3.tgz",
      "integrity": "sha512-nQIr12dxV7SSxE6r6f1l3DtAeEYdsGpps13dR0TwJg1S8gyp4ZPgy3FZcHBgbiQqnoqSTb+oC+kO4UQ0C/J8vw==",
      "dev": true,
      "requires": {
        "call-bind": "^1.0.2",
        "es-to-primitive": "^1.2.1",
        "function-bind": "^1.1.1",
        "get-intrinsic": "^1.1.1",
        "has": "^1.0.3",
        "has-symbols": "^1.0.2",
        "is-callable": "^1.2.3",
        "is-negative-zero": "^2.0.1",
        "is-regex": "^1.1.3",
        "is-string": "^1.0.6",
        "object-inspect": "^1.10.3",
        "object-keys": "^1.1.1",
        "object.assign": "^4.1.2",
        "string.prototype.trimend": "^1.0.4",
        "string.prototype.trimstart": "^1.0.4",
        "unbox-primitive": "^1.0.1"
      }
    },
    "es-to-primitive": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/es-to-primitive/-/es-to-primitive-1.2.1.tgz",
      "integrity": "sha512-QCOllgZJtaUo9miYBcLChTUaHNjJF3PYs1VidD7AwiEj1kYxKeQTctLAezAOH5ZKRH0g2IgPn6KwB4IT8iRpvA==",
      "dev": true,
      "requires": {
        "is-callable": "^1.1.4",
        "is-date-object": "^1.0.1",
        "is-symbol": "^1.0.2"
      }
    },
    "es6-promise": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/es6-promise/-/es6-promise-3.2.1.tgz",
      "integrity": "sha1-7FYjOGgDKQkgcXDDlEjiREndH8Q="
    },
    "escape-goat": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/escape-goat/-/escape-goat-2.1.1.tgz",
      "integrity": "sha512-8/uIhbG12Csjy2JEW7D9pHbreaVaS/OpN3ycnyvElTdwM5n6GY6W6e2IPemfvGZeUMqZ9A/3GqIZMgKnBhAw/Q=="
    },
    "escape-html": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",
      "integrity": "sha1-Aljq5NPQwJdN4cFpGI7wBR0dGYg="
    },
    "escape-string-regexp": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
      "integrity": "sha1-G2HAViGQqN/2rjuyzwIAyhMLhtQ=",
      "dev": true
    },
    "escodegen": {
      "version": "1.14.3",
      "resolved": "https://registry.npmjs.org/escodegen/-/escodegen-1.14.3.tgz",
      "integrity": "sha512-qFcX0XJkdg+PB3xjZZG/wKSuT1PnQWx57+TVSjIMmILd2yC/6ByYElPwJnslDsuWuSAp4AwJGumarAAmJch5Kw==",
      "dev": true,
      "requires": {
        "esprima": "^4.0.1",
        "estraverse": "^4.2.0",
        "esutils": "^2.0.2",
        "optionator": "^0.8.1",
        "source-map": "~0.6.1"
      },
      "dependencies": {
        "source-map": {
          "version": "0.6.1",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
          "dev": true,
          "optional": true
        }
      }
    },
    "esprima": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/esprima/-/esprima-4.0.1.tgz",
      "integrity": "sha512-eGuFFw7Upda+g4p+QHvnW0RyTX/SVeJBDM/gCtMARO0cLuT2HcEKnTPvhjV6aGeqrCB/sbNop0Kszm0jsaWU4A==",
      "dev": true
    },
    "estraverse": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-4.3.0.tgz",
      "integrity": "sha512-39nnKffWz8xN1BU/2c79n9nB9HDzo0niYUqx6xyqUnyoAnQyyWpOTdZEeiCch8BBu515t4wp9ZmgVfVhn9EBpw==",
      "dev": true
    },
    "esutils": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
      "integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==",
      "dev": true
    },
    "etag": {
      "version": "1.8.1",
      "resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",
      "integrity": "sha1-Qa4u62XvpiJorr/qg6x9eSmbCIc="
    },
    "events": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/events/-/events-1.1.1.tgz",
      "integrity": "sha1-nr23Y1rQmccNzEwqH1AEKI6L2SQ="
    },
    "exec-sh": {
      "version": "0.2.2",
      "resolved": "https://registry.npmjs.org/exec-sh/-/exec-sh-0.2.2.tgz",
      "integrity": "sha512-FIUCJz1RbuS0FKTdaAafAByGS0CPvU3R0MeHxgtl+djzCc//F8HakL8GzmVNZanasTbTAY/3DRFA0KpVqj/eAw==",
      "dev": true,
      "requires": {
        "merge": "^1.2.0"
      }
    },
    "execa": {
      "version": "0.7.0",
      "resolved": "https://registry.npmjs.org/execa/-/execa-0.7.0.tgz",
      "integrity": "sha1-lEvs00zEHuMqY6n68nrVpl/Fl3c=",
      "dev": true,
      "requires": {
        "cross-spawn": "^5.0.1",
        "get-stream": "^3.0.0",
        "is-stream": "^1.1.0",
        "npm-run-path": "^2.0.0",
        "p-finally": "^1.0.0",
        "signal-exit": "^3.0.0",
        "strip-eof": "^1.0.0"
      },
      "dependencies": {
        "get-stream": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-3.0.0.tgz",
          "integrity": "sha1-jpQ9E1jcN1VQVOy+LtsFqhdO3hQ=",
          "dev": true
        },
        "is-stream": {
          "version": "1.1.0",
          "resolved": "https://registry.npmjs.org/is-stream/-/is-stream-1.1.0.tgz",
          "integrity": "sha1-EtSj3U5o4Lec6428hBc66A2RykQ=",
          "dev": true
        }
      }
    },
    "exit": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/exit/-/exit-0.1.2.tgz",
      "integrity": "sha1-BjJjj42HfMghB9MKD/8aF8uhzQw=",
      "dev": true
    },
    "expand-brackets": {
      "version": "0.1.5",
      "resolved": "https://registry.npmjs.org/expand-brackets/-/expand-brackets-0.1.5.tgz",
      "integrity": "sha1-3wcoTjQqgHzXM6xa9yQR5YHRF3s=",
      "dev": true,
      "requires": {
        "is-posix-bracket": "^0.1.0"
      }
    },
    "expand-range": {
      "version": "1.8.2",
      "resolved": "https://registry.npmjs.org/expand-range/-/expand-range-1.8.2.tgz",
      "integrity": "sha1-opnv/TNf4nIeuujiV+x5ZE/IUzc=",
      "dev": true,
      "requires": {
        "fill-range": "^2.1.0"
      },
      "dependencies": {
        "fill-range": {
          "version": "2.2.4",
          "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-2.2.4.tgz",
          "integrity": "sha512-cnrcCbj01+j2gTG921VZPnHbjmdAf8oQV/iGeV2kZxGSyfYjjTyY79ErsK1WJWMpw6DaApEX72binqJE+/d+5Q==",
          "dev": true,
          "requires": {
            "is-number": "^2.1.0",
            "isobject": "^2.0.0",
            "randomatic": "^3.0.0",
            "repeat-element": "^1.1.2",
            "repeat-string": "^1.5.2"
          }
        },
        "is-number": {
          "version": "2.1.0",
          "resolved": "https://registry.npmjs.org/is-number/-/is-number-2.1.0.tgz",
          "integrity": "sha1-Afy7s5NGOlSPL0ZszhbezknbkI8=",
          "dev": true,
          "requires": {
            "kind-of": "^3.0.2"
          }
        }
      }
    },
    "expect": {
      "version": "22.4.3",
      "resolved": "https://registry.npmjs.org/expect/-/expect-22.4.3.tgz",
      "integrity": "sha512-XcNXEPehqn8b/jm8FYotdX0YrXn36qp4HWlrVT4ktwQas1l1LPxiVWncYnnL2eyMtKAmVIaG0XAp0QlrqJaxaA==",
      "dev": true,
      "requires": {
        "ansi-styles": "^3.2.0",
        "jest-diff": "^22.4.3",
        "jest-get-type": "^22.4.3",
        "jest-matcher-utils": "^22.4.3",
        "jest-message-util": "^22.4.3",
        "jest-regex-util": "^22.4.3"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "3.2.1",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
          "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
          "dev": true,
          "requires": {
            "color-convert": "^1.9.0"
          }
        },
        "color-convert": {
          "version": "1.9.3",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
          "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
          "dev": true,
          "requires": {
            "color-name": "1.1.3"
          }
        },
        "color-name": {
          "version": "1.1.3",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
          "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU=",
          "dev": true
        }
      }
    },
    "express": {
      "version": "4.17.1",
      "resolved": "https://registry.npmjs.org/express/-/express-4.17.1.tgz",
      "integrity": "sha512-mHJ9O79RqluphRrcw2X/GTh3k9tVv8YcoyY4Kkh4WDMUYKRZUq0h1o0w2rrrxBqM7VoeUVqgb27xlEMXTnYt4g==",
      "requires": {
        "accepts": "~1.3.7",
        "array-flatten": "1.1.1",
        "body-parser": "1.19.0",
        "content-disposition": "0.5.3",
        "content-type": "~1.0.4",
        "cookie": "0.4.0",
        "cookie-signature": "1.0.6",
        "debug": "2.6.9",
        "depd": "~1.1.2",
        "encodeurl": "~1.0.2",
        "escape-html": "~1.0.3",
        "etag": "~1.8.1",
        "finalhandler": "~1.1.2",
        "fresh": "0.5.2",
        "merge-descriptors": "1.0.1",
        "methods": "~1.1.2",
        "on-finished": "~2.3.0",
        "parseurl": "~1.3.3",
        "path-to-regexp": "0.1.7",
        "proxy-addr": "~2.0.5",
        "qs": "6.7.0",
        "range-parser": "~1.2.1",
        "safe-buffer": "5.1.2",
        "send": "0.17.1",
        "serve-static": "1.14.1",
        "setprototypeof": "1.1.1",
        "statuses": "~1.5.0",
        "type-is": "~1.6.18",
        "utils-merge": "1.0.1",
        "vary": "~1.1.2"
      }
    },
    "express-async-errors": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/express-async-errors/-/express-async-errors-3.1.1.tgz",
      "integrity": "sha512-h6aK1da4tpqWSbyCa3FxB/V6Ehd4EEB15zyQq9qe75OZBp0krinNKuH4rAY+S/U/2I36vdLAUFSjQJ+TFmODng==",
      "requires": {}
    },
    "extend": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/extend/-/extend-3.0.2.tgz",
      "integrity": "sha512-fjquC59cD7CyW6urNXK0FBufkZcoiGG80wTuPujX590cB5Ttln20E2UB4S/WARVqhXffZl2LNgS+gQdPIIim/g==",
      "dev": true
    },
    "extend-shallow": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-3.0.2.tgz",
      "integrity": "sha1-Jqcarwc7OfshJxcnRhMcJwQCjbg=",
      "dev": true,
      "requires": {
        "assign-symbols": "^1.0.0",
        "is-extendable": "^1.0.1"
      },
      "dependencies": {
        "is-extendable": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-1.0.1.tgz",
          "integrity": "sha512-arnXMxT1hhoKo9k1LZdmlNyJdDDfy2v0fXjFlmok4+i8ul/6WlbVge9bhM74OpNPQPMGUToDtz+KXa1PneJxOA==",
          "dev": true,
          "requires": {
            "is-plain-object": "^2.0.4"
          }
        }
      }
    },
    "extglob": {
      "version": "0.3.2",
      "resolved": "https://registry.npmjs.org/extglob/-/extglob-0.3.2.tgz",
      "integrity": "sha1-Lhj/PS9JqydlzskCPwEdqo2DSaE=",
      "dev": true,
      "requires": {
        "is-extglob": "^1.0.0"
      },
      "dependencies": {
        "is-extglob": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-1.0.0.tgz",
          "integrity": "sha1-rEaBd8SUNAWgkvyPKXYMb/xiBsA=",
          "dev": true
        }
      }
    },
    "extsprintf": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/extsprintf/-/extsprintf-1.3.0.tgz",
      "integrity": "sha1-lpGEQOMEGnpBT4xS48V06zw+HgU=",
      "dev": true
    },
    "fast-deep-equal": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
      "integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==",
      "dev": true
    },
    "fast-json-stable-stringify": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz",
      "integrity": "sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==",
      "dev": true
    },
    "fast-levenshtein": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz",
      "integrity": "sha1-PYpcZog6FqMMqGQ+hR8Zuqd5eRc=",
      "dev": true
    },
    "fast-safe-stringify": {
      "version": "2.0.7",
      "resolved": "https://registry.npmjs.org/fast-safe-stringify/-/fast-safe-stringify-2.0.7.tgz",
      "integrity": "sha512-Utm6CdzT+6xsDk2m8S6uL8VHxNwI6Jub+e9NYTcAms28T84pTa25GJQV9j0CY0N1rM8hK4x6grpF2BQf+2qwVA=="
    },
    "fast-xml-parser": {
      "version": "3.19.0",
      "resolved": "https://registry.npmjs.org/fast-xml-parser/-/fast-xml-parser-3.19.0.tgz",
      "integrity": "sha512-4pXwmBplsCPv8FOY1WRakF970TjNGnGnfbOnLqjlYvMiF1SR3yOHyxMR/YCXpPTOspNF5gwudqktIP4VsWkvBg=="
    },
    "fawn": {
      "version": "2.1.5",
      "resolved": "https://registry.npmjs.org/fawn/-/fawn-2.1.5.tgz",
      "integrity": "sha512-aiRBvZ0P0UtzSmNF3pcodilg9U+ofeJwa6aJzq1jPgbZqsB2k9pYa5KnXSk8KH0Dgm/99WdMoZacmUaTt2xdvw==",
      "requires": {
        "bluebird": "3.5.0",
        "gridfs-stream": "1.1.1",
        "mongoose": "4.12.3"
      },
      "dependencies": {
        "bluebird": {
          "version": "3.5.0",
          "resolved": "https://registry.npmjs.org/bluebird/-/bluebird-3.5.0.tgz",
          "integrity": "sha1-eRQg1/VR7qKJdFOop3ZT+WYG1nw="
        },
        "bson": {
          "version": "1.0.9",
          "resolved": "https://registry.npmjs.org/bson/-/bson-1.0.9.tgz",
          "integrity": "sha512-IQX9/h7WdMBIW/q/++tGd+emQr0XMdeZ6icnT/74Xk9fnabWn+gZgpE+9V+gujL3hhJOoNrnDVY7tWdzc7NUTg=="
        },
        "kareem": {
          "version": "1.5.0",
          "resolved": "https://registry.npmjs.org/kareem/-/kareem-1.5.0.tgz",
          "integrity": "sha1-4+QQHZ3P3imXadr0tNtk2JXRdEg="
        },
        "mongodb": {
          "version": "2.2.33",
          "resolved": "https://registry.npmjs.org/mongodb/-/mongodb-2.2.33.tgz",
          "integrity": "sha1-tTfEcdNKZlG0jzb9vyl1A0Dgi1A=",
          "requires": {
            "es6-promise": "3.2.1",
            "mongodb-core": "2.1.17",
            "readable-stream": "2.2.7"
          }
        },
        "mongoose": {
          "version": "4.12.3",
          "resolved": "https://registry.npmjs.org/mongoose/-/mongoose-4.12.3.tgz",
          "integrity": "sha512-hZOKfZEakCvy+84MyZAv/2EL588SHghBrkhtl+LGBRv9QkPs4SY28a376q9CyN/y0JYinNcrrFMx6lgdQatz5Q==",
          "requires": {
            "async": "2.1.4",
            "bson": "~1.0.4",
            "hooks-fixed": "2.0.0",
            "kareem": "1.5.0",
            "mongodb": "2.2.33",
            "mpath": "0.3.0",
            "mpromise": "0.5.5",
            "mquery": "2.3.2",
            "ms": "2.0.0",
            "muri": "1.3.0",
            "regexp-clone": "0.0.1",
            "sliced": "1.0.1"
          }
        },
        "mpath": {
          "version": "0.3.0",
          "resolved": "https://registry.npmjs.org/mpath/-/mpath-0.3.0.tgz",
          "integrity": "sha1-elj3iem1/TyUUgY0FXlg8mvV70Q="
        },
        "mquery": {
          "version": "2.3.2",
          "resolved": "https://registry.npmjs.org/mquery/-/mquery-2.3.2.tgz",
          "integrity": "sha512-KXWMypZSvhCuqRtza+HMQZdYw7PfFBjBTFvP31NNAq0OX0/NTIgpcDpkWQ2uTxk6vGQtwQ2elhwhs+ZvCA8OaA==",
          "requires": {
            "bluebird": "^3.5.0",
            "debug": "^2.6.9",
            "regexp-clone": "^0.0.1",
            "sliced": "0.0.5"
          },
          "dependencies": {
            "sliced": {
              "version": "0.0.5",
              "resolved": "https://registry.npmjs.org/sliced/-/sliced-0.0.5.tgz",
              "integrity": "sha1-XtwETKTrb3gW1Qui/GPiXY/kcH8="
            }
          }
        },
        "process-nextick-args": {
          "version": "1.0.7",
          "resolved": "https://registry.npmjs.org/process-nextick-args/-/process-nextick-args-1.0.7.tgz",
          "integrity": "sha1-FQ4gt1ZZCtP5EJPyWk8q2L/zC6M="
        },
        "readable-stream": {
          "version": "2.2.7",
          "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.2.7.tgz",
          "integrity": "sha1-BwV6y+JGeyIELTb5jFrVBwVOlbE=",
          "requires": {
            "buffer-shims": "~1.0.0",
            "core-util-is": "~1.0.0",
            "inherits": "~2.0.1",
            "isarray": "~1.0.0",
            "process-nextick-args": "~1.0.6",
            "string_decoder": "~1.0.0",
            "util-deprecate": "~1.0.1"
          }
        },
        "regexp-clone": {
          "version": "0.0.1",
          "resolved": "https://registry.npmjs.org/regexp-clone/-/regexp-clone-0.0.1.tgz",
          "integrity": "sha1-p8LgmJH9vzj7sQ03b7cwA+aKxYk="
        },
        "string_decoder": {
          "version": "1.0.3",
          "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.0.3.tgz",
          "integrity": "sha512-4AH6Z5fzNNBcH+6XDMfA/BTt87skxqJlO0lAh3Dker5zThcAxG6mKz+iGu308UKoPPQ8Dcqx/4JhujzltRa+hQ==",
          "requires": {
            "safe-buffer": "~5.1.0"
          }
        }
      }
    },
    "fb-watchman": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/fb-watchman/-/fb-watchman-2.0.1.tgz",
      "integrity": "sha512-DkPJKQeY6kKwmuMretBhr7G6Vodr7bFwDYTXIkfG1gjvNpaxBTQV3PbXg6bR1c1UP4jPOX0jHUbbHANL9vRjVg==",
      "dev": true,
      "requires": {
        "bser": "2.1.1"
      }
    },
    "fecha": {
      "version": "4.2.1",
      "resolved": "https://registry.npmjs.org/fecha/-/fecha-4.2.1.tgz",
      "integrity": "sha512-MMMQ0ludy/nBs1/o0zVOiKTpG7qMbonKUzjJgQFEuvq6INZ1OraKPRAWkBq5vlKLOUMpmNYG1JoN3oDPUQ9m3Q=="
    },
    "file-type": {
      "version": "3.9.0",
      "resolved": "https://registry.npmjs.org/file-type/-/file-type-3.9.0.tgz",
      "integrity": "sha1-JXoHg4TR24CHvESdEH1SpSZyuek="
    },
    "filename-regex": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/filename-regex/-/filename-regex-2.0.1.tgz",
      "integrity": "sha1-wcS5vuPglyXdsQa3XB4wH+LxiyY=",
      "dev": true
    },
    "fileset": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/fileset/-/fileset-2.0.3.tgz",
      "integrity": "sha1-jnVIqW08wjJ+5eZ0FocjozO7oqA=",
      "dev": true,
      "requires": {
        "glob": "^7.0.3",
        "minimatch": "^3.0.3"
      }
    },
    "fill-range": {
      "version": "7.0.1",
      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.0.1.tgz",
      "integrity": "sha512-qOo9F+dMUmC2Lcb4BbVvnKJxTPjCm+RRpe4gDuGrzkL7mEVl/djYSu2OdQ2Pa302N4oqkSg9ir6jaLWJ2USVpQ==",
      "requires": {
        "to-regex-range": "^5.0.1"
      }
    },
    "finalhandler": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-1.1.2.tgz",
      "integrity": "sha512-aAWcW57uxVNrQZqFXjITpW3sIUQmHGG3qSb9mUah9MgMC4NeWhNOlNjXEYq3HjRAvL6arUviZGGJsBg6z0zsWA==",
      "requires": {
        "debug": "2.6.9",
        "encodeurl": "~1.0.2",
        "escape-html": "~1.0.3",
        "on-finished": "~2.3.0",
        "parseurl": "~1.3.3",
        "statuses": "~1.5.0",
        "unpipe": "~1.0.0"
      }
    },
    "find-up": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-2.1.0.tgz",
      "integrity": "sha1-RdG35QbHF93UgndaK3eSCjwMV6c=",
      "dev": true,
      "requires": {
        "locate-path": "^2.0.0"
      }
    },
    "flushwritable": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/flushwritable/-/flushwritable-1.0.0.tgz",
      "integrity": "sha1-PjKNj95BKtR+c44751C00pAENJg="
    },
    "fn.name": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/fn.name/-/fn.name-1.1.0.tgz",
      "integrity": "sha512-GRnmB5gPyJpAhTQdSZTSp9uaPSvl09KoYcMQtsB9rQoOmzs9dH6ffeccH+Z+cv6P68Hu5bC6JjRh4Ah/mHSNRw=="
    },
    "for-each": {
      "version": "0.3.3",
      "resolved": "https://registry.npmjs.org/for-each/-/for-each-0.3.3.tgz",
      "integrity": "sha512-jqYfLp7mo9vIyQf8ykW2v7A+2N4QjeCeI5+Dz9XraiO1ign81wjiH7Fb9vSOWvQfNtmSa4H2RoQTrrXivdUZmw==",
      "dev": true,
      "requires": {
        "is-callable": "^1.1.3"
      }
    },
    "for-in": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/for-in/-/for-in-1.0.2.tgz",
      "integrity": "sha1-gQaNKVqBQuwKxybG4iAMMPttXoA=",
      "dev": true
    },
    "for-own": {
      "version": "0.1.5",
      "resolved": "https://registry.npmjs.org/for-own/-/for-own-0.1.5.tgz",
      "integrity": "sha1-UmXGgaTylNq78XyVCbZ2OqhFEM4=",
      "dev": true,
      "requires": {
        "for-in": "^1.0.1"
      }
    },
    "forever-agent": {
      "version": "0.6.1",
      "resolved": "https://registry.npmjs.org/forever-agent/-/forever-agent-0.6.1.tgz",
      "integrity": "sha1-+8cfDEGt6zf5bFd60e1C2P2sypE=",
      "dev": true
    },
    "form-data": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/form-data/-/form-data-2.3.3.tgz",
      "integrity": "sha512-1lLKB2Mu3aGP1Q/2eCOx0fNbRMe7XdwktwOruhfqqd0rIJWwN4Dh+E3hrPSlDCXnSR7UtZ1N38rVXm+6+MEhJQ==",
      "dev": true,
      "requires": {
        "asynckit": "^0.4.0",
        "combined-stream": "^1.0.6",
        "mime-types": "^2.1.12"
      }
    },
    "formidable": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/formidable/-/formidable-1.2.2.tgz",
      "integrity": "sha512-V8gLm+41I/8kguQ4/o1D3RIHRmhYFG4pnNyonvua+40rqcEmT4+V71yaZ3B457xbbgCsCfjSPi65u/W6vK1U5Q==",
      "dev": true
    },
    "forwarded": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/forwarded/-/forwarded-0.1.2.tgz",
      "integrity": "sha1-mMI9qxF1ZXuMBXPozszZGw/xjIQ="
    },
    "fragment-cache": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/fragment-cache/-/fragment-cache-0.2.1.tgz",
      "integrity": "sha1-QpD60n8T6Jvn8zeZxrxaCr//DRk=",
      "dev": true,
      "requires": {
        "map-cache": "^0.2.2"
      }
    },
    "fresh": {
      "version": "0.5.2",
      "resolved": "https://registry.npmjs.org/fresh/-/fresh-0.5.2.tgz",
      "integrity": "sha1-PYyt2Q2XZWn6g1qx+OSyOhBWBac="
    },
    "fs-minipass": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/fs-minipass/-/fs-minipass-2.1.0.tgz",
      "integrity": "sha512-V/JgOLFCS+R6Vcq0slCuaeWEdNC3ouDlJMNIsacH2VtALiu9mV4LPrHc5cDl8k5aw6J8jwgWWpiTo5RYhmIzvg==",
      "requires": {
        "minipass": "^3.0.0"
      }
    },
    "fs.realpath": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
      "integrity": "sha1-FQStJSMVjKpA20onh8sBQRmU6k8="
    },
    "fsevents": {
      "version": "2.3.2",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.2.tgz",
      "integrity": "sha512-xiqMQR4xAeHTuB9uWm+fFRcIOgKBMiOBP+eXiyT7jsgVCq1bkVygt00oASowB7EdtpOHaaPgKt812P9ab+DDKA==",
      "optional": true
    },
    "function-bind": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.1.tgz",
      "integrity": "sha512-yIovAzMX49sF8Yl58fSCWJ5svSLuaibPxXQJFLmBObTuCr0Mf1KiPopGM9NiFjiYBCbfaa2Fh6breQ6ANVTI0A==",
      "dev": true
    },
    "gauge": {
      "version": "2.7.4",
      "resolved": "https://registry.npmjs.org/gauge/-/gauge-2.7.4.tgz",
      "integrity": "sha1-LANAXHU4w51+s3sxcCLjJfsBi/c=",
      "requires": {
        "aproba": "^1.0.3",
        "console-control-strings": "^1.0.0",
        "has-unicode": "^2.0.0",
        "object-assign": "^4.1.0",
        "signal-exit": "^3.0.0",
        "string-width": "^1.0.1",
        "strip-ansi": "^3.0.1",
        "wide-align": "^1.1.0"
      },
      "dependencies": {
        "ansi-regex": {
          "version": "2.1.1",
          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz",
          "integrity": "sha1-w7M6te42DYbg5ijwRorn7yfWVN8="
        },
        "is-fullwidth-code-point": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-1.0.0.tgz",
          "integrity": "sha1-754xOG8DGn8NZDr4L95QxFfvAMs=",
          "requires": {
            "number-is-nan": "^1.0.0"
          }
        },
        "string-width": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/string-width/-/string-width-1.0.2.tgz",
          "integrity": "sha1-EYvfW4zcUaKn5w0hHgfisLmxB9M=",
          "requires": {
            "code-point-at": "^1.0.0",
            "is-fullwidth-code-point": "^1.0.0",
            "strip-ansi": "^3.0.0"
          }
        },
        "strip-ansi": {
          "version": "3.0.1",
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-3.0.1.tgz",
          "integrity": "sha1-ajhfuIU9lS1f8F0Oiq+UJ43GPc8=",
          "requires": {
            "ansi-regex": "^2.0.0"
          }
        }
      }
    },
    "get-caller-file": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/get-caller-file/-/get-caller-file-1.0.3.tgz",
      "integrity": "sha512-3t6rVToeoZfYSGd8YoLFR2DJkiQrIiUrGcjvFX2mDw3bn6k2OtwHN0TNCLbBO+w8qTvimhDkv+LSscbJY1vE6w==",
      "dev": true
    },
    "get-intrinsic": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.1.1.tgz",
      "integrity": "sha512-kWZrnVM42QCiEA2Ig1bG8zjoIMOgxWwYCEeNdwY6Tv/cOSeGpcoX4pXHfKUxNKVoArnrEr2e9srnAxxGIraS9Q==",
      "dev": true,
      "requires": {
        "function-bind": "^1.1.1",
        "has": "^1.0.3",
        "has-symbols": "^1.0.1"
      }
    },
    "get-stream": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-4.1.0.tgz",
      "integrity": "sha512-GMat4EJ5161kIy2HevLlr4luNjBgvmj413KaQA7jt4V8B4RDsfpHk7WQ9GVqfYyyx8OS/L66Kox+rJRNklLK7w==",
      "requires": {
        "pump": "^3.0.0"
      }
    },
    "get-value": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/get-value/-/get-value-2.0.6.tgz",
      "integrity": "sha1-3BXKHGcjh8p2vTesCjlbogQqLCg=",
      "dev": true
    },
    "getpass": {
      "version": "0.1.7",
      "resolved": "https://registry.npmjs.org/getpass/-/getpass-0.1.7.tgz",
      "integrity": "sha1-Xv+OPmhNVprkyysSgmBOi6YhSfo=",
      "dev": true,
      "requires": {
        "assert-plus": "^1.0.0"
      }
    },
    "glob": {
      "version": "7.1.7",
      "resolved": "https://registry.npmjs.org/glob/-/glob-7.1.7.tgz",
      "integrity": "sha512-OvD9ENzPLbegENnYP5UUfJIirTg4+XwMWGaQfQTY0JenxNvvIKP3U3/tAQSPIu/lHxXYSZmpXlUHeqAIdKzBLQ==",
      "requires": {
        "fs.realpath": "^1.0.0",
        "inflight": "^1.0.4",
        "inherits": "2",
        "minimatch": "^3.0.4",
        "once": "^1.3.0",
        "path-is-absolute": "^1.0.0"
      }
    },
    "glob-base": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/glob-base/-/glob-base-0.3.0.tgz",
      "integrity": "sha1-27Fk9iIbHAscz4Kuoyi0l98Oo8Q=",
      "dev": true,
      "requires": {
        "glob-parent": "^2.0.0",
        "is-glob": "^2.0.0"
      },
      "dependencies": {
        "glob-parent": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-2.0.0.tgz",
          "integrity": "sha1-gTg9ctsFT8zPUzbaqQLxgvbtuyg=",
          "dev": true,
          "requires": {
            "is-glob": "^2.0.0"
          }
        },
        "is-extglob": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-1.0.0.tgz",
          "integrity": "sha1-rEaBd8SUNAWgkvyPKXYMb/xiBsA=",
          "dev": true
        },
        "is-glob": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-2.0.1.tgz",
          "integrity": "sha1-0Jb5JqPe1WAPP9/ZEZjLCIjC2GM=",
          "dev": true,
          "requires": {
            "is-extglob": "^1.0.0"
          }
        }
      }
    },
    "glob-parent": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
      "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
      "requires": {
        "is-glob": "^4.0.1"
      }
    },
    "global-dirs": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/global-dirs/-/global-dirs-2.1.0.tgz",
      "integrity": "sha512-MG6kdOUh/xBnyo9cJFeIKkLEc1AyFq42QTU4XiX51i2NEdxLxLWXIjEjmqKeSuKR7pAZjTqUVoT2b2huxVLgYQ==",
      "requires": {
        "ini": "1.3.7"
      }
    },
    "globals": {
      "version": "9.18.0",
      "resolved": "https://registry.npmjs.org/globals/-/globals-9.18.0.tgz",
      "integrity": "sha512-S0nG3CLEQiY/ILxqtztTWH/3iRRdyBLw6KMDxnKMchrtbj2OFmehVh0WUCfW3DUrIgx/qFrJPICrq4Z4sTR9UQ==",
      "dev": true
    },
    "got": {
      "version": "9.6.0",
      "resolved": "https://registry.npmjs.org/got/-/got-9.6.0.tgz",
      "integrity": "sha512-R7eWptXuGYxwijs0eV+v3o6+XH1IqVK8dJOEecQfTmkncw9AV4dcw/Dhxi8MdlqPthxxpZyizMzyg8RTmEsG+Q==",
      "requires": {
        "@sindresorhus/is": "^0.14.0",
        "@szmarczak/http-timer": "^1.1.2",
        "cacheable-request": "^6.0.0",
        "decompress-response": "^3.3.0",
        "duplexer3": "^0.1.4",
        "get-stream": "^4.1.0",
        "lowercase-keys": "^1.0.1",
        "mimic-response": "^1.0.1",
        "p-cancelable": "^1.0.0",
        "to-readable-stream": "^1.0.0",
        "url-parse-lax": "^3.0.0"
      }
    },
    "graceful-fs": {
      "version": "4.2.6",
      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.6.tgz",
      "integrity": "sha512-nTnJ528pbqxYanhpDYsi4Rd8MAeaBA67+RZ10CM1m3bTAVFEDcd5AuA4a6W5YkGZ1iNXHzZz8T6TBKLeBuNriQ=="
    },
    "gridfs-stream": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/gridfs-stream/-/gridfs-stream-1.1.1.tgz",
      "integrity": "sha1-PdOhAOwgIaGBKC9utGcJY2B034k=",
      "requires": {
        "flushwritable": "^1.0.0"
      }
    },
    "growly": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/growly/-/growly-1.3.0.tgz",
      "integrity": "sha1-8QdIy+dq+WS3yWyTxrzCivEgwIE=",
      "dev": true
    },
    "handlebars": {
      "version": "4.7.7",
      "resolved": "https://registry.npmjs.org/handlebars/-/handlebars-4.7.7.tgz",
      "integrity": "sha512-aAcXm5OAfE/8IXkcZvCepKU3VzW1/39Fb5ZuqMtgI/hT8X2YgoMvBY5dLhq/cpOvw7Lk1nK/UF71aLG/ZnVYRA==",
      "dev": true,
      "requires": {
        "minimist": "^1.2.5",
        "neo-async": "^2.6.0",
        "source-map": "^0.6.1",
        "uglify-js": "^3.1.4",
        "wordwrap": "^1.0.0"
      },
      "dependencies": {
        "source-map": {
          "version": "0.6.1",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
          "dev": true
        }
      }
    },
    "har-schema": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/har-schema/-/har-schema-2.0.0.tgz",
      "integrity": "sha1-qUwiJOvKwEeCoNkDVSHyRzW37JI=",
      "dev": true
    },
    "har-validator": {
      "version": "5.1.5",
      "resolved": "https://registry.npmjs.org/har-validator/-/har-validator-5.1.5.tgz",
      "integrity": "sha512-nmT2T0lljbxdQZfspsno9hgrG3Uir6Ks5afism62poxqBM6sDnMEuPmzTq8XN0OEwqKLLdh1jQI3qyE66Nzb3w==",
      "dev": true,
      "requires": {
        "ajv": "^6.12.3",
        "har-schema": "^2.0.0"
      }
    },
    "has": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/has/-/has-1.0.3.tgz",
      "integrity": "sha512-f2dvO0VU6Oej7RkWJGrehjbzMAjFp5/VKPp5tTpWIV4JHHZK1/BxbFRtf/siA2SWTe09caDmVtYYzWEIbBS4zw==",
      "dev": true,
      "requires": {
        "function-bind": "^1.1.1"
      }
    },
    "has-ansi": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/has-ansi/-/has-ansi-2.0.0.tgz",
      "integrity": "sha1-NPUEnOHs3ysGSa8+8k5F7TVBbZE=",
      "dev": true,
      "requires": {
        "ansi-regex": "^2.0.0"
      },
      "dependencies": {
        "ansi-regex": {
          "version": "2.1.1",
          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz",
          "integrity": "sha1-w7M6te42DYbg5ijwRorn7yfWVN8=",
          "dev": true
        }
      }
    },
    "has-bigints": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/has-bigints/-/has-bigints-1.0.1.tgz",
      "integrity": "sha512-LSBS2LjbNBTf6287JEbEzvJgftkF5qFkmCo9hDRpAzKhUOlJ+hx8dd4USs00SgsUNwc4617J9ki5YtEClM2ffA==",
      "dev": true
    },
    "has-flag": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
      "integrity": "sha1-tdRU3CGZriJWmfNGfloH87lVuv0="
    },
    "has-symbols": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.0.2.tgz",
      "integrity": "sha512-chXa79rL/UC2KlX17jo3vRGz0azaWEx5tGqZg5pO3NUyEJVB17dMruQlzCCOfUvElghKcm5194+BCRvi2Rv/Gw==",
      "dev": true
    },
    "has-unicode": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/has-unicode/-/has-unicode-2.0.1.tgz",
      "integrity": "sha1-4Ob+aijPUROIVeCG0Wkedx3iqLk="
    },
    "has-value": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/has-value/-/has-value-1.0.0.tgz",
      "integrity": "sha1-GLKB2lhbHFxR3vJMkw7SmgvmsXc=",
      "dev": true,
      "requires": {
        "get-value": "^2.0.6",
        "has-values": "^1.0.0",
        "isobject": "^3.0.0"
      },
      "dependencies": {
        "isobject": {
          "version": "3.0.1",
          "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
          "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",
          "dev": true
        }
      }
    },
    "has-values": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/has-values/-/has-values-1.0.0.tgz",
      "integrity": "sha1-lbC2P+whRmGab+V/51Yo1aOe/k8=",
      "dev": true,
      "requires": {
        "is-number": "^3.0.0",
        "kind-of": "^4.0.0"
      },
      "dependencies": {
        "is-number": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/is-number/-/is-number-3.0.0.tgz",
          "integrity": "sha1-JP1iAaR4LPUFYcgQJ2r8fRLXEZU=",
          "dev": true,
          "requires": {
            "kind-of": "^3.0.2"
          },
          "dependencies": {
            "kind-of": {
              "version": "3.2.2",
              "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
              "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
              "dev": true,
              "requires": {
                "is-buffer": "^1.1.5"
              }
            }
          }
        },
        "kind-of": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-4.0.0.tgz",
          "integrity": "sha1-IIE989cSkosgc3hpGkUGb65y3Vc=",
          "dev": true,
          "requires": {
            "is-buffer": "^1.1.5"
          }
        }
      }
    },
    "has-yarn": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/has-yarn/-/has-yarn-2.1.0.tgz",
      "integrity": "sha512-UqBRqi4ju7T+TqGNdqAO0PaSVGsDGJUBQvk9eUWNGRY1CFGDzYhLWoM7JQEemnlvVcv/YEmc2wNW8BC24EnUsw=="
    },
    "helmet": {
      "version": "4.6.0",
      "resolved": "https://registry.npmjs.org/helmet/-/helmet-4.6.0.tgz",
      "integrity": "sha512-HVqALKZlR95ROkrnesdhbbZJFi/rIVSoNq6f3jA/9u6MIbTsPh3xZwihjeI5+DO/2sOV6HMHooXcEOuwskHpTg=="
    },
    "hoek": {
      "version": "5.0.4",
      "resolved": "https://registry.npmjs.org/hoek/-/hoek-5.0.4.tgz",
      "integrity": "sha512-Alr4ZQgoMlnere5FZJsIyfIjORBqZll5POhDsF4q64dPuJR6rNxXdDxtHSQq8OXRurhmx+PWYEE8bXRROY8h0w=="
    },
    "home-or-tmp": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/home-or-tmp/-/home-or-tmp-2.0.0.tgz",
      "integrity": "sha1-42w/LSyufXRqhX440Y1fMqeILbg=",
      "dev": true,
      "requires": {
        "os-homedir": "^1.0.0",
        "os-tmpdir": "^1.0.1"
      }
    },
    "hooks-fixed": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/hooks-fixed/-/hooks-fixed-2.0.0.tgz",
      "integrity": "sha1-oB2JTVKsf2WZu7H2PfycQR33DLo="
    },
    "hosted-git-info": {
      "version": "2.8.9",
      "resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-2.8.9.tgz",
      "integrity": "sha512-mxIDAb9Lsm6DoOJ7xH+5+X4y1LU/4Hi50L9C5sIswK3JzULS4bwk1FvjdBgvYR4bzT4tuUQiC15FE2f5HbLvYw==",
      "dev": true
    },
    "html-comment-regex": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/html-comment-regex/-/html-comment-regex-1.1.2.tgz",
      "integrity": "sha512-P+M65QY2JQ5Y0G9KKdlDpo0zK+/OHptU5AaBwUfAIDJZk1MYf32Frm84EcOytfJE0t5JvkAnKlmjsXDnWzCJmQ=="
    },
    "html-encoding-sniffer": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/html-encoding-sniffer/-/html-encoding-sniffer-1.0.2.tgz",
      "integrity": "sha512-71lZziiDnsuabfdYiUeWdCVyKuqwWi23L8YeIgV9jSSZHCtb6wB1BKWooH7L3tn4/FuZJMVWyNaIDr4RGmaSYw==",
      "dev": true,
      "requires": {
        "whatwg-encoding": "^1.0.1"
      }
    },
    "http-cache-semantics": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/http-cache-semantics/-/http-cache-semantics-4.1.0.tgz",
      "integrity": "sha512-carPklcUh7ROWRK7Cv27RPtdhYhUsela/ue5/jKzjegVvXDqM2ILE9Q2BGn9JZJh1g87cp56su/FgQSzcWS8cQ=="
    },
    "http-errors": {
      "version": "1.7.2",
      "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-1.7.2.tgz",
      "integrity": "sha512-uUQBt3H/cSIVfch6i1EuPNy/YsRSOUBXTVfZ+yR7Zjez3qjBz6i9+i4zjNaoqcoFVI4lQJ5plg63TvGfRSDCRg==",
      "requires": {
        "depd": "~1.1.2",
        "inherits": "2.0.3",
        "setprototypeof": "1.1.1",
        "statuses": ">= 1.5.0 < 2",
        "toidentifier": "1.0.0"
      }
    },
    "http-signature": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/http-signature/-/http-signature-1.2.0.tgz",
      "integrity": "sha1-muzZJRFHcvPZW2WmCruPfBj7rOE=",
      "dev": true,
      "requires": {
        "assert-plus": "^1.0.0",
        "jsprim": "^1.2.2",
        "sshpk": "^1.7.0"
      }
    },
    "https-proxy-agent": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/https-proxy-agent/-/https-proxy-agent-5.0.0.tgz",
      "integrity": "sha512-EkYm5BcKUGiduxzSt3Eppko+PiNWNEpa4ySk9vTC6wDsQJW9rHSa+UhGNJoRYp7bz6Ht1eaRIa6QaJqO5rCFbA==",
      "requires": {
        "agent-base": "6",
        "debug": "4"
      },
      "dependencies": {
        "debug": {
          "version": "4.3.1",
          "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.1.tgz",
          "integrity": "sha512-doEwdvm4PCeK4K3RQN2ZC2BYUBaxwLARCqZmMjtF8a51J2Rb0xpVloFRnCODwqjpwnAoao4pelN8l3RJdv3gRQ==",
          "requires": {
            "ms": "2.1.2"
          }
        },
        "ms": {
          "version": "2.1.2",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
          "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
        }
      }
    },
    "iconv-lite": {
      "version": "0.4.24",
      "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz",
      "integrity": "sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==",
      "requires": {
        "safer-buffer": ">= 2.1.2 < 3"
      }
    },
    "ieee754": {
      "version": "1.1.13",
      "resolved": "https://registry.npmjs.org/ieee754/-/ieee754-1.1.13.tgz",
      "integrity": "sha512-4vf7I2LYV/HaWerSo3XmlMkp5eZ83i+/CDluXi/IGTs/O1sejBNhTtnxzmRZfvOUqj7lZjqHkeTvpgSFDlWZTg=="
    },
    "ignore-by-default": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/ignore-by-default/-/ignore-by-default-1.0.1.tgz",
      "integrity": "sha1-SMptcvbGo68Aqa1K5odr44ieKwk="
    },
    "import-lazy": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/import-lazy/-/import-lazy-2.1.0.tgz",
      "integrity": "sha1-BWmOPUXIjo1+nZLLBYTnfwlvPkM="
    },
    "import-local": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/import-local/-/import-local-1.0.0.tgz",
      "integrity": "sha512-vAaZHieK9qjGo58agRBg+bhHX3hoTZU/Oa3GESWLz7t1U62fk63aHuDJJEteXoDeTCcPmUT+z38gkHPZkkmpmQ==",
      "dev": true,
      "requires": {
        "pkg-dir": "^2.0.0",
        "resolve-cwd": "^2.0.0"
      }
    },
    "imurmurhash": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
      "integrity": "sha1-khi5srkoojixPcT7a21XbyMUU+o="
    },
    "inflight": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
      "integrity": "sha1-Sb1jMdfQLQwJvJEKEHW6gWW1bfk=",
      "requires": {
        "once": "^1.3.0",
        "wrappy": "1"
      }
    },
    "inherits": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.3.tgz",
      "integrity": "sha1-Yzwsg+PaQqUC9SRmAiSA9CCCYd4="
    },
    "ini": {
      "version": "1.3.7",
      "resolved": "https://registry.npmjs.org/ini/-/ini-1.3.7.tgz",
      "integrity": "sha512-iKpRpXP+CrP2jyrxvg1kMUpXDyRUFDWurxbnVT1vQPx+Wz9uCYsMIqYuSBLV+PAaZG/d7kRLKRFc9oDMsH+mFQ=="
    },
    "invariant": {
      "version": "2.2.4",
      "resolved": "https://registry.npmjs.org/invariant/-/invariant-2.2.4.tgz",
      "integrity": "sha512-phJfQVBuaJM5raOpJjSfkiD6BpbCE4Ns//LaXl6wGYtUBY83nWS6Rf9tXm2e8VaK60JEjYldbPif/A2B1C2gNA==",
      "dev": true,
      "requires": {
        "loose-envify": "^1.0.0"
      }
    },
    "invert-kv": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/invert-kv/-/invert-kv-1.0.0.tgz",
      "integrity": "sha1-EEqOSqym09jNFXqO+L+rLXo//bY=",
      "dev": true
    },
    "ipaddr.js": {
      "version": "1.9.1",
      "resolved": "https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-1.9.1.tgz",
      "integrity": "sha512-0KI/607xoxSToH7GjN1FfSbLoU0+btTicjsQSWQlh/hZykN8KpmMf7uYwPW3R+akZ6R/w18ZlXSHBYXiYUPO3g=="
    },
    "is-accessor-descriptor": {
      "version": "0.1.6",
      "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-0.1.6.tgz",
      "integrity": "sha1-qeEss66Nh2cn7u84Q/igiXtcmNY=",
      "dev": true,
      "requires": {
        "kind-of": "^3.0.2"
      }
    },
    "is-arrayish": {
      "version": "0.3.2",
      "resolved": "https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.3.2.tgz",
      "integrity": "sha512-eVRqCvVlZbuw3GrM63ovNSNAeA1K16kaR/LRY/92w0zxQ5/1YzwblUX652i4Xs9RwAGjW9d9y6X88t8OaAJfWQ=="
    },
    "is-bigint": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/is-bigint/-/is-bigint-1.0.2.tgz",
      "integrity": "sha512-0JV5+SOCQkIdzjBK9buARcV804Ddu7A0Qet6sHi3FimE9ne6m4BGQZfRn+NZiXbBk4F4XmHfDZIipLj9pX8dSA==",
      "dev": true
    },
    "is-binary-path": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-2.1.0.tgz",
      "integrity": "sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==",
      "requires": {
        "binary-extensions": "^2.0.0"
      }
    },
    "is-boolean-object": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/is-boolean-object/-/is-boolean-object-1.1.1.tgz",
      "integrity": "sha512-bXdQWkECBUIAcCkeH1unwJLIpZYaa5VvuygSyS/c2lf719mTKZDU5UdDRlpd01UjADgmW8RfqaP+mRaVPdr/Ng==",
      "dev": true,
      "requires": {
        "call-bind": "^1.0.2"
      }
    },
    "is-buffer": {
      "version": "1.1.6",
      "resolved": "https://registry.npmjs.org/is-buffer/-/is-buffer-1.1.6.tgz",
      "integrity": "sha512-NcdALwpXkTm5Zvvbk7owOUSvVvBKDgKP5/ewfXEznmQFfs4ZRmanOeKBTjRVjka3QFoN6XJ+9F3USqfHqTaU5w==",
      "dev": true
    },
    "is-callable": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/is-callable/-/is-callable-1.2.3.tgz",
      "integrity": "sha512-J1DcMe8UYTBSrKezuIUTUwjXsho29693unXM2YhJUTR2txK/eG47bvNa/wipPFmZFgr/N6f1GA66dv0mEyTIyQ==",
      "dev": true
    },
    "is-ci": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/is-ci/-/is-ci-2.0.0.tgz",
      "integrity": "sha512-YfJT7rkpQB0updsdHLGWrvhBJfcfzNNawYDNIyQXJz0IViGf75O8EBPKSdvw2rF+LGCsX4FZ8tcr3b19LcZq4w==",
      "requires": {
        "ci-info": "^2.0.0"
      }
    },
    "is-core-module": {
      "version": "2.4.0",
      "resolved": "https://registry.npmjs.org/is-core-module/-/is-core-module-2.4.0.tgz",
      "integrity": "sha512-6A2fkfq1rfeQZjxrZJGerpLCTHRNEBiSgnu0+obeJpEPZRUooHgsizvzv0ZjJwOz3iWIHdJtVWJ/tmPr3D21/A==",
      "dev": true,
      "requires": {
        "has": "^1.0.3"
      }
    },
    "is-data-descriptor": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-0.1.4.tgz",
      "integrity": "sha1-C17mSDiOLIYCgueT8YVv7D8wG1Y=",
      "dev": true,
      "requires": {
        "kind-of": "^3.0.2"
      }
    },
    "is-date-object": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/is-date-object/-/is-date-object-1.0.4.tgz",
      "integrity": "sha512-/b4ZVsG7Z5XVtIxs/h9W8nvfLgSAyKYdtGWQLbqy6jA1icmgjf8WCoTKgeS4wy5tYaPePouzFMANbnj94c2Z+A==",
      "dev": true
    },
    "is-descriptor": {
      "version": "0.1.6",
      "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-0.1.6.tgz",
      "integrity": "sha512-avDYr0SB3DwO9zsMov0gKCESFYqCnE4hq/4z3TdUlukEy5t9C0YRq7HLrsN52NAcqXKaepeCD0n+B0arnVG3Hg==",
      "dev": true,
      "requires": {
        "is-accessor-descriptor": "^0.1.6",
        "is-data-descriptor": "^0.1.4",
        "kind-of": "^5.0.0"
      },
      "dependencies": {
        "kind-of": {
          "version": "5.1.0",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-5.1.0.tgz",
          "integrity": "sha512-NGEErnH6F2vUuXDh+OlbcKW7/wOcfdRHaZ7VWtqCztfHri/++YKmP51OdWeGPuqCOba6kk2OTe5d02VmTB80Pw==",
          "dev": true
        }
      }
    },
    "is-dotfile": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/is-dotfile/-/is-dotfile-1.0.3.tgz",
      "integrity": "sha1-pqLzL/0t+wT1yiXs0Pa4PPeYoeE=",
      "dev": true
    },
    "is-equal-shallow": {
      "version": "0.1.3",
      "resolved": "https://registry.npmjs.org/is-equal-shallow/-/is-equal-shallow-0.1.3.tgz",
      "integrity": "sha1-IjgJj8Ih3gvPpdnqxMRdY4qhxTQ=",
      "dev": true,
      "requires": {
        "is-primitive": "^2.0.0"
      }
    },
    "is-extendable": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-0.1.1.tgz",
      "integrity": "sha1-YrEQ4omkcUGOPsNqYX1HLjAd/Ik=",
      "dev": true
    },
    "is-extglob": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
      "integrity": "sha1-qIwCU1eR8C7TfHahueqXc8gz+MI="
    },
    "is-finite": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-finite/-/is-finite-1.1.0.tgz",
      "integrity": "sha512-cdyMtqX/BOqqNBBiKlIVkytNHm49MtMlYyn1zxzvJKWmFMlGzm+ry5BBfYyeY9YmNKbRSo/o7OX9w9ale0wg3w==",
      "dev": true
    },
    "is-fullwidth-code-point": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-2.0.0.tgz",
      "integrity": "sha1-o7MKXE8ZkYMWeqq5O+764937ZU8="
    },
    "is-generator-fn": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-generator-fn/-/is-generator-fn-1.0.0.tgz",
      "integrity": "sha1-lp1J4bszKfa7fwkIm+JleLLd1Go=",
      "dev": true
    },
    "is-glob": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.1.tgz",
      "integrity": "sha512-5G0tKtBTFImOqDnLB2hG6Bp2qcKEFduo4tZu9MT/H6NQv/ghhy30o55ufafxJ/LdH79LLs2Kfrn85TLKyA7BUg==",
      "requires": {
        "is-extglob": "^2.1.1"
      }
    },
    "is-installed-globally": {
      "version": "0.3.2",
      "resolved": "https://registry.npmjs.org/is-installed-globally/-/is-installed-globally-0.3.2.tgz",
      "integrity": "sha512-wZ8x1js7Ia0kecP/CHM/3ABkAmujX7WPvQk6uu3Fly/Mk44pySulQpnHG46OMjHGXApINnV4QhY3SWnECO2z5g==",
      "requires": {
        "global-dirs": "^2.0.1",
        "is-path-inside": "^3.0.1"
      }
    },
    "is-negative-zero": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/is-negative-zero/-/is-negative-zero-2.0.1.tgz",
      "integrity": "sha512-2z6JzQvZRa9A2Y7xC6dQQm4FSTSTNWjKIYYTt4246eMTJmIo0Q+ZyOsU66X8lxK1AbB92dFeglPLrhwpeRKO6w==",
      "dev": true
    },
    "is-npm": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/is-npm/-/is-npm-4.0.0.tgz",
      "integrity": "sha512-96ECIfh9xtDDlPylNPXhzjsykHsMJZ18ASpaWzQyBr4YRTcVjUvzaHayDAES2oU/3KpljhHUjtSRNiDwi0F0ig=="
    },
    "is-number": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
      "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng=="
    },
    "is-number-object": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/is-number-object/-/is-number-object-1.0.5.tgz",
      "integrity": "sha512-RU0lI/n95pMoUKu9v1BZP5MBcZuNSVJkMkAG2dJqC4z2GlkGUNeH68SuHuBKBD/XFe+LHZ+f9BKkLET60Niedw==",
      "dev": true
    },
    "is-obj": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/is-obj/-/is-obj-2.0.0.tgz",
      "integrity": "sha512-drqDG3cbczxxEJRoOXcOjtdp1J/lyp1mNn0xaznRs8+muBhgQcrnbspox5X5fOw0HnMnbfDzvnEMEtqDEJEo8w=="
    },
    "is-path-inside": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/is-path-inside/-/is-path-inside-3.0.3.tgz",
      "integrity": "sha512-Fd4gABb+ycGAmKou8eMftCupSir5lRxqf4aD/vd0cD2qc4HL07OjCeuHMr8Ro4CoMaeCKDB0/ECBOVWjTwUvPQ=="
    },
    "is-plain-object": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/is-plain-object/-/is-plain-object-2.0.4.tgz",
      "integrity": "sha512-h5PpgXkWitc38BBMYawTYMWJHFZJVnBquFE57xFpjB8pJFiF6gZ+bU+WyI/yqXiFR5mdLsgYNaPe8uao6Uv9Og==",
      "dev": true,
      "requires": {
        "isobject": "^3.0.1"
      },
      "dependencies": {
        "isobject": {
          "version": "3.0.1",
          "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
          "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",
          "dev": true
        }
      }
    },
    "is-posix-bracket": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/is-posix-bracket/-/is-posix-bracket-0.1.1.tgz",
      "integrity": "sha1-MzTceXdDaOkvAW5vvAqI9c1ua8Q=",
      "dev": true
    },
    "is-primitive": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/is-primitive/-/is-primitive-2.0.0.tgz",
      "integrity": "sha1-IHurkWOEmcB7Kt8kCkGochADRXU=",
      "dev": true
    },
    "is-regex": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/is-regex/-/is-regex-1.1.3.tgz",
      "integrity": "sha512-qSVXFz28HM7y+IWX6vLCsexdlvzT1PJNFSBuaQLQ5o0IEw8UDYW6/2+eCMVyIsbM8CNLX2a/QWmSpyxYEHY7CQ==",
      "dev": true,
      "requires": {
        "call-bind": "^1.0.2",
        "has-symbols": "^1.0.2"
      }
    },
    "is-stream": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/is-stream/-/is-stream-2.0.0.tgz",
      "integrity": "sha512-XCoy+WlUr7d1+Z8GgSuXmpuUFC9fOhRXglJMx+dwLKTkL44Cjd4W1Z5P+BQZpr+cR93aGP4S/s7Ftw6Nd/kiEw=="
    },
    "is-string": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/is-string/-/is-string-1.0.6.tgz",
      "integrity": "sha512-2gdzbKUuqtQ3lYNrUTQYoClPhm7oQu4UdpSZMp1/DGgkHBT8E2Z1l0yMdb6D4zNAxwDiMv8MdulKROJGNl0Q0w==",
      "dev": true
    },
    "is-svg": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/is-svg/-/is-svg-2.1.0.tgz",
      "integrity": "sha1-z2EJDaDZ77yrhyLeum8DIgjbsOk=",
      "requires": {
        "html-comment-regex": "^1.1.0"
      }
    },
    "is-symbol": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/is-symbol/-/is-symbol-1.0.4.tgz",
      "integrity": "sha512-C/CPBqKWnvdcxqIARxyOh4v1UUEOCHpgDa0WYgpKDFMszcrPcffg5uhwSgPCLD2WWxmq6isisz87tzT01tuGhg==",
      "dev": true,
      "requires": {
        "has-symbols": "^1.0.2"
      }
    },
    "is-typedarray": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-typedarray/-/is-typedarray-1.0.0.tgz",
      "integrity": "sha1-5HnICFjfDBsR3dppQPlgEfzaSpo="
    },
    "is-utf8": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/is-utf8/-/is-utf8-0.2.1.tgz",
      "integrity": "sha1-Sw2hRCEE0bM2NA6AeX6GXPOffXI=",
      "dev": true
    },
    "is-windows": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/is-windows/-/is-windows-1.0.2.tgz",
      "integrity": "sha512-eXK1UInq2bPmjyX6e3VHIzMLobc4J94i4AWn+Hpq3OU5KkrRC96OAcR3PRJ/pGu6m8TRnBHP9dkXQVsT/COVIA==",
      "dev": true
    },
    "is-wsl": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-wsl/-/is-wsl-1.1.0.tgz",
      "integrity": "sha1-HxbkqiKwTRM2tmGIpmrzxgDDpm0=",
      "dev": true
    },
    "is-yarn-global": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/is-yarn-global/-/is-yarn-global-0.3.0.tgz",
      "integrity": "sha512-VjSeb/lHmkoyd8ryPVIKvOCn4D1koMqY+vqyjjUfc3xyKtP4dYOxM44sZrnqQSzSds3xyOrUTLTC9LVCVgLngw=="
    },
    "isarray": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
      "integrity": "sha1-u5NdSFgsuhaMBoNJV6VKPgcSTxE="
    },
    "isemail": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/isemail/-/isemail-3.2.0.tgz",
      "integrity": "sha512-zKqkK+O+dGqevc93KNsbZ/TqTUFd46MwWjYOoMrjIMZ51eU7DtQG3Wmd9SQQT7i7RVnuTPEiYEWHU3MSbxC1Tg==",
      "requires": {
        "punycode": "2.x.x"
      }
    },
    "isexe": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
      "integrity": "sha1-6PvzdNxVb/iUehDcsFctYz8s+hA=",
      "dev": true
    },
    "isobject": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/isobject/-/isobject-2.1.0.tgz",
      "integrity": "sha1-8GVWEJaj8dou9GJy+BXIQNh+DIk=",
      "dev": true,
      "requires": {
        "isarray": "1.0.0"
      }
    },
    "isstream": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/isstream/-/isstream-0.1.2.tgz",
      "integrity": "sha1-R+Y/evVa+m+S4VAOaQ64uFKcCZo=",
      "dev": true
    },
    "istanbul-api": {
      "version": "1.3.7",
      "resolved": "https://registry.npmjs.org/istanbul-api/-/istanbul-api-1.3.7.tgz",
      "integrity": "sha512-4/ApBnMVeEPG3EkSzcw25wDe4N66wxwn+KKn6b47vyek8Xb3NBAcg4xfuQbS7BqcZuTX4wxfD5lVagdggR3gyA==",
      "dev": true,
      "requires": {
        "async": "^2.1.4",
        "fileset": "^2.0.2",
        "istanbul-lib-coverage": "^1.2.1",
        "istanbul-lib-hook": "^1.2.2",
        "istanbul-lib-instrument": "^1.10.2",
        "istanbul-lib-report": "^1.1.5",
        "istanbul-lib-source-maps": "^1.2.6",
        "istanbul-reports": "^1.5.1",
        "js-yaml": "^3.7.0",
        "mkdirp": "^0.5.1",
        "once": "^1.4.0"
      },
      "dependencies": {
        "mkdirp": {
          "version": "0.5.5",
          "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-0.5.5.tgz",
          "integrity": "sha512-NKmAlESf6jMGym1++R0Ra7wvhV+wFW63FaSOFPwRahvea0gMUcGUhVeAg/0BC0wiv9ih5NYPB1Wn1UEI1/L+xQ==",
          "dev": true,
          "requires": {
            "minimist": "^1.2.5"
          }
        }
      }
    },
    "istanbul-lib-coverage": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/istanbul-lib-coverage/-/istanbul-lib-coverage-1.2.1.tgz",
      "integrity": "sha512-PzITeunAgyGbtY1ibVIUiV679EFChHjoMNRibEIobvmrCRaIgwLxNucOSimtNWUhEib/oO7QY2imD75JVgCJWQ==",
      "dev": true
    },
    "istanbul-lib-hook": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/istanbul-lib-hook/-/istanbul-lib-hook-1.2.2.tgz",
      "integrity": "sha512-/Jmq7Y1VeHnZEQ3TL10VHyb564mn6VrQXHchON9Jf/AEcmQ3ZIiyD1BVzNOKTZf/G3gE+kiGK6SmpF9y3qGPLw==",
      "dev": true,
      "requires": {
        "append-transform": "^0.4.0"
      }
    },
    "istanbul-lib-instrument": {
      "version": "1.10.2",
      "resolved": "https://registry.npmjs.org/istanbul-lib-instrument/-/istanbul-lib-instrument-1.10.2.tgz",
      "integrity": "sha512-aWHxfxDqvh/ZlxR8BBaEPVSWDPUkGD63VjGQn3jcw8jCp7sHEMKcrj4xfJn/ABzdMEHiQNyvDQhqm5o8+SQg7A==",
      "dev": true,
      "requires": {
        "babel-generator": "^6.18.0",
        "babel-template": "^6.16.0",
        "babel-traverse": "^6.18.0",
        "babel-types": "^6.18.0",
        "babylon": "^6.18.0",
        "istanbul-lib-coverage": "^1.2.1",
        "semver": "^5.3.0"
      }
    },
    "istanbul-lib-report": {
      "version": "1.1.5",
      "resolved": "https://registry.npmjs.org/istanbul-lib-report/-/istanbul-lib-report-1.1.5.tgz",
      "integrity": "sha512-UsYfRMoi6QO/doUshYNqcKJqVmFe9w51GZz8BS3WB0lYxAllQYklka2wP9+dGZeHYaWIdcXUx8JGdbqaoXRXzw==",
      "dev": true,
      "requires": {
        "istanbul-lib-coverage": "^1.2.1",
        "mkdirp": "^0.5.1",
        "path-parse": "^1.0.5",
        "supports-color": "^3.1.2"
      },
      "dependencies": {
        "has-flag": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-1.0.0.tgz",
          "integrity": "sha1-nZ55MWXOAXoA8AQYxD+UKnsdEfo=",
          "dev": true
        },
        "mkdirp": {
          "version": "0.5.5",
          "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-0.5.5.tgz",
          "integrity": "sha512-NKmAlESf6jMGym1++R0Ra7wvhV+wFW63FaSOFPwRahvea0gMUcGUhVeAg/0BC0wiv9ih5NYPB1Wn1UEI1/L+xQ==",
          "dev": true,
          "requires": {
            "minimist": "^1.2.5"
          }
        },
        "supports-color": {
          "version": "3.2.3",
          "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-3.2.3.tgz",
          "integrity": "sha1-ZawFBLOVQXHYpklGsq48u4pfVPY=",
          "dev": true,
          "requires": {
            "has-flag": "^1.0.0"
          }
        }
      }
    },
    "istanbul-lib-source-maps": {
      "version": "1.2.6",
      "resolved": "https://registry.npmjs.org/istanbul-lib-source-maps/-/istanbul-lib-source-maps-1.2.6.tgz",
      "integrity": "sha512-TtbsY5GIHgbMsMiRw35YBHGpZ1DVFEO19vxxeiDMYaeOFOCzfnYVxvl6pOUIZR4dtPhAGpSMup8OyF8ubsaqEg==",
      "dev": true,
      "requires": {
        "debug": "^3.1.0",
        "istanbul-lib-coverage": "^1.2.1",
        "mkdirp": "^0.5.1",
        "rimraf": "^2.6.1",
        "source-map": "^0.5.3"
      },
      "dependencies": {
        "debug": {
          "version": "3.2.7",
          "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.7.tgz",
          "integrity": "sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ==",
          "dev": true,
          "requires": {
            "ms": "^2.1.1"
          }
        },
        "mkdirp": {
          "version": "0.5.5",
          "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-0.5.5.tgz",
          "integrity": "sha512-NKmAlESf6jMGym1++R0Ra7wvhV+wFW63FaSOFPwRahvea0gMUcGUhVeAg/0BC0wiv9ih5NYPB1Wn1UEI1/L+xQ==",
          "dev": true,
          "requires": {
            "minimist": "^1.2.5"
          }
        },
        "ms": {
          "version": "2.1.3",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
          "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
          "dev": true
        },
        "rimraf": {
          "version": "2.7.1",
          "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-2.7.1.tgz",
          "integrity": "sha512-uWjbaKIK3T1OSVptzX7Nl6PvQ3qAGtKEtVRjRuazjfL3Bx5eI409VZSqgND+4UNnmzLVdPj9FqFJNPqBZFve4w==",
          "dev": true,
          "requires": {
            "glob": "^7.1.3"
          }
        }
      }
    },
    "istanbul-reports": {
      "version": "1.5.1",
      "resolved": "https://registry.npmjs.org/istanbul-reports/-/istanbul-reports-1.5.1.tgz",
      "integrity": "sha512-+cfoZ0UXzWjhAdzosCPP3AN8vvef8XDkWtTfgaN+7L3YTpNYITnCaEkceo5SEYy644VkHka/P1FvkWvrG/rrJw==",
      "dev": true,
      "requires": {
        "handlebars": "^4.0.3"
      }
    },
    "jest": {
      "version": "22.2.2",
      "resolved": "https://registry.npmjs.org/jest/-/jest-22.2.2.tgz",
      "integrity": "sha512-AoRws1ybI3yslXZDOwNWjsLZcjykcf1nloeeXl9/ou0AyzEAfR1Xz0CrsPhVVZrQGOGWi1KCVNt6GsghbzkqLw==",
      "dev": true,
      "requires": {
        "import-local": "^1.0.0",
        "jest-cli": "^22.2.2"
      },
      "dependencies": {
        "ansi-regex": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-3.0.0.tgz",
          "integrity": "sha1-7QMXwyIGT3lGbAKWa922Bas32Zg=",
          "dev": true
        },
        "ansi-styles": {
          "version": "3.2.1",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
          "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
          "dev": true,
          "requires": {
            "color-convert": "^1.9.0"
          }
        },
        "chalk": {
          "version": "2.4.2",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
          "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
          "dev": true,
          "requires": {
            "ansi-styles": "^3.2.1",
            "escape-string-regexp": "^1.0.5",
            "supports-color": "^5.3.0"
          }
        },
        "ci-info": {
          "version": "1.6.0",
          "resolved": "https://registry.npmjs.org/ci-info/-/ci-info-1.6.0.tgz",
          "integrity": "sha512-vsGdkwSCDpWmP80ncATX7iea5DWQemg1UgCW5J8tqjU3lYw4FBYuj89J0CTVomA7BEfvSZd84GmHko+MxFQU2A==",
          "dev": true
        },
        "color-convert": {
          "version": "1.9.3",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
          "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
          "dev": true,
          "requires": {
            "color-name": "1.1.3"
          }
        },
        "color-name": {
          "version": "1.1.3",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
          "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU=",
          "dev": true
        },
        "is-ci": {
          "version": "1.2.1",
          "resolved": "https://registry.npmjs.org/is-ci/-/is-ci-1.2.1.tgz",
          "integrity": "sha512-s6tfsaQaQi3JNciBH6shVqEDvhGut0SUXr31ag8Pd8BBbVVlcGfWhpPmEOoM6RJ5TFhbypvf5yyRw/VXW1IiWg==",
          "dev": true,
          "requires": {
            "ci-info": "^1.5.0"
          }
        },
        "jest-cli": {
          "version": "22.4.4",
          "resolved": "https://registry.npmjs.org/jest-cli/-/jest-cli-22.4.4.tgz",
          "integrity": "sha512-I9dsgkeyjVEEZj9wrGrqlH+8OlNob9Iptyl+6L5+ToOLJmHm4JwOPatin1b2Bzp5R5YRQJ+oiedx7o1H7wJzhA==",
          "dev": true,
          "requires": {
            "ansi-escapes": "^3.0.0",
            "chalk": "^2.0.1",
            "exit": "^0.1.2",
            "glob": "^7.1.2",
            "graceful-fs": "^4.1.11",
            "import-local": "^1.0.0",
            "is-ci": "^1.0.10",
            "istanbul-api": "^1.1.14",
            "istanbul-lib-coverage": "^1.1.1",
            "istanbul-lib-instrument": "^1.8.0",
            "istanbul-lib-source-maps": "^1.2.1",
            "jest-changed-files": "^22.2.0",
            "jest-config": "^22.4.4",
            "jest-environment-jsdom": "^22.4.1",
            "jest-get-type": "^22.1.0",
            "jest-haste-map": "^22.4.2",
            "jest-message-util": "^22.4.0",
            "jest-regex-util": "^22.1.0",
            "jest-resolve-dependencies": "^22.1.0",
            "jest-runner": "^22.4.4",
            "jest-runtime": "^22.4.4",
            "jest-snapshot": "^22.4.0",
            "jest-util": "^22.4.1",
            "jest-validate": "^22.4.4",
            "jest-worker": "^22.2.2",
            "micromatch": "^2.3.11",
            "node-notifier": "^5.2.1",
            "realpath-native": "^1.0.0",
            "rimraf": "^2.5.4",
            "slash": "^1.0.0",
            "string-length": "^2.0.0",
            "strip-ansi": "^4.0.0",
            "which": "^1.2.12",
            "yargs": "^10.0.3"
          }
        },
        "rimraf": {
          "version": "2.7.1",
          "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-2.7.1.tgz",
          "integrity": "sha512-uWjbaKIK3T1OSVptzX7Nl6PvQ3qAGtKEtVRjRuazjfL3Bx5eI409VZSqgND+4UNnmzLVdPj9FqFJNPqBZFve4w==",
          "dev": true,
          "requires": {
            "glob": "^7.1.3"
          }
        },
        "strip-ansi": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-4.0.0.tgz",
          "integrity": "sha1-qEeQIusaw2iocTibY1JixQXuNo8=",
          "dev": true,
          "requires": {
            "ansi-regex": "^3.0.0"
          }
        }
      }
    },
    "jest-changed-files": {
      "version": "22.4.3",
      "resolved": "https://registry.npmjs.org/jest-changed-files/-/jest-changed-files-22.4.3.tgz",
      "integrity": "sha512-83Dh0w1aSkUNFhy5d2dvqWxi/y6weDwVVLU6vmK0cV9VpRxPzhTeGimbsbRDSnEoszhF937M4sDLLeS7Cu/Tmw==",
      "dev": true,
      "requires": {
        "throat": "^4.0.0"
      }
    },
    "jest-config": {
      "version": "22.4.4",
      "resolved": "https://registry.npmjs.org/jest-config/-/jest-config-22.4.4.tgz",
      "integrity": "sha512-9CKfo1GC4zrXSoMLcNeDvQBfgtqGTB1uP8iDIZ97oB26RCUb886KkKWhVcpyxVDOUxbhN+uzcBCeFe7w+Iem4A==",
      "dev": true,
      "requires": {
        "chalk": "^2.0.1",
        "glob": "^7.1.1",
        "jest-environment-jsdom": "^22.4.1",
        "jest-environment-node": "^22.4.1",
        "jest-get-type": "^22.1.0",
        "jest-jasmine2": "^22.4.4",
        "jest-regex-util": "^22.1.0",
        "jest-resolve": "^22.4.2",
        "jest-util": "^22.4.1",
        "jest-validate": "^22.4.4",
        "pretty-format": "^22.4.0"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "3.2.1",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
          "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
          "dev": true,
          "requires": {
            "color-convert": "^1.9.0"
          }
        },
        "chalk": {
          "version": "2.4.2",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
          "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
          "dev": true,
          "requires": {
            "ansi-styles": "^3.2.1",
            "escape-string-regexp": "^1.0.5",
            "supports-color": "^5.3.0"
          }
        },
        "color-convert": {
          "version": "1.9.3",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
          "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
          "dev": true,
          "requires": {
            "color-name": "1.1.3"
          }
        },
        "color-name": {
          "version": "1.1.3",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
          "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU=",
          "dev": true
        }
      }
    },
    "jest-diff": {
      "version": "22.4.3",
      "resolved": "https://registry.npmjs.org/jest-diff/-/jest-diff-22.4.3.tgz",
      "integrity": "sha512-/QqGvCDP5oZOF6PebDuLwrB2BMD8ffJv6TAGAdEVuDx1+uEgrHpSFrfrOiMRx2eJ1hgNjlQrOQEHetVwij90KA==",
      "dev": true,
      "requires": {
        "chalk": "^2.0.1",
        "diff": "^3.2.0",
        "jest-get-type": "^22.4.3",
        "pretty-format": "^22.4.3"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "3.2.1",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
          "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
          "dev": true,
          "requires": {
            "color-convert": "^1.9.0"
          }
        },
        "chalk": {
          "version": "2.4.2",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
          "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
          "dev": true,
          "requires": {
            "ansi-styles": "^3.2.1",
            "escape-string-regexp": "^1.0.5",
            "supports-color": "^5.3.0"
          }
        },
        "color-convert": {
          "version": "1.9.3",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
          "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
          "dev": true,
          "requires": {
            "color-name": "1.1.3"
          }
        },
        "color-name": {
          "version": "1.1.3",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
          "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU=",
          "dev": true
        }
      }
    },
    "jest-docblock": {
      "version": "22.4.3",
      "resolved": "https://registry.npmjs.org/jest-docblock/-/jest-docblock-22.4.3.tgz",
      "integrity": "sha512-uPKBEAw7YrEMcXueMKZXn/rbMxBiSv48fSqy3uEnmgOlQhSX+lthBqHb1fKWNVmFqAp9E/RsSdBfiV31LbzaOg==",
      "dev": true,
      "requires": {
        "detect-newline": "^2.1.0"
      }
    },
    "jest-environment-jsdom": {
      "version": "22.4.3",
      "resolved": "https://registry.npmjs.org/jest-environment-jsdom/-/jest-environment-jsdom-22.4.3.tgz",
      "integrity": "sha512-FviwfR+VyT3Datf13+ULjIMO5CSeajlayhhYQwpzgunswoaLIPutdbrnfUHEMyJCwvqQFaVtTmn9+Y8WCt6n1w==",
      "dev": true,
      "requires": {
        "jest-mock": "^22.4.3",
        "jest-util": "^22.4.3",
        "jsdom": "^11.5.1"
      }
    },
    "jest-environment-node": {
      "version": "22.4.3",
      "resolved": "https://registry.npmjs.org/jest-environment-node/-/jest-environment-node-22.4.3.tgz",
      "integrity": "sha512-reZl8XF6t/lMEuPWwo9OLfttyC26A5AMgDyEQ6DBgZuyfyeNUzYT8BFo6uxCCP/Av/b7eb9fTi3sIHFPBzmlRA==",
      "dev": true,
      "requires": {
        "jest-mock": "^22.4.3",
        "jest-util": "^22.4.3"
      }
    },
    "jest-get-type": {
      "version": "22.4.3",
      "resolved": "https://registry.npmjs.org/jest-get-type/-/jest-get-type-22.4.3.tgz",
      "integrity": "sha512-/jsz0Y+V29w1chdXVygEKSz2nBoHoYqNShPe+QgxSNjAuP1i8+k4LbQNrfoliKej0P45sivkSCh7yiD6ubHS3w==",
      "dev": true
    },
    "jest-haste-map": {
      "version": "22.4.3",
      "resolved": "https://registry.npmjs.org/jest-haste-map/-/jest-haste-map-22.4.3.tgz",
      "integrity": "sha512-4Q9fjzuPVwnaqGKDpIsCSoTSnG3cteyk2oNVjBX12HHOaF1oxql+uUiqZb5Ndu7g/vTZfdNwwy4WwYogLh29DQ==",
      "dev": true,
      "requires": {
        "fb-watchman": "^2.0.0",
        "graceful-fs": "^4.1.11",
        "jest-docblock": "^22.4.3",
        "jest-serializer": "^22.4.3",
        "jest-worker": "^22.4.3",
        "micromatch": "^2.3.11",
        "sane": "^2.0.0"
      }
    },
    "jest-jasmine2": {
      "version": "22.4.4",
      "resolved": "https://registry.npmjs.org/jest-jasmine2/-/jest-jasmine2-22.4.4.tgz",
      "integrity": "sha512-nK3vdUl50MuH7vj/8at7EQVjPGWCi3d5+6aCi7Gxy/XMWdOdbH1qtO/LjKbqD8+8dUAEH+BVVh7HkjpCWC1CSw==",
      "dev": true,
      "requires": {
        "chalk": "^2.0.1",
        "co": "^4.6.0",
        "expect": "^22.4.0",
        "graceful-fs": "^4.1.11",
        "is-generator-fn": "^1.0.0",
        "jest-diff": "^22.4.0",
        "jest-matcher-utils": "^22.4.0",
        "jest-message-util": "^22.4.0",
        "jest-snapshot": "^22.4.0",
        "jest-util": "^22.4.1",
        "source-map-support": "^0.5.0"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "3.2.1",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
          "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
          "dev": true,
          "requires": {
            "color-convert": "^1.9.0"
          }
        },
        "chalk": {
          "version": "2.4.2",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
          "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
          "dev": true,
          "requires": {
            "ansi-styles": "^3.2.1",
            "escape-string-regexp": "^1.0.5",
            "supports-color": "^5.3.0"
          }
        },
        "color-convert": {
          "version": "1.9.3",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
          "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
          "dev": true,
          "requires": {
            "color-name": "1.1.3"
          }
        },
        "color-name": {
          "version": "1.1.3",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
          "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU=",
          "dev": true
        }
      }
    },
    "jest-leak-detector": {
      "version": "22.4.3",
      "resolved": "https://registry.npmjs.org/jest-leak-detector/-/jest-leak-detector-22.4.3.tgz",
      "integrity": "sha512-NZpR/Ls7+ndO57LuXROdgCGz2RmUdC541tTImL9bdUtU3WadgFGm0yV+Ok4Fuia/1rLAn5KaJ+i76L6e3zGJYQ==",
      "dev": true,
      "requires": {
        "pretty-format": "^22.4.3"
      }
    },
    "jest-matcher-utils": {
      "version": "22.4.3",
      "resolved": "https://registry.npmjs.org/jest-matcher-utils/-/jest-matcher-utils-22.4.3.tgz",
      "integrity": "sha512-lsEHVaTnKzdAPR5t4B6OcxXo9Vy4K+kRRbG5gtddY8lBEC+Mlpvm1CJcsMESRjzUhzkz568exMV1hTB76nAKbA==",
      "dev": true,
      "requires": {
        "chalk": "^2.0.1",
        "jest-get-type": "^22.4.3",
        "pretty-format": "^22.4.3"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "3.2.1",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
          "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
          "dev": true,
          "requires": {
            "color-convert": "^1.9.0"
          }
        },
        "chalk": {
          "version": "2.4.2",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
          "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
          "dev": true,
          "requires": {
            "ansi-styles": "^3.2.1",
            "escape-string-regexp": "^1.0.5",
            "supports-color": "^5.3.0"
          }
        },
        "color-convert": {
          "version": "1.9.3",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
          "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
          "dev": true,
          "requires": {
            "color-name": "1.1.3"
          }
        },
        "color-name": {
          "version": "1.1.3",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
          "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU=",
          "dev": true
        }
      }
    },
    "jest-message-util": {
      "version": "22.4.3",
      "resolved": "https://registry.npmjs.org/jest-message-util/-/jest-message-util-22.4.3.tgz",
      "integrity": "sha512-iAMeKxhB3Se5xkSjU0NndLLCHtP4n+GtCqV0bISKA5dmOXQfEbdEmYiu2qpnWBDCQdEafNDDU6Q+l6oBMd/+BA==",
      "dev": true,
      "requires": {
        "@babel/code-frame": "^7.0.0-beta.35",
        "chalk": "^2.0.1",
        "micromatch": "^2.3.11",
        "slash": "^1.0.0",
        "stack-utils": "^1.0.1"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "3.2.1",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
          "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
          "dev": true,
          "requires": {
            "color-convert": "^1.9.0"
          }
        },
        "chalk": {
          "version": "2.4.2",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
          "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
          "dev": true,
          "requires": {
            "ansi-styles": "^3.2.1",
            "escape-string-regexp": "^1.0.5",
            "supports-color": "^5.3.0"
          }
        },
        "color-convert": {
          "version": "1.9.3",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
          "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
          "dev": true,
          "requires": {
            "color-name": "1.1.3"
          }
        },
        "color-name": {
          "version": "1.1.3",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
          "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU=",
          "dev": true
        }
      }
    },
    "jest-mock": {
      "version": "22.4.3",
      "resolved": "https://registry.npmjs.org/jest-mock/-/jest-mock-22.4.3.tgz",
      "integrity": "sha512-+4R6mH5M1G4NK16CKg9N1DtCaFmuxhcIqF4lQK/Q1CIotqMs/XBemfpDPeVZBFow6iyUNu6EBT9ugdNOTT5o5Q==",
      "dev": true
    },
    "jest-regex-util": {
      "version": "22.4.3",
      "resolved": "https://registry.npmjs.org/jest-regex-util/-/jest-regex-util-22.4.3.tgz",
      "integrity": "sha512-LFg1gWr3QinIjb8j833bq7jtQopiwdAs67OGfkPrvy7uNUbVMfTXXcOKXJaeY5GgjobELkKvKENqq1xrUectWg==",
      "dev": true
    },
    "jest-resolve": {
      "version": "22.4.3",
      "resolved": "https://registry.npmjs.org/jest-resolve/-/jest-resolve-22.4.3.tgz",
      "integrity": "sha512-u3BkD/MQBmwrOJDzDIaxpyqTxYH+XqAXzVJP51gt29H8jpj3QgKof5GGO2uPGKGeA1yTMlpbMs1gIQ6U4vcRhw==",
      "dev": true,
      "requires": {
        "browser-resolve": "^1.11.2",
        "chalk": "^2.0.1"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "3.2.1",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
          "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
          "dev": true,
          "requires": {
            "color-convert": "^1.9.0"
          }
        },
        "chalk": {
          "version": "2.4.2",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
          "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
          "dev": true,
          "requires": {
            "ansi-styles": "^3.2.1",
            "escape-string-regexp": "^1.0.5",
            "supports-color": "^5.3.0"
          }
        },
        "color-convert": {
          "version": "1.9.3",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
          "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
          "dev": true,
          "requires": {
            "color-name": "1.1.3"
          }
        },
        "color-name": {
          "version": "1.1.3",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
          "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU=",
          "dev": true
        }
      }
    },
    "jest-resolve-dependencies": {
      "version": "22.4.3",
      "resolved": "https://registry.npmjs.org/jest-resolve-dependencies/-/jest-resolve-dependencies-22.4.3.tgz",
      "integrity": "sha512-06czCMVToSN8F2U4EvgSB1Bv/56gc7MpCftZ9z9fBgUQM7dzHGCMBsyfVA6dZTx8v0FDcnALf7hupeQxaBCvpA==",
      "dev": true,
      "requires": {
        "jest-regex-util": "^22.4.3"
      }
    },
    "jest-runner": {
      "version": "22.4.4",
      "resolved": "https://registry.npmjs.org/jest-runner/-/jest-runner-22.4.4.tgz",
      "integrity": "sha512-5S/OpB51igQW9xnkM5Tgd/7ZjiAuIoiJAVtvVTBcEBiXBIFzWM3BAMPBM19FX68gRV0KWyFuGKj0EY3M3aceeQ==",
      "dev": true,
      "requires": {
        "exit": "^0.1.2",
        "jest-config": "^22.4.4",
        "jest-docblock": "^22.4.0",
        "jest-haste-map": "^22.4.2",
        "jest-jasmine2": "^22.4.4",
        "jest-leak-detector": "^22.4.0",
        "jest-message-util": "^22.4.0",
        "jest-runtime": "^22.4.4",
        "jest-util": "^22.4.1",
        "jest-worker": "^22.2.2",
        "throat": "^4.0.0"
      }
    },
    "jest-runtime": {
      "version": "22.4.4",
      "resolved": "https://registry.npmjs.org/jest-runtime/-/jest-runtime-22.4.4.tgz",
      "integrity": "sha512-WRTj9m///npte1YjuphCYX7GRY/c2YvJImU9t7qOwFcqHr4YMzmX6evP/3Sehz5DKW2Vi8ONYPCFWe36JVXxfw==",
      "dev": true,
      "requires": {
        "babel-core": "^6.0.0",
        "babel-jest": "^22.4.4",
        "babel-plugin-istanbul": "^4.1.5",
        "chalk": "^2.0.1",
        "convert-source-map": "^1.4.0",
        "exit": "^0.1.2",
        "graceful-fs": "^4.1.11",
        "jest-config": "^22.4.4",
        "jest-haste-map": "^22.4.2",
        "jest-regex-util": "^22.1.0",
        "jest-resolve": "^22.4.2",
        "jest-util": "^22.4.1",
        "jest-validate": "^22.4.4",
        "json-stable-stringify": "^1.0.1",
        "micromatch": "^2.3.11",
        "realpath-native": "^1.0.0",
        "slash": "^1.0.0",
        "strip-bom": "3.0.0",
        "write-file-atomic": "^2.1.0",
        "yargs": "^10.0.3"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "3.2.1",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
          "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
          "dev": true,
          "requires": {
            "color-convert": "^1.9.0"
          }
        },
        "chalk": {
          "version": "2.4.2",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
          "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
          "dev": true,
          "requires": {
            "ansi-styles": "^3.2.1",
            "escape-string-regexp": "^1.0.5",
            "supports-color": "^5.3.0"
          }
        },
        "color-convert": {
          "version": "1.9.3",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
          "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
          "dev": true,
          "requires": {
            "color-name": "1.1.3"
          }
        },
        "color-name": {
          "version": "1.1.3",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
          "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU=",
          "dev": true
        },
        "strip-bom": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-3.0.0.tgz",
          "integrity": "sha1-IzTBjpx1n3vdVv3vfprj1YjmjtM=",
          "dev": true
        },
        "write-file-atomic": {
          "version": "2.4.3",
          "resolved": "https://registry.npmjs.org/write-file-atomic/-/write-file-atomic-2.4.3.tgz",
          "integrity": "sha512-GaETH5wwsX+GcnzhPgKcKjJ6M2Cq3/iZp1WyY/X1CSqrW+jVNM9Y7D8EC2sM4ZG/V8wZlSniJnCKWPmBYAucRQ==",
          "dev": true,
          "requires": {
            "graceful-fs": "^4.1.11",
            "imurmurhash": "^0.1.4",
            "signal-exit": "^3.0.2"
          }
        }
      }
    },
    "jest-serializer": {
      "version": "22.4.3",
      "resolved": "https://registry.npmjs.org/jest-serializer/-/jest-serializer-22.4.3.tgz",
      "integrity": "sha512-uPaUAppx4VUfJ0QDerpNdF43F68eqKWCzzhUlKNDsUPhjOon7ZehR4C809GCqh765FoMRtTVUVnGvIoskkYHiw==",
      "dev": true
    },
    "jest-snapshot": {
      "version": "22.4.3",
      "resolved": "https://registry.npmjs.org/jest-snapshot/-/jest-snapshot-22.4.3.tgz",
      "integrity": "sha512-JXA0gVs5YL0HtLDCGa9YxcmmV2LZbwJ+0MfyXBBc5qpgkEYITQFJP7XNhcHFbUvRiniRpRbGVfJrOoYhhGE0RQ==",
      "dev": true,
      "requires": {
        "chalk": "^2.0.1",
        "jest-diff": "^22.4.3",
        "jest-matcher-utils": "^22.4.3",
        "mkdirp": "^0.5.1",
        "natural-compare": "^1.4.0",
        "pretty-format": "^22.4.3"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "3.2.1",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
          "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
          "dev": true,
          "requires": {
            "color-convert": "^1.9.0"
          }
        },
        "chalk": {
          "version": "2.4.2",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
          "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
          "dev": true,
          "requires": {
            "ansi-styles": "^3.2.1",
            "escape-string-regexp": "^1.0.5",
            "supports-color": "^5.3.0"
          }
        },
        "color-convert": {
          "version": "1.9.3",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
          "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
          "dev": true,
          "requires": {
            "color-name": "1.1.3"
          }
        },
        "color-name": {
          "version": "1.1.3",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
          "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU=",
          "dev": true
        },
        "mkdirp": {
          "version": "0.5.5",
          "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-0.5.5.tgz",
          "integrity": "sha512-NKmAlESf6jMGym1++R0Ra7wvhV+wFW63FaSOFPwRahvea0gMUcGUhVeAg/0BC0wiv9ih5NYPB1Wn1UEI1/L+xQ==",
          "dev": true,
          "requires": {
            "minimist": "^1.2.5"
          }
        }
      }
    },
    "jest-util": {
      "version": "22.4.3",
      "resolved": "https://registry.npmjs.org/jest-util/-/jest-util-22.4.3.tgz",
      "integrity": "sha512-rfDfG8wyC5pDPNdcnAlZgwKnzHvZDu8Td2NJI/jAGKEGxJPYiE4F0ss/gSAkG4778Y23Hvbz+0GMrDJTeo7RjQ==",
      "dev": true,
      "requires": {
        "callsites": "^2.0.0",
        "chalk": "^2.0.1",
        "graceful-fs": "^4.1.11",
        "is-ci": "^1.0.10",
        "jest-message-util": "^22.4.3",
        "mkdirp": "^0.5.1",
        "source-map": "^0.6.0"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "3.2.1",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
          "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
          "dev": true,
          "requires": {
            "color-convert": "^1.9.0"
          }
        },
        "chalk": {
          "version": "2.4.2",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
          "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
          "dev": true,
          "requires": {
            "ansi-styles": "^3.2.1",
            "escape-string-regexp": "^1.0.5",
            "supports-color": "^5.3.0"
          }
        },
        "ci-info": {
          "version": "1.6.0",
          "resolved": "https://registry.npmjs.org/ci-info/-/ci-info-1.6.0.tgz",
          "integrity": "sha512-vsGdkwSCDpWmP80ncATX7iea5DWQemg1UgCW5J8tqjU3lYw4FBYuj89J0CTVomA7BEfvSZd84GmHko+MxFQU2A==",
          "dev": true
        },
        "color-convert": {
          "version": "1.9.3",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
          "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
          "dev": true,
          "requires": {
            "color-name": "1.1.3"
          }
        },
        "color-name": {
          "version": "1.1.3",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
          "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU=",
          "dev": true
        },
        "is-ci": {
          "version": "1.2.1",
          "resolved": "https://registry.npmjs.org/is-ci/-/is-ci-1.2.1.tgz",
          "integrity": "sha512-s6tfsaQaQi3JNciBH6shVqEDvhGut0SUXr31ag8Pd8BBbVVlcGfWhpPmEOoM6RJ5TFhbypvf5yyRw/VXW1IiWg==",
          "dev": true,
          "requires": {
            "ci-info": "^1.5.0"
          }
        },
        "mkdirp": {
          "version": "0.5.5",
          "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-0.5.5.tgz",
          "integrity": "sha512-NKmAlESf6jMGym1++R0Ra7wvhV+wFW63FaSOFPwRahvea0gMUcGUhVeAg/0BC0wiv9ih5NYPB1Wn1UEI1/L+xQ==",
          "dev": true,
          "requires": {
            "minimist": "^1.2.5"
          }
        },
        "source-map": {
          "version": "0.6.1",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
          "dev": true
        }
      }
    },
    "jest-validate": {
      "version": "22.4.4",
      "resolved": "https://registry.npmjs.org/jest-validate/-/jest-validate-22.4.4.tgz",
      "integrity": "sha512-dmlf4CIZRGvkaVg3fa0uetepcua44DHtktHm6rcoNVtYlpwe6fEJRkMFsaUVcFHLzbuBJ2cPw9Gl9TKfnzMVwg==",
      "dev": true,
      "requires": {
        "chalk": "^2.0.1",
        "jest-config": "^22.4.4",
        "jest-get-type": "^22.1.0",
        "leven": "^2.1.0",
        "pretty-format": "^22.4.0"
      },
      "dependencies": {
        "ansi-styles": {
          "version": "3.2.1",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
          "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
          "dev": true,
          "requires": {
            "color-convert": "^1.9.0"
          }
        },
        "chalk": {
          "version": "2.4.2",
          "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
          "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
          "dev": true,
          "requires": {
            "ansi-styles": "^3.2.1",
            "escape-string-regexp": "^1.0.5",
            "supports-color": "^5.3.0"
          }
        },
        "color-convert": {
          "version": "1.9.3",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
          "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
          "dev": true,
          "requires": {
            "color-name": "1.1.3"
          }
        },
        "color-name": {
          "version": "1.1.3",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
          "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU=",
          "dev": true
        }
      }
    },
    "jest-worker": {
      "version": "22.4.3",
      "resolved": "https://registry.npmjs.org/jest-worker/-/jest-worker-22.4.3.tgz",
      "integrity": "sha512-B1ucW4fI8qVAuZmicFxI1R3kr2fNeYJyvIQ1rKcuLYnenFV5K5aMbxFj6J0i00Ju83S8jP2d7Dz14+AvbIHRYQ==",
      "dev": true,
      "requires": {
        "merge-stream": "^1.0.1"
      }
    },
    "jmespath": {
      "version": "0.15.0",
      "resolved": "https://registry.npmjs.org/jmespath/-/jmespath-0.15.0.tgz",
      "integrity": "sha1-o/Iiqarp+Wb10nx5ZRDigJF2Qhc="
    },
    "joi": {
      "version": "13.1.0",
      "resolved": "https://registry.npmjs.org/joi/-/joi-13.1.0.tgz",
      "integrity": "sha512-x6pGmDYI6hwNi3skP6irQqRaJntzeaWmZ4rsnjc/NTlf6P5Gp3Aw/O8REe8oLJ6wPhrzd9K3RW1m3Yz/Hx4Weg==",
      "requires": {
        "hoek": "5.x.x",
        "isemail": "3.x.x",
        "topo": "3.x.x"
      }
    },
    "joi-objectid": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/joi-objectid/-/joi-objectid-3.0.1.tgz",
      "integrity": "sha512-V/3hbTlGpvJ03Me6DJbdBI08hBTasFOmipsauOsxOSnsF1blxV537WTl1zPwbfcKle4AK0Ma4OPnzMH4LlvTpQ=="
    },
    "js-tokens": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-3.0.2.tgz",
      "integrity": "sha1-mGbfOVECEw449/mWvOtlRDIJwls=",
      "dev": true
    },
    "js-yaml": {
      "version": "3.14.1",
      "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-3.14.1.tgz",
      "integrity": "sha512-okMH7OXXJ7YrN9Ok3/SXrnu4iX9yOk+25nqX4imS2npuvTYDmo/QEZoqwZkYaIDk3jVvBOTOIEgEhaLOynBS9g==",
      "dev": true,
      "requires": {
        "argparse": "^1.0.7",
        "esprima": "^4.0.0"
      }
    },
    "jsbn": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/jsbn/-/jsbn-0.1.1.tgz",
      "integrity": "sha1-peZUwuWi3rXyAdls77yoDA7y9RM=",
      "dev": true
    },
    "jsdom": {
      "version": "11.12.0",
      "resolved": "https://registry.npmjs.org/jsdom/-/jsdom-11.12.0.tgz",
      "integrity": "sha512-y8Px43oyiBM13Zc1z780FrfNLJCXTL40EWlty/LXUtcjykRBNgLlCjWXpfSPBl2iv+N7koQN+dvqszHZgT/Fjw==",
      "dev": true,
      "requires": {
        "abab": "^2.0.0",
        "acorn": "^5.5.3",
        "acorn-globals": "^4.1.0",
        "array-equal": "^1.0.0",
        "cssom": ">= 0.3.2 < 0.4.0",
        "cssstyle": "^1.0.0",
        "data-urls": "^1.0.0",
        "domexception": "^1.0.1",
        "escodegen": "^1.9.1",
        "html-encoding-sniffer": "^1.0.2",
        "left-pad": "^1.3.0",
        "nwsapi": "^2.0.7",
        "parse5": "4.0.0",
        "pn": "^1.1.0",
        "request": "^2.87.0",
        "request-promise-native": "^1.0.5",
        "sax": "^1.2.4",
        "symbol-tree": "^3.2.2",
        "tough-cookie": "^2.3.4",
        "w3c-hr-time": "^1.0.1",
        "webidl-conversions": "^4.0.2",
        "whatwg-encoding": "^1.0.3",
        "whatwg-mimetype": "^2.1.0",
        "whatwg-url": "^6.4.1",
        "ws": "^5.2.0",
        "xml-name-validator": "^3.0.0"
      }
    },
    "jsesc": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-1.3.0.tgz",
      "integrity": "sha1-RsP+yMGJKxKwgz25vHYiF226s0s=",
      "dev": true
    },
    "json-buffer": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/json-buffer/-/json-buffer-3.0.0.tgz",
      "integrity": "sha1-Wx85evx11ne96Lz8Dkfh+aPZqJg="
    },
    "json-schema": {
      "version": "0.2.3",
      "resolved": "https://registry.npmjs.org/json-schema/-/json-schema-0.2.3.tgz",
      "integrity": "sha1-tIDIkuWaLwWVTOcnvT8qTogvnhM=",
      "dev": true
    },
    "json-schema-traverse": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
      "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
      "dev": true
    },
    "json-stable-stringify": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/json-stable-stringify/-/json-stable-stringify-1.0.1.tgz",
      "integrity": "sha1-mnWdOcXy/1A/1TAGRu1EX4jE+a8=",
      "dev": true,
      "requires": {
        "jsonify": "~0.0.0"
      }
    },
    "json-stringify-safe": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/json-stringify-safe/-/json-stringify-safe-5.0.1.tgz",
      "integrity": "sha1-Epai1Y/UXxmg9s4B1lcB4sc1tus=",
      "dev": true
    },
    "json5": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/json5/-/json5-2.2.0.tgz",
      "integrity": "sha512-f+8cldu7X/y7RAJurMEJmdoKXGB/X550w2Nr3tTbezL6RwEE/iMcm+tZnXeoZtKuOq6ft8+CqzEkrIgx1fPoQA==",
      "requires": {
        "minimist": "^1.2.5"
      }
    },
    "jsonify": {
      "version": "0.0.0",
      "resolved": "https://registry.npmjs.org/jsonify/-/jsonify-0.0.0.tgz",
      "integrity": "sha1-LHS27kHZPKUbe1qu6PUDYx0lKnM=",
      "dev": true
    },
    "jsonwebtoken": {
      "version": "8.5.1",
      "resolved": "https://registry.npmjs.org/jsonwebtoken/-/jsonwebtoken-8.5.1.tgz",
      "integrity": "sha512-XjwVfRS6jTMsqYs0EsuJ4LGxXV14zQybNd4L2r0UvbVnSF9Af8x7p5MzbJ90Ioz/9TI41/hTCvznF/loiSzn8w==",
      "requires": {
        "jws": "^3.2.2",
        "lodash.includes": "^4.3.0",
        "lodash.isboolean": "^3.0.3",
        "lodash.isinteger": "^4.0.4",
        "lodash.isnumber": "^3.0.3",
        "lodash.isplainobject": "^4.0.6",
        "lodash.isstring": "^4.0.1",
        "lodash.once": "^4.0.0",
        "ms": "^2.1.1",
        "semver": "^5.6.0"
      },
      "dependencies": {
        "ms": {
          "version": "2.1.3",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
          "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA=="
        }
      }
    },
    "jsprim": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/jsprim/-/jsprim-1.4.1.tgz",
      "integrity": "sha1-MT5mvB5cwG5Di8G3SZwuXFastqI=",
      "dev": true,
      "requires": {
        "assert-plus": "1.0.0",
        "extsprintf": "1.3.0",
        "json-schema": "0.2.3",
        "verror": "1.10.0"
      }
    },
    "jwa": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/jwa/-/jwa-1.4.1.tgz",
      "integrity": "sha512-qiLX/xhEEFKUAJ6FiBMbes3w9ATzyk5W7Hvzpa/SLYdxNtng+gcurvrI7TbACjIXlsJyr05/S1oUhZrc63evQA==",
      "requires": {
        "buffer-equal-constant-time": "1.0.1",
        "ecdsa-sig-formatter": "1.0.11",
        "safe-buffer": "^5.0.1"
      }
    },
    "jws": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/jws/-/jws-3.2.2.tgz",
      "integrity": "sha512-YHlZCB6lMTllWDtSPHz/ZXTsi8S00usEV6v1tjq8tOUZzw7DpSDWVXjXDre6ed1w/pd495ODpHZYSdkRTsa0HA==",
      "requires": {
        "jwa": "^1.4.1",
        "safe-buffer": "^5.0.1"
      }
    },
    "kareem": {
      "version": "2.3.2",
      "resolved": "https://registry.npmjs.org/kareem/-/kareem-2.3.2.tgz",
      "integrity": "sha512-STHz9P7X2L4Kwn72fA4rGyqyXdmrMSdxqHx9IXon/FXluXieaFA6KJ2upcHAHxQPQ0LeM/OjLrhFxifHewOALQ=="
    },
    "keyv": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/keyv/-/keyv-3.1.0.tgz",
      "integrity": "sha512-9ykJ/46SN/9KPM/sichzQ7OvXyGDYKGTaDlKMGCAlg2UK8KRy4jb0d8sFc+0Tt0YYnThq8X2RZgCg74RPxgcVA==",
      "requires": {
        "json-buffer": "3.0.0"
      }
    },
    "kind-of": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
      "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
      "dev": true,
      "requires": {
        "is-buffer": "^1.1.5"
      }
    },
    "kuler": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/kuler/-/kuler-2.0.0.tgz",
      "integrity": "sha512-Xq9nH7KlWZmXAtodXDDRE7vs6DU1gTU8zYDHDiWLSip45Egwq3plLHzPn27NgvzL2r1LMPC1vdqh98sQxtqj4A=="
    },
    "latest-version": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/latest-version/-/latest-version-5.1.0.tgz",
      "integrity": "sha512-weT+r0kTkRQdCdYCNtkMwWXQTMEswKrFBkm4ckQOMVhhqhIMI1UT2hMj+1iigIhgSZm5gTmrRXBNoGUgaTY1xA==",
      "requires": {
        "package-json": "^6.3.0"
      }
    },
    "lcid": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/lcid/-/lcid-1.0.0.tgz",
      "integrity": "sha1-MIrMr6C8SDo4Z7S28rlQYlHRuDU=",
      "dev": true,
      "requires": {
        "invert-kv": "^1.0.0"
      }
    },
    "left-pad": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/left-pad/-/left-pad-1.3.0.tgz",
      "integrity": "sha512-XI5MPzVNApjAyhQzphX8BkmKsKUxD4LdyK24iZeQGinBN9yTQT3bFlCBy/aVx2HrNcqQGsdot8ghrjyrvMCoEA==",
      "dev": true
    },
    "leven": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/leven/-/leven-2.1.0.tgz",
      "integrity": "sha1-wuep93IJTe6dNCAq6KzORoeHVYA=",
      "dev": true
    },
    "levn": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/levn/-/levn-0.3.0.tgz",
      "integrity": "sha1-OwmSTt+fCDwEkP3UwLxEIeBHZO4=",
      "dev": true,
      "requires": {
        "prelude-ls": "~1.1.2",
        "type-check": "~0.3.2"
      }
    },
    "load-json-file": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/load-json-file/-/load-json-file-1.1.0.tgz",
      "integrity": "sha1-lWkFcI1YtLq0wiYbBPWfMcmTdMA=",
      "dev": true,
      "requires": {
        "graceful-fs": "^4.1.2",
        "parse-json": "^2.2.0",
        "pify": "^2.0.0",
        "pinkie-promise": "^2.0.0",
        "strip-bom": "^2.0.0"
      }
    },
    "locate-path": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-2.0.0.tgz",
      "integrity": "sha1-K1aLJl7slExtnA3pw9u7ygNUzY4=",
      "dev": true,
      "requires": {
        "p-locate": "^2.0.0",
        "path-exists": "^3.0.0"
      }
    },
    "lodash": {
      "version": "4.17.21",
      "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.21.tgz",
      "integrity": "sha512-v2kDEe57lecTulaDIuNTPy3Ry4gLGJ6Z1O3vE1krgXZNrsQ+LFTGHVxVjcXPs17LhbZVGedAJv8XZ1tvj5FvSg=="
    },
    "lodash.includes": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/lodash.includes/-/lodash.includes-4.3.0.tgz",
      "integrity": "sha1-YLuYqHy5I8aMoeUTJUgzFISfVT8="
    },
    "lodash.isboolean": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/lodash.isboolean/-/lodash.isboolean-3.0.3.tgz",
      "integrity": "sha1-bC4XHbKiV82WgC/UOwGyDV9YcPY="
    },
    "lodash.isinteger": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/lodash.isinteger/-/lodash.isinteger-4.0.4.tgz",
      "integrity": "sha1-YZwK89A/iwTDH1iChAt3sRzWg0M="
    },
    "lodash.isnumber": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/lodash.isnumber/-/lodash.isnumber-3.0.3.tgz",
      "integrity": "sha1-POdoEMWSjQM1IwGsKHMX8RwLH/w="
    },
    "lodash.isplainobject": {
      "version": "4.0.6",
      "resolved": "https://registry.npmjs.org/lodash.isplainobject/-/lodash.isplainobject-4.0.6.tgz",
      "integrity": "sha1-fFJqUtibRcRcxpC4gWO+BJf1UMs="
    },
    "lodash.isstring": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/lodash.isstring/-/lodash.isstring-4.0.1.tgz",
      "integrity": "sha1-1SfftUVuynzJu5XV2ur4i6VKVFE="
    },
    "lodash.once": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/lodash.once/-/lodash.once-4.1.1.tgz",
      "integrity": "sha1-DdOXEhPHxW34gJd9UEyI+0cal6w="
    },
    "lodash.sortby": {
      "version": "4.7.0",
      "resolved": "https://registry.npmjs.org/lodash.sortby/-/lodash.sortby-4.7.0.tgz",
      "integrity": "sha1-7dFMgk4sycHgsKG0K7UhBRakJDg=",
      "dev": true
    },
    "logform": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/logform/-/logform-2.2.0.tgz",
      "integrity": "sha512-N0qPlqfypFx7UHNn4B3lzS/b0uLqt2hmuoa+PpuXNYgozdJYAyauF5Ky0BWVjrxDlMWiT3qN4zPq3vVAfZy7Yg==",
      "requires": {
        "colors": "^1.2.1",
        "fast-safe-stringify": "^2.0.4",
        "fecha": "^4.2.0",
        "ms": "^2.1.1",
        "triple-beam": "^1.3.0"
      },
      "dependencies": {
        "ms": {
          "version": "2.1.3",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
          "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA=="
        }
      }
    },
    "loose-envify": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/loose-envify/-/loose-envify-1.4.0.tgz",
      "integrity": "sha512-lyuxPGr/Wfhrlem2CL/UcnUc1zcqKAImBDzukY7Y5F/yQiNdko6+fRLevlw1HgMySw7f611UIY408EtxRSoK3Q==",
      "dev": true,
      "requires": {
        "js-tokens": "^3.0.0 || ^4.0.0"
      }
    },
    "lowercase-keys": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/lowercase-keys/-/lowercase-keys-1.0.1.tgz",
      "integrity": "sha512-G2Lj61tXDnVFFOi8VZds+SoQjtQC3dgokKdDG2mTm1tx4m50NUHBOZSBwQQHyy0V12A0JTG4icfZQH+xPyh8VA=="
    },
    "lru-cache": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-6.0.0.tgz",
      "integrity": "sha512-Jo6dJ04CmSjuznwJSS3pUeWmd/H0ffTlkXXgwZi+eq1UCmqQwCh+eLsYOYCwY991i2Fah4h1BEMCx4qThGbsiA==",
      "requires": {
        "yallist": "^4.0.0"
      }
    },
    "make-dir": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-3.1.0.tgz",
      "integrity": "sha512-g3FeP20LNwhALb/6Cz6Dd4F2ngze0jz7tbzrD2wAV+o9FeNHe4rL+yK2md0J/fiSf1sa1ADhXqi5+oVwOM/eGw==",
      "requires": {
        "semver": "^6.0.0"
      },
      "dependencies": {
        "semver": {
          "version": "6.3.0",
          "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
          "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw=="
        }
      }
    },
    "makeerror": {
      "version": "1.0.11",
      "resolved": "https://registry.npmjs.org/makeerror/-/makeerror-1.0.11.tgz",
      "integrity": "sha1-4BpckQnyr3lmDk6LlYd5AYT1qWw=",
      "dev": true,
      "requires": {
        "tmpl": "1.0.x"
      }
    },
    "map-cache": {
      "version": "0.2.2",
      "resolved": "https://registry.npmjs.org/map-cache/-/map-cache-0.2.2.tgz",
      "integrity": "sha1-wyq9C9ZSXZsFFkW7TyasXcmKDb8=",
      "dev": true
    },
    "map-visit": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/map-visit/-/map-visit-1.0.0.tgz",
      "integrity": "sha1-7Nyo8TFE5mDxtb1B8S80edmN+48=",
      "dev": true,
      "requires": {
        "object-visit": "^1.0.0"
      }
    },
    "math-random": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/math-random/-/math-random-1.0.4.tgz",
      "integrity": "sha512-rUxjysqif/BZQH2yhd5Aaq7vXMSx9NdEsQcyA07uEzIvxgI7zIr33gGsh+RU0/XjmQpCW7RsVof1vlkvQVCK5A==",
      "dev": true
    },
    "media-typer": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/media-typer/-/media-typer-0.3.0.tgz",
      "integrity": "sha1-hxDXrwqmJvj/+hzgAWhUUmMlV0g="
    },
    "mem": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/mem/-/mem-1.1.0.tgz",
      "integrity": "sha1-Xt1StIXKHZAP5kiVUFOZoN+kX3Y=",
      "dev": true,
      "requires": {
        "mimic-fn": "^1.0.0"
      }
    },
    "memory-pager": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/memory-pager/-/memory-pager-1.5.0.tgz",
      "integrity": "sha512-ZS4Bp4r/Zoeq6+NLJpP+0Zzm0pR8whtGPf1XExKLJBAczGMnSi3It14OiNCStjQjM6NU1okjQGSxgEZN8eBYKg==",
      "optional": true
    },
    "merge": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/merge/-/merge-1.2.1.tgz",
      "integrity": "sha512-VjFo4P5Whtj4vsLzsYBu5ayHhoHJ0UqNm7ibvShmbmoz7tGi0vXaoJbGdB+GmDMLUdg8DpQXEIeVDAe8MaABvQ==",
      "dev": true
    },
    "merge-descriptors": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-1.0.1.tgz",
      "integrity": "sha1-sAqqVW3YtEVoFQ7J0blT8/kMu2E="
    },
    "merge-stream": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/merge-stream/-/merge-stream-1.0.1.tgz",
      "integrity": "sha1-QEEgLVCKNCugAXQAjfDCUbjBNeE=",
      "dev": true,
      "requires": {
        "readable-stream": "^2.0.1"
      }
    },
    "methods": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/methods/-/methods-1.1.2.tgz",
      "integrity": "sha1-VSmk1nZUE07cxSZmVoNbD4Ua/O4="
    },
    "micromatch": {
      "version": "2.3.11",
      "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-2.3.11.tgz",
      "integrity": "sha1-hmd8l9FyCzY0MdBNDRUpO9OMFWU=",
      "dev": true,
      "requires": {
        "arr-diff": "^2.0.0",
        "array-unique": "^0.2.1",
        "braces": "^1.8.2",
        "expand-brackets": "^0.1.4",
        "extglob": "^0.3.1",
        "filename-regex": "^2.0.0",
        "is-extglob": "^1.0.0",
        "is-glob": "^2.0.1",
        "kind-of": "^3.0.2",
        "normalize-path": "^2.0.1",
        "object.omit": "^2.0.0",
        "parse-glob": "^3.0.4",
        "regex-cache": "^0.4.2"
      },
      "dependencies": {
        "braces": {
          "version": "1.8.5",
          "resolved": "https://registry.npmjs.org/braces/-/braces-1.8.5.tgz",
          "integrity": "sha1-uneWLhLf+WnWt2cR6RS3N4V79qc=",
          "dev": true,
          "requires": {
            "expand-range": "^1.8.1",
            "preserve": "^0.2.0",
            "repeat-element": "^1.1.2"
          }
        },
        "is-extglob": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-1.0.0.tgz",
          "integrity": "sha1-rEaBd8SUNAWgkvyPKXYMb/xiBsA=",
          "dev": true
        },
        "is-glob": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-2.0.1.tgz",
          "integrity": "sha1-0Jb5JqPe1WAPP9/ZEZjLCIjC2GM=",
          "dev": true,
          "requires": {
            "is-extglob": "^1.0.0"
          }
        },
        "normalize-path": {
          "version": "2.1.1",
          "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-2.1.1.tgz",
          "integrity": "sha1-GrKLVW4Zg2Oowab35vogE3/mrtk=",
          "dev": true,
          "requires": {
            "remove-trailing-separator": "^1.0.1"
          }
        }
      }
    },
    "mime": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/mime/-/mime-1.6.0.tgz",
      "integrity": "sha512-x0Vn8spI+wuJ1O6S7gnbaQg8Pxh4NNHb7KSINmEWKiPE4RKOplvijn+NkmYmmRgP68mc70j2EbeTFRsrswaQeg=="
    },
    "mime-db": {
      "version": "1.47.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.47.0.tgz",
      "integrity": "sha512-QBmA/G2y+IfeS4oktet3qRZ+P5kPhCKRXxXnQEudYqUaEioAU1/Lq2us3D/t1Jfo4hE9REQPrbB7K5sOczJVIw=="
    },
    "mime-types": {
      "version": "2.1.30",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.30.tgz",
      "integrity": "sha512-crmjA4bLtR8m9qLpHvgxSChT+XoSlZi8J4n/aIdn3z92e/U47Z0V/yl+Wh9W046GgFVAmoNR/fmdbZYcSSIUeg==",
      "requires": {
        "mime-db": "1.47.0"
      }
    },
    "mimic-fn": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/mimic-fn/-/mimic-fn-1.2.0.tgz",
      "integrity": "sha512-jf84uxzwiuiIVKiOLpfYk7N46TSy8ubTonmneY9vrpHNAnp0QBt2BxWV9dO3/j+BoVAb+a5G6YDPW3M5HOdMWQ==",
      "dev": true
    },
    "mimic-response": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/mimic-response/-/mimic-response-1.0.1.tgz",
      "integrity": "sha512-j5EctnkH7amfV/q5Hgmoal1g2QHFJRraOtmx0JpIqkxhBhI/lJSl1nMpQ45hVarwNETOoWEimndZ4QK0RHxuxQ=="
    },
    "minimatch": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.0.4.tgz",
      "integrity": "sha512-yJHVQEhyqPLUTgt9B83PXu6W3rx4MvvHvSUvToogpwoGDOUQ+yDrR0HRot+yOCdCO7u4hX3pWft6kWBBcqh0UA==",
      "requires": {
        "brace-expansion": "^1.1.7"
      }
    },
    "minimist": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.5.tgz",
      "integrity": "sha512-FM9nNUYrRBAELZQT3xeZQ7fmMOBg6nWNmJKTcgsJeaLstP/UODVpGsr5OhXhhXg6f+qtJ8uiZ+PUxkDWcgIXLw=="
    },
    "minipass": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/minipass/-/minipass-3.1.3.tgz",
      "integrity": "sha512-Mgd2GdMVzY+x3IJ+oHnVM+KG3lA5c8tnabyJKmHSaG2kAGpudxuOf8ToDkhumF7UzME7DecbQE9uOZhNm7PuJg==",
      "requires": {
        "yallist": "^4.0.0"
      }
    },
    "minizlib": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/minizlib/-/minizlib-2.1.2.tgz",
      "integrity": "sha512-bAxsR8BVfj60DWXHE3u30oHzfl4G7khkSuPW+qvpd7jFRHm7dLxOjUk1EHACJ/hxLY8phGJ0YhYHZo7jil7Qdg==",
      "requires": {
        "minipass": "^3.0.0",
        "yallist": "^4.0.0"
      }
    },
    "mixin-deep": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/mixin-deep/-/mixin-deep-1.3.2.tgz",
      "integrity": "sha512-WRoDn//mXBiJ1H40rqa3vH0toePwSsGb45iInWlTySa+Uu4k3tYUSxa2v1KqAiLtvlrSzaExqS1gtk96A9zvEA==",
      "dev": true,
      "requires": {
        "for-in": "^1.0.2",
        "is-extendable": "^1.0.1"
      },
      "dependencies": {
        "is-extendable": {
          "version": "1.0.1",
          "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-1.0.1.tgz",
          "integrity": "sha512-arnXMxT1hhoKo9k1LZdmlNyJdDDfy2v0fXjFlmok4+i8ul/6WlbVge9bhM74OpNPQPMGUToDtz+KXa1PneJxOA==",
          "dev": true,
          "requires": {
            "is-plain-object": "^2.0.4"
          }
        }
      }
    },
    "mkdirp": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-1.0.4.tgz",
      "integrity": "sha512-vVqVZQyf3WLx2Shd0qJ9xuvqgAyKPLAiqITEtqW0oIUjzo3PePDd6fW9iFz30ef7Ysp/oiWqbhszeGWW2T6Gzw=="
    },
    "moment": {
      "version": "2.29.1",
      "resolved": "https://registry.npmjs.org/moment/-/moment-2.29.1.tgz",
      "integrity": "sha512-kHmoybcPV8Sqy59DwNDY3Jefr64lK/by/da0ViFcuA4DH0vQg5Q6Ze5VimxkfQNSC+Mls/Kx53s7TjP1RhFEDQ=="
    },
    "mongodb": {
      "version": "3.6.6",
      "resolved": "https://registry.npmjs.org/mongodb/-/mongodb-3.6.6.tgz",
      "integrity": "sha512-WlirMiuV1UPbej5JeCMqE93JRfZ/ZzqE7nJTwP85XzjAF4rRSeq2bGCb1cjfoHLOF06+HxADaPGqT0g3SbVT1w==",
      "requires": {
        "bl": "^2.2.1",
        "bson": "^1.1.4",
        "denque": "^1.4.1",
        "optional-require": "^1.0.2",
        "safe-buffer": "^5.1.2",
        "saslprep": "^1.0.0"
      }
    },
    "mongodb-core": {
      "version": "2.1.17",
      "resolved": "https://registry.npmjs.org/mongodb-core/-/mongodb-core-2.1.17.tgz",
      "integrity": "sha1-pBizN6FKFJkPtRC5I97mqBMXPfg=",
      "requires": {
        "bson": "~1.0.4",
        "require_optional": "~1.0.0"
      },
      "dependencies": {
        "bson": {
          "version": "1.0.9",
          "resolved": "https://registry.npmjs.org/bson/-/bson-1.0.9.tgz",
          "integrity": "sha512-IQX9/h7WdMBIW/q/++tGd+emQr0XMdeZ6icnT/74Xk9fnabWn+gZgpE+9V+gujL3hhJOoNrnDVY7tWdzc7NUTg=="
        }
      }
    },
    "mongoose": {
      "version": "5.12.5",
      "resolved": "https://registry.npmjs.org/mongoose/-/mongoose-5.12.5.tgz",
      "integrity": "sha512-VVoqiELZcoI2HhHDuPpfN3qmExrtIeXSWNb1nihf4w1SJoWGXilU/g2cQgeeSMc2vAHSZd5Nv2sNPvbZHFw+pg==",
      "requires": {
        "@types/mongodb": "^3.5.27",
        "bson": "^1.1.4",
        "kareem": "2.3.2",
        "mongodb": "3.6.6",
        "mongoose-legacy-pluralize": "1.0.2",
        "mpath": "0.8.3",
        "mquery": "3.2.5",
        "ms": "2.1.2",
        "regexp-clone": "1.0.0",
        "safe-buffer": "5.2.1",
        "sift": "7.0.1",
        "sliced": "1.0.1"
      },
      "dependencies": {
        "ms": {
          "version": "2.1.2",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
          "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
        },
        "safe-buffer": {
          "version": "5.2.1",
          "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
          "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ=="
        }
      }
    },
    "mongoose-legacy-pluralize": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/mongoose-legacy-pluralize/-/mongoose-legacy-pluralize-1.0.2.tgz",
      "integrity": "sha512-Yo/7qQU4/EyIS8YDFSeenIvXxZN+ld7YdV9LqFVQJzTLye8unujAWPZ4NWKfFA+RNjh+wvTWKY9Z3E5XM6ZZiQ==",
      "requires": {}
    },
    "mpath": {
      "version": "0.8.3",
      "resolved": "https://registry.npmjs.org/mpath/-/mpath-0.8.3.tgz",
      "integrity": "sha512-eb9rRvhDltXVNL6Fxd2zM9D4vKBxjVVQNLNijlj7uoXUy19zNDsIif5zR+pWmPCWNKwAtqyo4JveQm4nfD5+eA=="
    },
    "mpromise": {
      "version": "0.5.5",
      "resolved": "https://registry.npmjs.org/mpromise/-/mpromise-0.5.5.tgz",
      "integrity": "sha1-9bJCWddjrMIlewoMjG2Gb9UXMuY="
    },
    "mquery": {
      "version": "3.2.5",
      "resolved": "https://registry.npmjs.org/mquery/-/mquery-3.2.5.tgz",
      "integrity": "sha512-VjOKHHgU84wij7IUoZzFRU07IAxd5kWJaDmyUzQlbjHjyoeK5TNeeo8ZsFDtTYnSgpW6n/nMNIHvE3u8Lbrf4A==",
      "requires": {
        "bluebird": "3.5.1",
        "debug": "3.1.0",
        "regexp-clone": "^1.0.0",
        "safe-buffer": "5.1.2",
        "sliced": "1.0.1"
      },
      "dependencies": {
        "debug": {
          "version": "3.1.0",
          "resolved": "https://registry.npmjs.org/debug/-/debug-3.1.0.tgz",
          "integrity": "sha512-OX8XqP7/1a9cqkxYw2yXss15f26NKWBpDXQd0/uK/KPqdQhxbPa994hnzjcE2VqQpDslf55723cKPUOGSmMY3g==",
          "requires": {
            "ms": "2.0.0"
          }
        }
      }
    },
    "ms": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
      "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
    },
    "multer": {
      "version": "1.4.2",
      "resolved": "https://registry.npmjs.org/multer/-/multer-1.4.2.tgz",
      "integrity": "sha512-xY8pX7V+ybyUpbYMxtjM9KAiD9ixtg5/JkeKUTD6xilfDv0vzzOFcCp4Ljb1UU3tSOM3VTZtKo63OmzOrGi3Cg==",
      "requires": {
        "append-field": "^1.0.0",
        "busboy": "^0.2.11",
        "concat-stream": "^1.5.2",
        "mkdirp": "^0.5.1",
        "object-assign": "^4.1.1",
        "on-finished": "^2.3.0",
        "type-is": "^1.6.4",
        "xtend": "^4.0.0"
      },
      "dependencies": {
        "mkdirp": {
          "version": "0.5.5",
          "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-0.5.5.tgz",
          "integrity": "sha512-NKmAlESf6jMGym1++R0Ra7wvhV+wFW63FaSOFPwRahvea0gMUcGUhVeAg/0BC0wiv9ih5NYPB1Wn1UEI1/L+xQ==",
          "requires": {
            "minimist": "^1.2.5"
          }
        }
      }
    },
    "multer-s3": {
      "version": "2.9.0",
      "resolved": "https://registry.npmjs.org/multer-s3/-/multer-s3-2.9.0.tgz",
      "integrity": "sha512-qLF8pCD5HhXLLd954q49B63x3bk6Fe0jqD3eM0FVcGtqhiSVuTrchEDAo0mnO5pc34cMuX/CVCCbPkGTjX2xUA==",
      "requires": {
        "file-type": "^3.3.0",
        "is-svg": "^2.1.0",
        "run-parallel": "^1.1.6"
      }
    },
    "muri": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/muri/-/muri-1.3.0.tgz",
      "integrity": "sha512-FiaFwKl864onHFFUV/a2szAl7X0fxVlSKNdhTf+BM8i8goEgYut8u5P9MqQqIYwvaMxjzVESsoEm/2kfkFH1rg=="
    },
    "nanomatch": {
      "version": "1.2.13",
      "resolved": "https://registry.npmjs.org/nanomatch/-/nanomatch-1.2.13.tgz",
      "integrity": "sha512-fpoe2T0RbHwBTBUOftAfBPaDEi06ufaUai0mE6Yn1kacc3SnTErfb/h+X94VXzI64rKFHYImXSvdwGGCmwOqCA==",
      "dev": true,
      "requires": {
        "arr-diff": "^4.0.0",
        "array-unique": "^0.3.2",
        "define-property": "^2.0.2",
        "extend-shallow": "^3.0.2",
        "fragment-cache": "^0.2.1",
        "is-windows": "^1.0.2",
        "kind-of": "^6.0.2",
        "object.pick": "^1.3.0",
        "regex-not": "^1.0.0",
        "snapdragon": "^0.8.1",
        "to-regex": "^3.0.1"
      },
      "dependencies": {
        "arr-diff": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/arr-diff/-/arr-diff-4.0.0.tgz",
          "integrity": "sha1-1kYQdP6/7HHn4VI1dhoyml3HxSA=",
          "dev": true
        },
        "array-unique": {
          "version": "0.3.2",
          "resolved": "https://registry.npmjs.org/array-unique/-/array-unique-0.3.2.tgz",
          "integrity": "sha1-qJS3XUvE9s1nnvMkSp/Y9Gri1Cg=",
          "dev": true
        },
        "kind-of": {
          "version": "6.0.3",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",
          "integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw==",
          "dev": true
        }
      }
    },
    "natural-compare": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/natural-compare/-/natural-compare-1.4.0.tgz",
      "integrity": "sha1-Sr6/7tdUHywnrPspvbvRXI1bpPc=",
      "dev": true
    },
    "negotiator": {
      "version": "0.6.2",
      "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-0.6.2.tgz",
      "integrity": "sha512-hZXc7K2e+PgeI1eDBe/10Ard4ekbfrrqG8Ep+8Jmf4JID2bNg7NvCPOZN+kfF574pFQI7mum2AUqDidoKqcTOw=="
    },
    "neo-async": {
      "version": "2.6.2",
      "resolved": "https://registry.npmjs.org/neo-async/-/neo-async-2.6.2.tgz",
      "integrity": "sha512-Yd3UES5mWCSqR+qNT93S3UoYUkqAZ9lLg8a7g9rimsWmYGK8cVToA4/sF3RrshdyV3sAGMXVUmpMYOw+dLpOuw==",
      "dev": true
    },
    "node": {
      "version": "15.14.0",
      "resolved": "https://registry.npmjs.org/node/-/node-15.14.0.tgz",
      "integrity": "sha512-svKWxg++g9+ddISNEdh/Mw1XXEnhMkgL4vgsztO3+QtneathEVYAFUPzXvW/d37vk+mZSdcoIsLgMLAOaO+Vvg==",
      "requires": {
        "node-bin-setup": "^1.0.0"
      }
    },
    "node-addon-api": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/node-addon-api/-/node-addon-api-3.2.1.tgz",
      "integrity": "sha512-mmcei9JghVNDYydghQmeDX8KoAm0FAiYyIcUt/N4nhyAipB17pllZQDOJD2fotxABnt4Mdz+dKTO7eftLg4d0A=="
    },
    "node-bin-setup": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/node-bin-setup/-/node-bin-setup-1.0.6.tgz",
      "integrity": "sha512-uPIxXNis1CRbv1DwqAxkgBk5NFV3s7cMN/Gf556jSw6jBvV7ca4F9lRL/8cALcZecRibeqU+5dFYqFFmzv5a0Q=="
    },
    "node-fetch": {
      "version": "2.6.1",
      "resolved": "https://registry.npmjs.org/node-fetch/-/node-fetch-2.6.1.tgz",
      "integrity": "sha512-V4aYg89jEoVRxRb2fJdAg8FHvI7cEyYdVAh94HH0UIK8oJxUfkjlDQN9RbMx+bEjP7+ggMiFRprSti032Oipxw=="
    },
    "node-int64": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/node-int64/-/node-int64-0.4.0.tgz",
      "integrity": "sha1-h6kGXNs1XTGC2PlM4RGIuCXGijs=",
      "dev": true
    },
    "node-notifier": {
      "version": "5.4.5",
      "resolved": "https://registry.npmjs.org/node-notifier/-/node-notifier-5.4.5.tgz",
      "integrity": "sha512-tVbHs7DyTLtzOiN78izLA85zRqB9NvEXkAf014Vx3jtSvn/xBl6bR8ZYifj+dFcFrKI21huSQgJZ6ZtL3B4HfQ==",
      "dev": true,
      "requires": {
        "growly": "^1.3.0",
        "is-wsl": "^1.1.0",
        "semver": "^5.5.0",
        "shellwords": "^0.1.1",
        "which": "^1.3.0"
      }
    },
    "nodemailer": {
      "version": "6.6.1",
      "resolved": "https://registry.npmjs.org/nodemailer/-/nodemailer-6.6.1.tgz",
      "integrity": "sha512-1xzFN3gqv+/qJ6YRyxBxfTYstLNt0FCtZaFRvf4Sg9wxNGWbwFmGXVpfSi6ThGK6aRxAo+KjHtYSW8NvCsNSAg=="
    },
    "nodemon": {
      "version": "2.0.7",
      "resolved": "https://registry.npmjs.org/nodemon/-/nodemon-2.0.7.tgz",
      "integrity": "sha512-XHzK69Awgnec9UzHr1kc8EomQh4sjTQ8oRf8TsGrSmHDx9/UmiGG9E/mM3BuTfNeFwdNBvrqQq/RHL0xIeyFOA==",
      "requires": {
        "chokidar": "^3.2.2",
        "debug": "^3.2.6",
        "ignore-by-default": "^1.0.1",
        "minimatch": "^3.0.4",
        "pstree.remy": "^1.1.7",
        "semver": "^5.7.1",
        "supports-color": "^5.5.0",
        "touch": "^3.1.0",
        "undefsafe": "^2.0.3",
        "update-notifier": "^4.1.0"
      },
      "dependencies": {
        "debug": {
          "version": "3.2.7",
          "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.7.tgz",
          "integrity": "sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ==",
          "requires": {
            "ms": "^2.1.1"
          }
        },
        "ms": {
          "version": "2.1.3",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
          "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA=="
        }
      }
    },
    "nopt": {
      "version": "1.0.10",
      "resolved": "https://registry.npmjs.org/nopt/-/nopt-1.0.10.tgz",
      "integrity": "sha1-bd0hvSoxQXuScn3Vhfim83YI6+4=",
      "requires": {
        "abbrev": "1"
      }
    },
    "normalize-package-data": {
      "version": "2.5.0",
      "resolved": "https://registry.npmjs.org/normalize-package-data/-/normalize-package-data-2.5.0.tgz",
      "integrity": "sha512-/5CMN3T0R4XTj4DcGaexo+roZSdSFW/0AOOTROrjxzCG1wrWXEsGbRKevjlIL+ZDE4sZlJr5ED4YW0yqmkK+eA==",
      "dev": true,
      "requires": {
        "hosted-git-info": "^2.1.4",
        "resolve": "^1.10.0",
        "semver": "2 || 3 || 4 || 5",
        "validate-npm-package-license": "^3.0.1"
      },
      "dependencies": {
        "resolve": {
          "version": "1.20.0",
          "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.20.0.tgz",
          "integrity": "sha512-wENBPt4ySzg4ybFQW2TT1zMQucPK95HSh/nq2CFTZVOGut2+pQvSsgtda4d26YrYcr067wjbmzOG8byDPBX63A==",
          "dev": true,
          "requires": {
            "is-core-module": "^2.2.0",
            "path-parse": "^1.0.6"
          }
        }
      }
    },
    "normalize-path": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
      "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA=="
    },
    "normalize-url": {
      "version": "4.5.0",
      "resolved": "https://registry.npmjs.org/normalize-url/-/normalize-url-4.5.0.tgz",
      "integrity": "sha512-2s47yzUxdexf1OhyRi4Em83iQk0aPvwTddtFz4hnSSw9dCEsLEGf6SwIO8ss/19S9iBb5sJaOuTvTGDeZI00BQ=="
    },
    "npm-run-path": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/npm-run-path/-/npm-run-path-2.0.2.tgz",
      "integrity": "sha1-NakjLfo11wZ7TLLd8jV7GHFTbF8=",
      "dev": true,
      "requires": {
        "path-key": "^2.0.0"
      }
    },
    "npmlog": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/npmlog/-/npmlog-4.1.2.tgz",
      "integrity": "sha512-2uUqazuKlTaSI/dC8AzicUck7+IrEaOnN/e0jd3Xtt1KcGpwx30v50mL7oPyr/h9bL3E4aZccVwpwP+5W9Vjkg==",
      "requires": {
        "are-we-there-yet": "~1.1.2",
        "console-control-strings": "~1.1.0",
        "gauge": "~2.7.3",
        "set-blocking": "~2.0.0"
      }
    },
    "number-is-nan": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/number-is-nan/-/number-is-nan-1.0.1.tgz",
      "integrity": "sha1-CXtgK1NCKlIsGvuHkDGDNpQaAR0="
    },
    "nwsapi": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/nwsapi/-/nwsapi-2.2.0.tgz",
      "integrity": "sha512-h2AatdwYH+JHiZpv7pt/gSX1XoRGb7L/qSIeuqA6GwYoF9w1vP1cw42TO0aI2pNyshRK5893hNSl+1//vHK7hQ==",
      "dev": true
    },
    "oauth": {
      "version": "0.9.15",
      "resolved": "https://registry.npmjs.org/oauth/-/oauth-0.9.15.tgz",
      "integrity": "sha1-vR/vr2hslrdUda7VGWQS/2DPucE="
    },
    "oauth-sign": {
      "version": "0.9.0",
      "resolved": "https://registry.npmjs.org/oauth-sign/-/oauth-sign-0.9.0.tgz",
      "integrity": "sha512-fexhUFFPTGV8ybAtSIGbV6gOkSv8UtRbDBnAyLQw4QPKkgNlsH2ByPGtMUqdWkos6YCRmAqViwgZrJc/mRDzZQ==",
      "dev": true
    },
    "object-assign": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
      "integrity": "sha1-IQmtx5ZYh8/AXLvUQsrIv7s2CGM="
    },
    "object-copy": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/object-copy/-/object-copy-0.1.0.tgz",
      "integrity": "sha1-fn2Fi3gb18mRpBupde04EnVOmYw=",
      "dev": true,
      "requires": {
        "copy-descriptor": "^0.1.0",
        "define-property": "^0.2.5",
        "kind-of": "^3.0.3"
      },
      "dependencies": {
        "define-property": {
          "version": "0.2.5",
          "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
          "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
          "dev": true,
          "requires": {
            "is-descriptor": "^0.1.0"
          }
        }
      }
    },
    "object-inspect": {
      "version": "1.10.3",
      "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.10.3.tgz",
      "integrity": "sha512-e5mCJlSH7poANfC8z8S9s9S2IN5/4Zb3aZ33f5s8YqoazCFzNLloLU8r5VCG+G7WoqLvAAZoVMcy3tp/3X0Plw==",
      "dev": true
    },
    "object-keys": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/object-keys/-/object-keys-1.1.1.tgz",
      "integrity": "sha512-NuAESUOUMrlIXOfHKzD6bpPu3tYt3xvjNdRIQ+FeT0lNb4K8WR70CaDxhuNguS2XG+GjkyMwOzsN5ZktImfhLA==",
      "dev": true
    },
    "object-visit": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/object-visit/-/object-visit-1.0.1.tgz",
      "integrity": "sha1-95xEk68MU3e1n+OdOV5BBC3QRbs=",
      "dev": true,
      "requires": {
        "isobject": "^3.0.0"
      },
      "dependencies": {
        "isobject": {
          "version": "3.0.1",
          "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
          "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",
          "dev": true
        }
      }
    },
    "object.assign": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/object.assign/-/object.assign-4.1.2.tgz",
      "integrity": "sha512-ixT2L5THXsApyiUPYKmW+2EHpXXe5Ii3M+f4e+aJFAHao5amFRW6J0OO6c/LU8Be47utCx2GL89hxGB6XSmKuQ==",
      "dev": true,
      "requires": {
        "call-bind": "^1.0.0",
        "define-properties": "^1.1.3",
        "has-symbols": "^1.0.1",
        "object-keys": "^1.1.1"
      }
    },
    "object.getownpropertydescriptors": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/object.getownpropertydescriptors/-/object.getownpropertydescriptors-2.1.2.tgz",
      "integrity": "sha512-WtxeKSzfBjlzL+F9b7M7hewDzMwy+C8NRssHd1YrNlzHzIDrXcXiNOMrezdAEM4UXixgV+vvnyBeN7Rygl2ttQ==",
      "dev": true,
      "requires": {
        "call-bind": "^1.0.2",
        "define-properties": "^1.1.3",
        "es-abstract": "^1.18.0-next.2"
      }
    },
    "object.omit": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/object.omit/-/object.omit-2.0.1.tgz",
      "integrity": "sha1-Gpx0SCnznbuFjHbKNXmuKlTr0fo=",
      "dev": true,
      "requires": {
        "for-own": "^0.1.4",
        "is-extendable": "^0.1.1"
      }
    },
    "object.pick": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/object.pick/-/object.pick-1.3.0.tgz",
      "integrity": "sha1-h6EKxMFpS9Lhy/U1kaZhQftd10c=",
      "dev": true,
      "requires": {
        "isobject": "^3.0.1"
      },
      "dependencies": {
        "isobject": {
          "version": "3.0.1",
          "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
          "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",
          "dev": true
        }
      }
    },
    "on-finished": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.3.0.tgz",
      "integrity": "sha1-IPEzZIGwg811M3mSoWlxqi2QaUc=",
      "requires": {
        "ee-first": "1.1.1"
      }
    },
    "on-headers": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/on-headers/-/on-headers-1.0.2.tgz",
      "integrity": "sha512-pZAE+FJLoyITytdqK0U5s+FIpjN0JP3OzFi/u8Rx+EV5/W+JTWGXG8xFzevE7AjBfDqHv/8vL8qQsIhHnqRkrA=="
    },
    "once": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
      "integrity": "sha1-WDsap3WWHUsROsF9nFC6753Xa9E=",
      "requires": {
        "wrappy": "1"
      }
    },
    "one-time": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/one-time/-/one-time-1.0.0.tgz",
      "integrity": "sha512-5DXOiRKwuSEcQ/l0kGCF6Q3jcADFv5tSmRaJck/OqkVFcOzutB134KRSfF0xDrL39MNnqxbHBbUUcjZIhTgb2g==",
      "requires": {
        "fn.name": "1.x.x"
      }
    },
    "optional-require": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/optional-require/-/optional-require-1.0.3.tgz",
      "integrity": "sha512-RV2Zp2MY2aeYK5G+B/Sps8lW5NHAzE5QClbFP15j+PWmP+T9PxlJXBOOLoSAdgwFvS4t0aMR4vpedMkbHfh0nA=="
    },
    "optionator": {
      "version": "0.8.3",
      "resolved": "https://registry.npmjs.org/optionator/-/optionator-0.8.3.tgz",
      "integrity": "sha512-+IW9pACdk3XWmmTXG8m3upGUJst5XRGzxMRjXzAuJ1XnIFNvfhjjIuYkDvysnPQ7qzqVzLt78BCruntqRhWQbA==",
      "dev": true,
      "requires": {
        "deep-is": "~0.1.3",
        "fast-levenshtein": "~2.0.6",
        "levn": "~0.3.0",
        "prelude-ls": "~1.1.2",
        "type-check": "~0.3.2",
        "word-wrap": "~1.2.3"
      }
    },
    "os-homedir": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/os-homedir/-/os-homedir-1.0.2.tgz",
      "integrity": "sha1-/7xJiDNuDoM94MFox+8VISGqf7M=",
      "dev": true
    },
    "os-locale": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/os-locale/-/os-locale-2.1.0.tgz",
      "integrity": "sha512-3sslG3zJbEYcaC4YVAvDorjGxc7tv6KVATnLPZONiljsUncvihe9BQoVCEs0RZ1kmf4Hk9OBqlZfJZWI4GanKA==",
      "dev": true,
      "requires": {
        "execa": "^0.7.0",
        "lcid": "^1.0.0",
        "mem": "^1.1.0"
      }
    },
    "os-tmpdir": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/os-tmpdir/-/os-tmpdir-1.0.2.tgz",
      "integrity": "sha1-u+Z0BseaqFxc/sdm/lc0VV36EnQ=",
      "dev": true
    },
    "p-cancelable": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/p-cancelable/-/p-cancelable-1.1.0.tgz",
      "integrity": "sha512-s73XxOZ4zpt1edZYZzvhqFa6uvQc1vwUa0K0BdtIZgQMAJj9IbebH+JkgKZc9h+B05PKHLOTl4ajG1BmNrVZlw=="
    },
    "p-finally": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/p-finally/-/p-finally-1.0.0.tgz",
      "integrity": "sha1-P7z7FbiZpEEjs0ttzBi3JDNqLK4=",
      "dev": true
    },
    "p-limit": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-1.3.0.tgz",
      "integrity": "sha512-vvcXsLAJ9Dr5rQOPk7toZQZJApBl2K4J6dANSsEuh6QI41JYcsS/qhTGa9ErIUUgK3WNQoJYvylxvjqmiqEA9Q==",
      "dev": true,
      "requires": {
        "p-try": "^1.0.0"
      }
    },
    "p-locate": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-2.0.0.tgz",
      "integrity": "sha1-IKAQOyIqcMj9OcwuWAaA893l7EM=",
      "dev": true,
      "requires": {
        "p-limit": "^1.1.0"
      }
    },
    "p-try": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/p-try/-/p-try-1.0.0.tgz",
      "integrity": "sha1-y8ec26+P1CKOE/Yh8rGiN8GyB7M=",
      "dev": true
    },
    "package-json": {
      "version": "6.5.0",
      "resolved": "https://registry.npmjs.org/package-json/-/package-json-6.5.0.tgz",
      "integrity": "sha512-k3bdm2n25tkyxcjSKzB5x8kfVxlMdgsbPr0GkZcwHsLpba6cBjqCt1KlcChKEvxHIcTB1FVMuwoijZ26xex5MQ==",
      "requires": {
        "got": "^9.6.0",
        "registry-auth-token": "^4.0.0",
        "registry-url": "^5.0.0",
        "semver": "^6.2.0"
      },
      "dependencies": {
        "semver": {
          "version": "6.3.0",
          "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
          "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw=="
        }
      }
    },
    "parse-glob": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/parse-glob/-/parse-glob-3.0.4.tgz",
      "integrity": "sha1-ssN2z7EfNVE7rdFz7wu246OIORw=",
      "dev": true,
      "requires": {
        "glob-base": "^0.3.0",
        "is-dotfile": "^1.0.0",
        "is-extglob": "^1.0.0",
        "is-glob": "^2.0.0"
      },
      "dependencies": {
        "is-extglob": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-1.0.0.tgz",
          "integrity": "sha1-rEaBd8SUNAWgkvyPKXYMb/xiBsA=",
          "dev": true
        },
        "is-glob": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-2.0.1.tgz",
          "integrity": "sha1-0Jb5JqPe1WAPP9/ZEZjLCIjC2GM=",
          "dev": true,
          "requires": {
            "is-extglob": "^1.0.0"
          }
        }
      }
    },
    "parse-json": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-2.2.0.tgz",
      "integrity": "sha1-9ID0BDTvgHQfhGkJn43qGPVaTck=",
      "dev": true,
      "requires": {
        "error-ex": "^1.2.0"
      }
    },
    "parse5": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/parse5/-/parse5-4.0.0.tgz",
      "integrity": "sha512-VrZ7eOd3T1Fk4XWNXMgiGBK/z0MG48BWG2uQNU4I72fkQuKUTZpl+u9k+CxEG0twMVzSmXEEz12z5Fnw1jIQFA==",
      "dev": true
    },
    "parseurl": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz",
      "integrity": "sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ=="
    },
    "pascalcase": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/pascalcase/-/pascalcase-0.1.1.tgz",
      "integrity": "sha1-s2PlXoAGym/iF4TS2yK9FdeRfxQ=",
      "dev": true
    },
    "passport": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/passport/-/passport-0.4.1.tgz",
      "integrity": "sha512-IxXgZZs8d7uFSt3eqNjM9NQ3g3uQCW5avD8mRNoXV99Yig50vjuaez6dQK2qC0kVWPRTujxY0dWgGfT09adjYg==",
      "requires": {
        "passport-strategy": "1.x.x",
        "pause": "0.0.1"
      }
    },
    "passport-google-oauth": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/passport-google-oauth/-/passport-google-oauth-2.0.0.tgz",
      "integrity": "sha512-JKxZpBx6wBQXX1/a1s7VmdBgwOugohH+IxCy84aPTZNq/iIPX6u7Mqov1zY7MKRz3niFPol0KJz8zPLBoHKtYA==",
      "requires": {
        "passport-google-oauth1": "1.x.x",
        "passport-google-oauth20": "2.x.x"
      }
    },
    "passport-google-oauth1": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/passport-google-oauth1/-/passport-google-oauth1-1.0.0.tgz",
      "integrity": "sha1-r3SoA99R7GRvZqRNgigr5vEI4Mw=",
      "requires": {
        "passport-oauth1": "1.x.x"
      }
    },
    "passport-google-oauth20": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/passport-google-oauth20/-/passport-google-oauth20-2.0.0.tgz",
      "integrity": "sha512-KSk6IJ15RoxuGq7D1UKK/8qKhNfzbLeLrG3gkLZ7p4A6DBCcv7xpyQwuXtWdpyR0+E0mwkpjY1VfPOhxQrKzdQ==",
      "requires": {
        "passport-oauth2": "1.x.x"
      }
    },
    "passport-oauth1": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/passport-oauth1/-/passport-oauth1-1.1.0.tgz",
      "integrity": "sha1-p96YiiEfnPRoc3cTDqdN8ycwyRg=",
      "requires": {
        "oauth": "0.9.x",
        "passport-strategy": "1.x.x",
        "utils-merge": "1.x.x"
      }
    },
    "passport-oauth2": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/passport-oauth2/-/passport-oauth2-1.5.0.tgz",
      "integrity": "sha512-kqBt6vR/5VlCK8iCx1/KpY42kQ+NEHZwsSyt4Y6STiNjU+wWICG1i8ucc1FapXDGO15C5O5VZz7+7vRzrDPXXQ==",
      "requires": {
        "base64url": "3.x.x",
        "oauth": "0.9.x",
        "passport-strategy": "1.x.x",
        "uid2": "0.0.x",
        "utils-merge": "1.x.x"
      }
    },
    "passport-strategy": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/passport-strategy/-/passport-strategy-1.0.0.tgz",
      "integrity": "sha1-tVOaqPwiWj0a0XlHbd8ja0QPUuQ="
    },
    "path-exists": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-3.0.0.tgz",
      "integrity": "sha1-zg6+ql94yxiSXqfYENe1mwEP1RU=",
      "dev": true
    },
    "path-is-absolute": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
      "integrity": "sha1-F0uSaHNVNP+8es5r9TpanhtcX18="
    },
    "path-key": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/path-key/-/path-key-2.0.1.tgz",
      "integrity": "sha1-QRyttXTFoUDTpLGRDUDYDMn0C0A=",
      "dev": true
    },
    "path-parse": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.7.tgz",
      "integrity": "sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw==",
      "dev": true
    },
    "path-to-regexp": {
      "version": "0.1.7",
      "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-0.1.7.tgz",
      "integrity": "sha1-32BBeABfUi8V60SQ5yR6G/qmf4w="
    },
    "path-type": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/path-type/-/path-type-1.1.0.tgz",
      "integrity": "sha1-WcRPfuSR2nBNpBXaWkBwuk+P5EE=",
      "dev": true,
      "requires": {
        "graceful-fs": "^4.1.2",
        "pify": "^2.0.0",
        "pinkie-promise": "^2.0.0"
      }
    },
    "pause": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/pause/-/pause-0.0.1.tgz",
      "integrity": "sha1-HUCLP9t2kjuVQ9lvtMnf1TXZy10="
    },
    "performance-now": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/performance-now/-/performance-now-2.1.0.tgz",
      "integrity": "sha1-Ywn04OX6kT7BxpMHrjZLSzd8nns=",
      "dev": true
    },
    "picomatch": {
      "version": "2.2.3",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.2.3.tgz",
      "integrity": "sha512-KpELjfwcCDUb9PeigTs2mBJzXUPzAuP2oPcA989He8Rte0+YUAjw1JVedDhuTKPkHjSYzMN3npC9luThGYEKdg=="
    },
    "pify": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/pify/-/pify-2.3.0.tgz",
      "integrity": "sha1-7RQaasBDqEnqWISY59yosVMw6Qw=",
      "dev": true
    },
    "pinkie": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/pinkie/-/pinkie-2.0.4.tgz",
      "integrity": "sha1-clVrgM+g1IqXToDnckjoDtT3+HA=",
      "dev": true
    },
    "pinkie-promise": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/pinkie-promise/-/pinkie-promise-2.0.1.tgz",
      "integrity": "sha1-ITXW36ejWMBprJsXh3YogihFD/o=",
      "dev": true,
      "requires": {
        "pinkie": "^2.0.0"
      }
    },
    "pkg-dir": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/pkg-dir/-/pkg-dir-2.0.0.tgz",
      "integrity": "sha1-9tXREJ4Z1j7fQo4L1X4Sd3YVM0s=",
      "dev": true,
      "requires": {
        "find-up": "^2.1.0"
      }
    },
    "pn": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/pn/-/pn-1.1.0.tgz",
      "integrity": "sha512-2qHaIQr2VLRFoxe2nASzsV6ef4yOOH+Fi9FBOVH6cqeSgUnoyySPZkxzLuzd+RYOQTRpROA0ztTMqxROKSb/nA==",
      "dev": true
    },
    "posix-character-classes": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/posix-character-classes/-/posix-character-classes-0.1.1.tgz",
      "integrity": "sha1-AerA/jta9xoqbAL+q7jB/vfgDqs=",
      "dev": true
    },
    "prelude-ls": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.1.2.tgz",
      "integrity": "sha1-IZMqVJ9eUv/ZqCf1cOBL5iqX2lQ=",
      "dev": true
    },
    "prepend-http": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/prepend-http/-/prepend-http-2.0.0.tgz",
      "integrity": "sha1-6SQ0v6XqjBn0HN/UAddBo8gZ2Jc="
    },
    "preserve": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/preserve/-/preserve-0.2.0.tgz",
      "integrity": "sha1-gV7R9uvGWSb4ZbMQwHE7yzMVzks=",
      "dev": true
    },
    "pretty-format": {
      "version": "22.4.3",
      "resolved": "https://registry.npmjs.org/pretty-format/-/pretty-format-22.4.3.tgz",
      "integrity": "sha512-S4oT9/sT6MN7/3COoOy+ZJeA92VmOnveLHgrwBE3Z1W5N9S2A1QGNYiE1z75DAENbJrXXUb+OWXhpJcg05QKQQ==",
      "dev": true,
      "requires": {
        "ansi-regex": "^3.0.0",
        "ansi-styles": "^3.2.0"
      },
      "dependencies": {
        "ansi-regex": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-3.0.0.tgz",
          "integrity": "sha1-7QMXwyIGT3lGbAKWa922Bas32Zg=",
          "dev": true
        },
        "ansi-styles": {
          "version": "3.2.1",
          "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
          "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
          "dev": true,
          "requires": {
            "color-convert": "^1.9.0"
          }
        },
        "color-convert": {
          "version": "1.9.3",
          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
          "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
          "dev": true,
          "requires": {
            "color-name": "1.1.3"
          }
        },
        "color-name": {
          "version": "1.1.3",
          "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
          "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU=",
          "dev": true
        }
      }
    },
    "private": {
      "version": "0.1.8",
      "resolved": "https://registry.npmjs.org/private/-/private-0.1.8.tgz",
      "integrity": "sha512-VvivMrbvd2nKkiG38qjULzlc+4Vx4wm/whI9pQD35YrARNnhxeiRktSOhSukRLFNlzg6Br/cJPet5J/u19r/mg==",
      "dev": true
    },
    "process-nextick-args": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/process-nextick-args/-/process-nextick-args-2.0.1.tgz",
      "integrity": "sha512-3ouUOpQhtgrbOa17J7+uxOTpITYWaGP7/AhoR3+A+/1e9skrzelGi/dXzEYyvbxubEF6Wn2ypscTKiKJFFn1ag=="
    },
    "proxy-addr": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/proxy-addr/-/proxy-addr-2.0.6.tgz",
      "integrity": "sha512-dh/frvCBVmSsDYzw6n926jv974gddhkFPfiN8hPOi30Wax25QZyZEGveluCgliBnqmuM+UJmBErbAUFIoDbjOw==",
      "requires": {
        "forwarded": "~0.1.2",
        "ipaddr.js": "1.9.1"
      }
    },
    "pseudomap": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/pseudomap/-/pseudomap-1.0.2.tgz",
      "integrity": "sha1-8FKijacOYYkX7wqKw0wa5aaChrM=",
      "dev": true
    },
    "psl": {
      "version": "1.8.0",
      "resolved": "https://registry.npmjs.org/psl/-/psl-1.8.0.tgz",
      "integrity": "sha512-RIdOzyoavK+hA18OGGWDqUTsCLhtA7IcZ/6NCs4fFJaHBDab+pDDmDIByWFRQJq2Cd7r1OoQxBGKOaztq+hjIQ==",
      "dev": true
    },
    "pstree.remy": {
      "version": "1.1.8",
      "resolved": "https://registry.npmjs.org/pstree.remy/-/pstree.remy-1.1.8.tgz",
      "integrity": "sha512-77DZwxQmxKnu3aR542U+X8FypNzbfJ+C5XQDk3uWjWxn6151aIMGthWYRXTqT1E5oJvg+ljaa2OJi+VfvCOQ8w=="
    },
    "pump": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/pump/-/pump-3.0.0.tgz",
      "integrity": "sha512-LwZy+p3SFs1Pytd/jYct4wpv49HiYCqd9Rlc5ZVdk0V+8Yzv6jR5Blk3TRmPL1ft69TxP0IMZGJ+WPFU2BFhww==",
      "requires": {
        "end-of-stream": "^1.1.0",
        "once": "^1.3.1"
      }
    },
    "punycode": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.1.1.tgz",
      "integrity": "sha512-XRsRjdf+j5ml+y/6GKHPZbrF/8p2Yga0JPtdqTIY2Xe5ohJPD9saDJJLPvp9+NSBprVvevdXZybnj2cv8OEd0A=="
    },
    "pupa": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/pupa/-/pupa-2.1.1.tgz",
      "integrity": "sha512-l1jNAspIBSFqbT+y+5FosojNpVpF94nlI+wDUpqP9enwOTfHx9f0gh5nB96vl+6yTpsJsypeNrwfzPrKuHB41A==",
      "requires": {
        "escape-goat": "^2.0.0"
      }
    },
    "qs": {
      "version": "6.7.0",
      "resolved": "https://registry.npmjs.org/qs/-/qs-6.7.0.tgz",
      "integrity": "sha512-VCdBRNFTX1fyE7Nb6FYoURo/SPe62QCaAyzJvUjwRaIsc+NePBEniHlvxFmmX56+HZphIGtV0XeCirBtpDrTyQ=="
    },
    "querystring": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/querystring/-/querystring-0.2.1.tgz",
      "integrity": "sha512-wkvS7mL/JMugcup3/rMitHmd9ecIGd2lhFhK9N3UUQ450h66d1r3Y9nvXzQAW1Lq+wyx61k/1pfKS5KuKiyEbg=="
    },
    "queue-microtask": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/queue-microtask/-/queue-microtask-1.2.3.tgz",
      "integrity": "sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A=="
    },
    "randomatic": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/randomatic/-/randomatic-3.1.1.tgz",
      "integrity": "sha512-TuDE5KxZ0J461RVjrJZCJc+J+zCkTb1MbH9AQUq68sMhOMcy9jLcb3BrZKgp9q9Ncltdg4QVqWrH02W2EFFVYw==",
      "dev": true,
      "requires": {
        "is-number": "^4.0.0",
        "kind-of": "^6.0.0",
        "math-random": "^1.0.1"
      },
      "dependencies": {
        "is-number": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/is-number/-/is-number-4.0.0.tgz",
          "integrity": "sha512-rSklcAIlf1OmFdyAqbnWTLVelsQ58uvZ66S/ZyawjWqIviTWCjg2PzVGw8WUA+nNuPTqb4wgA+NszrJ+08LlgQ==",
          "dev": true
        },
        "kind-of": {
          "version": "6.0.3",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",
          "integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw==",
          "dev": true
        }
      }
    },
    "range-parser": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.2.1.tgz",
      "integrity": "sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg=="
    },
    "raw-body": {
      "version": "2.4.0",
      "resolved": "https://registry.npmjs.org/raw-body/-/raw-body-2.4.0.tgz",
      "integrity": "sha512-4Oz8DUIwdvoa5qMJelxipzi/iJIi40O5cGV1wNYp5hvZP8ZN0T+jiNkL0QepXs+EsQ9XJ8ipEDoiH70ySUJP3Q==",
      "requires": {
        "bytes": "3.1.0",
        "http-errors": "1.7.2",
        "iconv-lite": "0.4.24",
        "unpipe": "1.0.0"
      }
    },
    "rc": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/rc/-/rc-1.2.8.tgz",
      "integrity": "sha512-y3bGgqKj3QBdxLbLkomlohkvsA8gdAiUQlSBJnBhfn+BPxg4bc62d8TcBW15wavDfgexCgccckhcZvywyQYPOw==",
      "requires": {
        "deep-extend": "^0.6.0",
        "ini": "~1.3.0",
        "minimist": "^1.2.0",
        "strip-json-comments": "~2.0.1"
      }
    },
    "read-pkg": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/read-pkg/-/read-pkg-1.1.0.tgz",
      "integrity": "sha1-9f+qXs0pyzHAR0vKfXVra7KePyg=",
      "dev": true,
      "requires": {
        "load-json-file": "^1.0.0",
        "normalize-package-data": "^2.3.2",
        "path-type": "^1.0.0"
      }
    },
    "read-pkg-up": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/read-pkg-up/-/read-pkg-up-1.0.1.tgz",
      "integrity": "sha1-nWPBMnbAZZGNV/ACpX9AobZD+wI=",
      "dev": true,
      "requires": {
        "find-up": "^1.0.0",
        "read-pkg": "^1.0.0"
      },
      "dependencies": {
        "find-up": {
          "version": "1.1.2",
          "resolved": "https://registry.npmjs.org/find-up/-/find-up-1.1.2.tgz",
          "integrity": "sha1-ay6YIrGizgpgq2TWEOzK1TyyTQ8=",
          "dev": true,
          "requires": {
            "path-exists": "^2.0.0",
            "pinkie-promise": "^2.0.0"
          }
        },
        "path-exists": {
          "version": "2.1.0",
          "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-2.1.0.tgz",
          "integrity": "sha1-D+tsZPD8UY2adU3V77YscCJ2H0s=",
          "dev": true,
          "requires": {
            "pinkie-promise": "^2.0.0"
          }
        }
      }
    },
    "readable-stream": {
      "version": "2.3.7",
      "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.7.tgz",
      "integrity": "sha512-Ebho8K4jIbHAxnuxi7o42OrZgF/ZTNcsZj6nRKyUmkhLFq8CHItp/fy6hQZuZmP/n3yZ9VBUbp4zz/mX8hmYPw==",
      "requires": {
        "core-util-is": "~1.0.0",
        "inherits": "~2.0.3",
        "isarray": "~1.0.0",
        "process-nextick-args": "~2.0.0",
        "safe-buffer": "~5.1.1",
        "string_decoder": "~1.1.1",
        "util-deprecate": "~1.0.1"
      }
    },
    "readdirp": {
      "version": "3.5.0",
      "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-3.5.0.tgz",
      "integrity": "sha512-cMhu7c/8rdhkHXWsY+osBhfSy0JikwpHK/5+imo+LpeasTF8ouErHrlYkwT0++njiyuDvc7OFY5T3ukvZ8qmFQ==",
      "requires": {
        "picomatch": "^2.2.1"
      }
    },
    "realpath-native": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/realpath-native/-/realpath-native-1.1.0.tgz",
      "integrity": "sha512-wlgPA6cCIIg9gKz0fgAPjnzh4yR/LnXovwuo9hvyGvx3h8nX4+/iLZplfUWasXpqD8BdnGnP5njOFjkUwPzvjA==",
      "dev": true,
      "requires": {
        "util.promisify": "^1.0.0"
      }
    },
    "regenerator-runtime": {
      "version": "0.11.1",
      "resolved": "https://registry.npmjs.org/regenerator-runtime/-/regenerator-runtime-0.11.1.tgz",
      "integrity": "sha512-MguG95oij0fC3QV3URf4V2SDYGJhJnJGqvIIgdECeODCT98wSWDAJ94SSuVpYQUoTcGUIL6L4yNB7j1DFFHSBg==",
      "dev": true
    },
    "regex-cache": {
      "version": "0.4.4",
      "resolved": "https://registry.npmjs.org/regex-cache/-/regex-cache-0.4.4.tgz",
      "integrity": "sha512-nVIZwtCjkC9YgvWkpM55B5rBhBYRZhAaJbgcFYXXsHnbZ9UZI9nnVWYZpBlCqv9ho2eZryPnWrZGsOdPwVWXWQ==",
      "dev": true,
      "requires": {
        "is-equal-shallow": "^0.1.3"
      }
    },
    "regex-not": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/regex-not/-/regex-not-1.0.2.tgz",
      "integrity": "sha512-J6SDjUgDxQj5NusnOtdFxDwN/+HWykR8GELwctJ7mdqhcyy1xEc4SRFHUXvxTp661YaVKAjfRLZ9cCqS6tn32A==",
      "dev": true,
      "requires": {
        "extend-shallow": "^3.0.2",
        "safe-regex": "^1.1.0"
      }
    },
    "regexp-clone": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/regexp-clone/-/regexp-clone-1.0.0.tgz",
      "integrity": "sha512-TuAasHQNamyyJ2hb97IuBEif4qBHGjPHBS64sZwytpLEqtBQ1gPJTnOaQ6qmpET16cK14kkjbazl6+p0RRv0yw=="
    },
    "registry-auth-token": {
      "version": "4.2.1",
      "resolved": "https://registry.npmjs.org/registry-auth-token/-/registry-auth-token-4.2.1.tgz",
      "integrity": "sha512-6gkSb4U6aWJB4SF2ZvLb76yCBjcvufXBqvvEx1HbmKPkutswjW1xNVRY0+daljIYRbogN7O0etYSlbiaEQyMyw==",
      "requires": {
        "rc": "^1.2.8"
      }
    },
    "registry-url": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/registry-url/-/registry-url-5.1.0.tgz",
      "integrity": "sha512-8acYXXTI0AkQv6RAOjE3vOaIXZkT9wo4LOFbBKYQEEnnMNBpKqdUrI6S4NT0KPIo/WVvJ5tE/X5LF/TQUf0ekw==",
      "requires": {
        "rc": "^1.2.8"
      }
    },
    "remove-trailing-separator": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/remove-trailing-separator/-/remove-trailing-separator-1.1.0.tgz",
      "integrity": "sha1-wkvOKig62tW8P1jg1IJJuSN52O8=",
      "dev": true
    },
    "repeat-element": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/repeat-element/-/repeat-element-1.1.4.tgz",
      "integrity": "sha512-LFiNfRcSu7KK3evMyYOuCzv3L10TW7yC1G2/+StMjK8Y6Vqd2MG7r/Qjw4ghtuCOjFvlnms/iMmLqpvW/ES/WQ==",
      "dev": true
    },
    "repeat-string": {
      "version": "1.6.1",
      "resolved": "https://registry.npmjs.org/repeat-string/-/repeat-string-1.6.1.tgz",
      "integrity": "sha1-jcrkcOHIirwtYA//Sndihtp15jc=",
      "dev": true
    },
    "repeating": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/repeating/-/repeating-2.0.1.tgz",
      "integrity": "sha1-UhTFOpJtNVJwdSf7q0FdvAjQbdo=",
      "dev": true,
      "requires": {
        "is-finite": "^1.0.0"
      }
    },
    "request": {
      "version": "2.88.2",
      "resolved": "https://registry.npmjs.org/request/-/request-2.88.2.tgz",
      "integrity": "sha512-MsvtOrfG9ZcrOwAW+Qi+F6HbD0CWXEh9ou77uOb7FM2WPhwT7smM833PzanhJLsgXjN89Ir6V2PczXNnMpwKhw==",
      "dev": true,
      "requires": {
        "aws-sign2": "~0.7.0",
        "aws4": "^1.8.0",
        "caseless": "~0.12.0",
        "combined-stream": "~1.0.6",
        "extend": "~3.0.2",
        "forever-agent": "~0.6.1",
        "form-data": "~2.3.2",
        "har-validator": "~5.1.3",
        "http-signature": "~1.2.0",
        "is-typedarray": "~1.0.0",
        "isstream": "~0.1.2",
        "json-stringify-safe": "~5.0.1",
        "mime-types": "~2.1.19",
        "oauth-sign": "~0.9.0",
        "performance-now": "^2.1.0",
        "qs": "~6.5.2",
        "safe-buffer": "^5.1.2",
        "tough-cookie": "~2.5.0",
        "tunnel-agent": "^0.6.0",
        "uuid": "^3.3.2"
      },
      "dependencies": {
        "qs": {
          "version": "6.5.2",
          "resolved": "https://registry.npmjs.org/qs/-/qs-6.5.2.tgz",
          "integrity": "sha512-N5ZAX4/LxJmF+7wN74pUD6qAh9/wnvdQcjq9TZjevvXzSUo7bfmw91saqMjzGS2xq91/odN2dW/WOl7qQHNDGA==",
          "dev": true
        }
      }
    },
    "request-promise-core": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/request-promise-core/-/request-promise-core-1.1.4.tgz",
      "integrity": "sha512-TTbAfBBRdWD7aNNOoVOBH4pN/KigV6LyapYNNlAPA8JwbovRti1E88m3sYAwsLi5ryhPKsE9APwnjFTgdUjTpw==",
      "dev": true,
      "requires": {
        "lodash": "^4.17.19"
      }
    },
    "request-promise-native": {
      "version": "1.0.9",
      "resolved": "https://registry.npmjs.org/request-promise-native/-/request-promise-native-1.0.9.tgz",
      "integrity": "sha512-wcW+sIUiWnKgNY0dqCpOZkUbF/I+YPi+f09JZIDa39Ec+q82CpSYniDp+ISgTTbKmnpJWASeJBPZmoxH84wt3g==",
      "dev": true,
      "requires": {
        "request-promise-core": "1.1.4",
        "stealthy-require": "^1.1.1",
        "tough-cookie": "^2.3.3"
      }
    },
    "require_optional": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/require_optional/-/require_optional-1.0.1.tgz",
      "integrity": "sha512-qhM/y57enGWHAe3v/NcwML6a3/vfESLe/sGM2dII+gEO0BpKRUkWZow/tyloNqJyN6kXSl3RyyM8Ll5D/sJP8g==",
      "requires": {
        "resolve-from": "^2.0.0",
        "semver": "^5.1.0"
      }
    },
    "require-directory": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/require-directory/-/require-directory-2.1.1.tgz",
      "integrity": "sha1-jGStX9MNqxyXbiNE/+f3kqam30I=",
      "dev": true
    },
    "require-main-filename": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/require-main-filename/-/require-main-filename-1.0.1.tgz",
      "integrity": "sha1-l/cXtp1IeE9fUmpsWqj/3aBVpNE=",
      "dev": true
    },
    "resolve": {
      "version": "1.1.7",
      "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.1.7.tgz",
      "integrity": "sha1-IDEU2CrSxe2ejgQRs5ModeiJ6Xs=",
      "dev": true
    },
    "resolve-cwd": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/resolve-cwd/-/resolve-cwd-2.0.0.tgz",
      "integrity": "sha1-AKn3OHVW4nA46uIyyqNypqWbZlo=",
      "dev": true,
      "requires": {
        "resolve-from": "^3.0.0"
      },
      "dependencies": {
        "resolve-from": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-3.0.0.tgz",
          "integrity": "sha1-six699nWiBvItuZTM17rywoYh0g=",
          "dev": true
        }
      }
    },
    "resolve-from": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-2.0.0.tgz",
      "integrity": "sha1-lICrIOlP+h2egKgEx+oUdhGWa1c="
    },
    "resolve-url": {
      "version": "0.2.1",
      "resolved": "https://registry.npmjs.org/resolve-url/-/resolve-url-0.2.1.tgz",
      "integrity": "sha1-LGN/53yJOv0qZj/iGqkIAGjiBSo=",
      "dev": true
    },
    "responselike": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/responselike/-/responselike-1.0.2.tgz",
      "integrity": "sha1-kYcg7ztjHFZCvgaPFa3lpG9Loec=",
      "requires": {
        "lowercase-keys": "^1.0.0"
      }
    },
    "ret": {
      "version": "0.1.15",
      "resolved": "https://registry.npmjs.org/ret/-/ret-0.1.15.tgz",
      "integrity": "sha512-TTlYpa+OL+vMMNG24xSlQGEJ3B/RzEfUlLct7b5G/ytav+wPrplCpVMFuwzXbkecJrb6IYo1iFb0S9v37754mg==",
      "dev": true
    },
    "rimraf": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-3.0.2.tgz",
      "integrity": "sha512-JZkJMZkAGFFPP2YqXZXPbMlMBgsxzE8ILs4lMIX/2o0L9UBw9O/Y3o6wFw/i9YLapcUJWwqbi3kdxIPdC62TIA==",
      "requires": {
        "glob": "^7.1.3"
      }
    },
    "rsvp": {
      "version": "3.6.2",
      "resolved": "https://registry.npmjs.org/rsvp/-/rsvp-3.6.2.tgz",
      "integrity": "sha512-OfWGQTb9vnwRjwtA2QwpG2ICclHC3pgXZO5xt8H2EfgDquO0qVdSb5T88L4qJVAEugbS56pAuV4XZM58UX8ulw==",
      "dev": true
    },
    "run-parallel": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/run-parallel/-/run-parallel-1.2.0.tgz",
      "integrity": "sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==",
      "requires": {
        "queue-microtask": "^1.2.2"
      }
    },
    "safe-buffer": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
      "integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g=="
    },
    "safe-regex": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/safe-regex/-/safe-regex-1.1.0.tgz",
      "integrity": "sha1-QKNmnzsHfR6UPURinhV91IAjvy4=",
      "dev": true,
      "requires": {
        "ret": "~0.1.10"
      }
    },
    "safer-buffer": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
      "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg=="
    },
    "sane": {
      "version": "2.5.2",
      "resolved": "https://registry.npmjs.org/sane/-/sane-2.5.2.tgz",
      "integrity": "sha1-tNwYYcIbQn6SlQej51HiosuKs/o=",
      "dev": true,
      "requires": {
        "anymatch": "^2.0.0",
        "capture-exit": "^1.2.0",
        "exec-sh": "^0.2.0",
        "fb-watchman": "^2.0.0",
        "fsevents": "^1.2.3",
        "micromatch": "^3.1.4",
        "minimist": "^1.1.1",
        "walker": "~1.0.5",
        "watch": "~0.18.0"
      },
      "dependencies": {
        "anymatch": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-2.0.0.tgz",
          "integrity": "sha512-5teOsQWABXHHBFP9y3skS5P3d/WfWXpv3FUpy+LorMrNYaT9pI4oLMQX7jzQ2KklNpGpWHzdCXTDT2Y3XGlZBw==",
          "dev": true,
          "requires": {
            "micromatch": "^3.1.4",
            "normalize-path": "^2.1.1"
          }
        },
        "arr-diff": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/arr-diff/-/arr-diff-4.0.0.tgz",
          "integrity": "sha1-1kYQdP6/7HHn4VI1dhoyml3HxSA=",
          "dev": true
        },
        "array-unique": {
          "version": "0.3.2",
          "resolved": "https://registry.npmjs.org/array-unique/-/array-unique-0.3.2.tgz",
          "integrity": "sha1-qJS3XUvE9s1nnvMkSp/Y9Gri1Cg=",
          "dev": true
        },
        "braces": {
          "version": "2.3.2",
          "resolved": "https://registry.npmjs.org/braces/-/braces-2.3.2.tgz",
          "integrity": "sha512-aNdbnj9P8PjdXU4ybaWLK2IF3jc/EoDYbC7AazW6to3TRsfXxscC9UXOB5iDiEQrkyIbWp2SLQda4+QAa7nc3w==",
          "dev": true,
          "requires": {
            "arr-flatten": "^1.1.0",
            "array-unique": "^0.3.2",
            "extend-shallow": "^2.0.1",
            "fill-range": "^4.0.0",
            "isobject": "^3.0.1",
            "repeat-element": "^1.1.2",
            "snapdragon": "^0.8.1",
            "snapdragon-node": "^2.0.1",
            "split-string": "^3.0.2",
            "to-regex": "^3.0.1"
          },
          "dependencies": {
            "extend-shallow": {
              "version": "2.0.1",
              "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
              "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
              "dev": true,
              "requires": {
                "is-extendable": "^0.1.0"
              }
            }
          }
        },
        "expand-brackets": {
          "version": "2.1.4",
          "resolved": "https://registry.npmjs.org/expand-brackets/-/expand-brackets-2.1.4.tgz",
          "integrity": "sha1-t3c14xXOMPa27/D4OwQVGiJEliI=",
          "dev": true,
          "requires": {
            "debug": "^2.3.3",
            "define-property": "^0.2.5",
            "extend-shallow": "^2.0.1",
            "posix-character-classes": "^0.1.0",
            "regex-not": "^1.0.0",
            "snapdragon": "^0.8.1",
            "to-regex": "^3.0.1"
          },
          "dependencies": {
            "define-property": {
              "version": "0.2.5",
              "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
              "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
              "dev": true,
              "requires": {
                "is-descriptor": "^0.1.0"
              }
            },
            "extend-shallow": {
              "version": "2.0.1",
              "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
              "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
              "dev": true,
              "requires": {
                "is-extendable": "^0.1.0"
              }
            },
            "is-accessor-descriptor": {
              "version": "0.1.6",
              "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-0.1.6.tgz",
              "integrity": "sha1-qeEss66Nh2cn7u84Q/igiXtcmNY=",
              "dev": true,
              "requires": {
                "kind-of": "^3.0.2"
              },
              "dependencies": {
                "kind-of": {
                  "version": "3.2.2",
                  "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
                  "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
                  "dev": true,
                  "requires": {
                    "is-buffer": "^1.1.5"
                  }
                }
              }
            },
            "is-data-descriptor": {
              "version": "0.1.4",
              "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-0.1.4.tgz",
              "integrity": "sha1-C17mSDiOLIYCgueT8YVv7D8wG1Y=",
              "dev": true,
              "requires": {
                "kind-of": "^3.0.2"
              },
              "dependencies": {
                "kind-of": {
                  "version": "3.2.2",
                  "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
                  "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
                  "dev": true,
                  "requires": {
                    "is-buffer": "^1.1.5"
                  }
                }
              }
            },
            "is-descriptor": {
              "version": "0.1.6",
              "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-0.1.6.tgz",
              "integrity": "sha512-avDYr0SB3DwO9zsMov0gKCESFYqCnE4hq/4z3TdUlukEy5t9C0YRq7HLrsN52NAcqXKaepeCD0n+B0arnVG3Hg==",
              "dev": true,
              "requires": {
                "is-accessor-descriptor": "^0.1.6",
                "is-data-descriptor": "^0.1.4",
                "kind-of": "^5.0.0"
              }
            },
            "kind-of": {
              "version": "5.1.0",
              "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-5.1.0.tgz",
              "integrity": "sha512-NGEErnH6F2vUuXDh+OlbcKW7/wOcfdRHaZ7VWtqCztfHri/++YKmP51OdWeGPuqCOba6kk2OTe5d02VmTB80Pw==",
              "dev": true
            }
          }
        },
        "extglob": {
          "version": "2.0.4",
          "resolved": "https://registry.npmjs.org/extglob/-/extglob-2.0.4.tgz",
          "integrity": "sha512-Nmb6QXkELsuBr24CJSkilo6UHHgbekK5UiZgfE6UHD3Eb27YC6oD+bhcT+tJ6cl8dmsgdQxnWlcry8ksBIBLpw==",
          "dev": true,
          "requires": {
            "array-unique": "^0.3.2",
            "define-property": "^1.0.0",
            "expand-brackets": "^2.1.4",
            "extend-shallow": "^2.0.1",
            "fragment-cache": "^0.2.1",
            "regex-not": "^1.0.0",
            "snapdragon": "^0.8.1",
            "to-regex": "^3.0.1"
          },
          "dependencies": {
            "define-property": {
              "version": "1.0.0",
              "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
              "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
              "dev": true,
              "requires": {
                "is-descriptor": "^1.0.0"
              }
            },
            "extend-shallow": {
              "version": "2.0.1",
              "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
              "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
              "dev": true,
              "requires": {
                "is-extendable": "^0.1.0"
              }
            }
          }
        },
        "fill-range": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-4.0.0.tgz",
          "integrity": "sha1-1USBHUKPmOsGpj3EAtJAPDKMOPc=",
          "dev": true,
          "requires": {
            "extend-shallow": "^2.0.1",
            "is-number": "^3.0.0",
            "repeat-string": "^1.6.1",
            "to-regex-range": "^2.1.0"
          },
          "dependencies": {
            "extend-shallow": {
              "version": "2.0.1",
              "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
              "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
              "dev": true,
              "requires": {
                "is-extendable": "^0.1.0"
              }
            }
          }
        },
        "fsevents": {
          "version": "1.2.13",
          "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-1.2.13.tgz",
          "integrity": "sha512-oWb1Z6mkHIskLzEJ/XWX0srkpkTQ7vaopMQkyaEIoq0fmtFVxOthb8cCxeT+p3ynTdkk/RZwbgG4brR5BeWECw==",
          "dev": true,
          "optional": true,
          "requires": {
            "bindings": "^1.5.0",
            "nan": "^2.12.1"
          }
        },
        "is-accessor-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
          "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
          "dev": true,
          "requires": {
            "kind-of": "^6.0.0"
          }
        },
        "is-data-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
          "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
          "dev": true,
          "requires": {
            "kind-of": "^6.0.0"
          }
        },
        "is-descriptor": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
          "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
          "dev": true,
          "requires": {
            "is-accessor-descriptor": "^1.0.0",
            "is-data-descriptor": "^1.0.0",
            "kind-of": "^6.0.2"
          }
        },
        "is-number": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/is-number/-/is-number-3.0.0.tgz",
          "integrity": "sha1-JP1iAaR4LPUFYcgQJ2r8fRLXEZU=",
          "dev": true,
          "requires": {
            "kind-of": "^3.0.2"
          },
          "dependencies": {
            "kind-of": {
              "version": "3.2.2",
              "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
              "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
              "dev": true,
              "requires": {
                "is-buffer": "^1.1.5"
              }
            }
          }
        },
        "isobject": {
          "version": "3.0.1",
          "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
          "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",
          "dev": true
        },
        "kind-of": {
          "version": "6.0.3",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",
          "integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw==",
          "dev": true
        },
        "micromatch": {
          "version": "3.1.10",
          "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-3.1.10.tgz",
          "integrity": "sha512-MWikgl9n9M3w+bpsY3He8L+w9eF9338xRl8IAO5viDizwSzziFEyUzo2xrrloB64ADbTf8uA8vRqqttDTOmccg==",
          "dev": true,
          "requires": {
            "arr-diff": "^4.0.0",
            "array-unique": "^0.3.2",
            "braces": "^2.3.1",
            "define-property": "^2.0.2",
            "extend-shallow": "^3.0.2",
            "extglob": "^2.0.4",
            "fragment-cache": "^0.2.1",
            "kind-of": "^6.0.2",
            "nanomatch": "^1.2.9",
            "object.pick": "^1.3.0",
            "regex-not": "^1.0.0",
            "snapdragon": "^0.8.1",
            "to-regex": "^3.0.2"
          }
        },
        "normalize-path": {
          "version": "2.1.1",
          "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-2.1.1.tgz",
          "integrity": "sha1-GrKLVW4Zg2Oowab35vogE3/mrtk=",
          "dev": true,
          "requires": {
            "remove-trailing-separator": "^1.0.1"
          }
        },
        "to-regex-range": {
          "version": "2.1.1",
          "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-2.1.1.tgz",
          "integrity": "sha1-fIDBe53+vlmeJzZ+DU3VWQFB2zg=",
          "dev": true,
          "requires": {
            "is-number": "^3.0.0",
            "repeat-string": "^1.6.1"
          }
        }
      }
    },
    "saslprep": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/saslprep/-/saslprep-1.0.3.tgz",
      "integrity": "sha512-/MY/PEMbk2SuY5sScONwhUDsV2p77Znkb/q3nSVstq/yQzYJOH/Azh29p9oJLsl3LnQwSvZDKagDGBsBwSooag==",
      "optional": true,
      "requires": {
        "sparse-bitfield": "^3.0.3"
      }
    },
    "sax": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/sax/-/sax-1.2.4.tgz",
      "integrity": "sha512-NqVDv9TpANUjFm0N8uM5GxL36UgKi9/atZw+x7YFnQ8ckwFGKrl4xX4yWtrey3UJm5nP1kUbnYgLopqWNSRhWw=="
    },
    "semver": {
      "version": "5.7.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
      "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ=="
    },
    "semver-diff": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/semver-diff/-/semver-diff-3.1.1.tgz",
      "integrity": "sha512-GX0Ix/CJcHyB8c4ykpHGIAvLyOwOobtM/8d+TQkAd81/bEjgPHrfba41Vpesr7jX/t8Uh+R3EX9eAS5be+jQYg==",
      "requires": {
        "semver": "^6.3.0"
      },
      "dependencies": {
        "semver": {
          "version": "6.3.0",
          "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
          "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw=="
        }
      }
    },
    "send": {
      "version": "0.17.1",
      "resolved": "https://registry.npmjs.org/send/-/send-0.17.1.tgz",
      "integrity": "sha512-BsVKsiGcQMFwT8UxypobUKyv7irCNRHk1T0G680vk88yf6LBByGcZJOTJCrTP2xVN6yI+XjPJcNuE3V4fT9sAg==",
      "requires": {
        "debug": "2.6.9",
        "depd": "~1.1.2",
        "destroy": "~1.0.4",
        "encodeurl": "~1.0.2",
        "escape-html": "~1.0.3",
        "etag": "~1.8.1",
        "fresh": "0.5.2",
        "http-errors": "~1.7.2",
        "mime": "1.6.0",
        "ms": "2.1.1",
        "on-finished": "~2.3.0",
        "range-parser": "~1.2.1",
        "statuses": "~1.5.0"
      },
      "dependencies": {
        "ms": {
          "version": "2.1.1",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.1.tgz",
          "integrity": "sha512-tgp+dl5cGk28utYktBsrFqA7HKgrhgPsg6Z/EfhWI4gl1Hwq8B/GmY/0oXZ6nF8hDVesS/FpnYaD/kOWhYQvyg=="
        }
      }
    },
    "serve-static": {
      "version": "1.14.1",
      "resolved": "https://registry.npmjs.org/serve-static/-/serve-static-1.14.1.tgz",
      "integrity": "sha512-JMrvUwE54emCYWlTI+hGrGv5I8dEwmco/00EvkzIIsR7MqrHonbD9pO2MOfFnpFntl7ecpZs+3mW+XbQZu9QCg==",
      "requires": {
        "encodeurl": "~1.0.2",
        "escape-html": "~1.0.3",
        "parseurl": "~1.3.3",
        "send": "0.17.1"
      }
    },
    "set-blocking": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/set-blocking/-/set-blocking-2.0.0.tgz",
      "integrity": "sha1-BF+XgtARrppoA93TgrJDkrPYkPc="
    },
    "set-value": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/set-value/-/set-value-2.0.1.tgz",
      "integrity": "sha512-JxHc1weCN68wRY0fhCoXpyK55m/XPHafOmK4UWD7m2CI14GMcFypt4w/0+NV5f/ZMby2F6S2wwA7fgynh9gWSw==",
      "dev": true,
      "requires": {
        "extend-shallow": "^2.0.1",
        "is-extendable": "^0.1.1",
        "is-plain-object": "^2.0.3",
        "split-string": "^3.0.1"
      },
      "dependencies": {
        "extend-shallow": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
          "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
          "dev": true,
          "requires": {
            "is-extendable": "^0.1.0"
          }
        }
      }
    },
    "setprototypeof": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.1.1.tgz",
      "integrity": "sha512-JvdAWfbXeIGaZ9cILp38HntZSFSo3mWg6xGcJJsd+d4aRMOqauag1C63dJfDw7OaMYwEbHMOxEZ1lqVRYP2OAw=="
    },
    "shebang-command": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-1.2.0.tgz",
      "integrity": "sha1-RKrGW2lbAzmJaMOfNj/uXer98eo=",
      "dev": true,
      "requires": {
        "shebang-regex": "^1.0.0"
      }
    },
    "shebang-regex": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-1.0.0.tgz",
      "integrity": "sha1-2kL0l0DAtC2yypcoVxyxkMmO/qM=",
      "dev": true
    },
    "shellwords": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/shellwords/-/shellwords-0.1.1.tgz",
      "integrity": "sha512-vFwSUfQvqybiICwZY5+DAWIPLKsWO31Q91JSKl3UYv+K5c2QRPzn0qzec6QPu1Qc9eHYItiP3NdJqNVqetYAww==",
      "dev": true
    },
    "side-channel": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/side-channel/-/side-channel-1.0.4.tgz",
      "integrity": "sha512-q5XPytqFEIKHkGdiMIrY10mvLRvnQh42/+GoBlFW3b2LXLE2xxJpZFdm94we0BaoV3RwJyGqg5wS7epxTv0Zvw==",
      "dev": true,
      "requires": {
        "call-bind": "^1.0.0",
        "get-intrinsic": "^1.0.2",
        "object-inspect": "^1.9.0"
      }
    },
    "sift": {
      "version": "7.0.1",
      "resolved": "https://registry.npmjs.org/sift/-/sift-7.0.1.tgz",
      "integrity": "sha512-oqD7PMJ+uO6jV9EQCl0LrRw1OwsiPsiFQR5AR30heR+4Dl7jBBbDLnNvWiak20tzZlSE1H7RB30SX/1j/YYT7g=="
    },
    "signal-exit": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.3.tgz",
      "integrity": "sha512-VUJ49FC8U1OxwZLxIbTTrDvLnf/6TDgxZcK8wxR8zs13xpx7xbG60ndBlhNrFi2EMuFRoeDoJO7wthSLq42EjA=="
    },
    "simple-swizzle": {
      "version": "0.2.2",
      "resolved": "https://registry.npmjs.org/simple-swizzle/-/simple-swizzle-0.2.2.tgz",
      "integrity": "sha1-pNprY1/8zMoz9w0Xy5JZLeleVXo=",
      "requires": {
        "is-arrayish": "^0.3.1"
      }
    },
    "slash": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/slash/-/slash-1.0.0.tgz",
      "integrity": "sha1-xB8vbDn8FtHNF61LXYlhFK5HDVU=",
      "dev": true
    },
    "sliced": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/sliced/-/sliced-1.0.1.tgz",
      "integrity": "sha1-CzpmK10Ewxd7GSa+qCsD+Dei70E="
    },
    "snapdragon": {
      "version": "0.8.2",
      "resolved": "https://registry.npmjs.org/snapdragon/-/snapdragon-0.8.2.tgz",
      "integrity": "sha512-FtyOnWN/wCHTVXOMwvSv26d+ko5vWlIDD6zoUJ7LW8vh+ZBC8QdljveRP+crNrtBwioEUWy/4dMtbBjA4ioNlg==",
      "dev": true,
      "requires": {
        "base": "^0.11.1",
        "debug": "^2.2.0",
        "define-property": "^0.2.5",
        "extend-shallow": "^2.0.1",
        "map-cache": "^0.2.2",
        "source-map": "^0.5.6",
        "source-map-resolve": "^0.5.0",
        "use": "^3.1.0"
      },
      "dependencies": {
        "define-property": {
          "version": "0.2.5",
          "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
          "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
          "dev": true,
          "requires": {
            "is-descriptor": "^0.1.0"
          }
        },
        "extend-shallow": {
          "version": "2.0.1",
          "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
          "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
          "dev": true,
          "requires": {
            "is-extendable": "^0.1.0"
          }
        }
      }
    },
    "snapdragon-node": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/snapdragon-node/-/snapdragon-node-2.1.1.tgz",
      "integrity": "sha512-O27l4xaMYt/RSQ5TR3vpWCAB5Kb/czIcqUFOM/C4fYcLnbZUc1PkjTAMjof2pBWaSTwOUd6qUHcFGVGj7aIwnw==",
      "dev": true,
      "requires": {
        "define-property": "^1.0.0",
        "isobject": "^3.0.0",
        "snapdragon-util": "^3.0.1"
      },
      "dependencies": {
        "define-property": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
          "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
          "dev": true,
          "requires": {
            "is-descriptor": "^1.0.0"
          }
        },
        "is-accessor-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
          "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
          "dev": true,
          "requires": {
            "kind-of": "^6.0.0"
          }
        },
        "is-data-descriptor": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
          "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
          "dev": true,
          "requires": {
            "kind-of": "^6.0.0"
          }
        },
        "is-descriptor": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
          "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
          "dev": true,
          "requires": {
            "is-accessor-descriptor": "^1.0.0",
            "is-data-descriptor": "^1.0.0",
            "kind-of": "^6.0.2"
          }
        },
        "isobject": {
          "version": "3.0.1",
          "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
          "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",
          "dev": true
        },
        "kind-of": {
          "version": "6.0.3",
          "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",
          "integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw==",
          "dev": true
        }
      }
    },
    "snapdragon-util": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/snapdragon-util/-/snapdragon-util-3.0.1.tgz",
      "integrity": "sha512-mbKkMdQKsjX4BAL4bRYTj21edOf8cN7XHdYUJEe+Zn99hVEYcMvKPct1IqNe7+AZPirn8BCDOQBHQZknqmKlZQ==",
      "dev": true,
      "requires": {
        "kind-of": "^3.2.0"
      }
    },
    "source-map": {
      "version": "0.5.7",
      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",
      "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w=",
      "dev": true
    },
    "source-map-resolve": {
      "version": "0.5.3",
      "resolved": "https://registry.npmjs.org/source-map-resolve/-/source-map-resolve-0.5.3.tgz",
      "integrity": "sha512-Htz+RnsXWk5+P2slx5Jh3Q66vhQj1Cllm0zvnaY98+NFx+Dv2CF/f5O/t8x+KaNdrdIAsruNzoh/KpialbqAnw==",
      "dev": true,
      "requires": {
        "atob": "^2.1.2",
        "decode-uri-component": "^0.2.0",
        "resolve-url": "^0.2.1",
        "source-map-url": "^0.4.0",
        "urix": "^0.1.0"
      }
    },
    "source-map-support": {
      "version": "0.5.19",
      "resolved": "https://registry.npmjs.org/source-map-support/-/source-map-support-0.5.19.tgz",
      "integrity": "sha512-Wonm7zOCIJzBGQdB+thsPar0kYuCIzYvxZwlBa87yi/Mdjv7Tip2cyVbLj5o0cFPN4EVkuTwb3GDDyUx2DGnGw==",
      "dev": true,
      "requires": {
        "buffer-from": "^1.0.0",
        "source-map": "^0.6.0"
      },
      "dependencies": {
        "source-map": {
          "version": "0.6.1",
          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
          "dev": true
        }
      }
    },
    "source-map-url": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/source-map-url/-/source-map-url-0.4.1.tgz",
      "integrity": "sha512-cPiFOTLUKvJFIg4SKVScy4ilPPW6rFgMgfuZJPNoDuMs3nC1HbMUycBoJw77xFIp6z1UJQJOfx6C9GMH80DiTw==",
      "dev": true
    },
    "sparse-bitfield": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/sparse-bitfield/-/sparse-bitfield-3.0.3.tgz",
      "integrity": "sha1-/0rm5oZWBWuks+eSqzM004JzyhE=",
      "optional": true,
      "requires": {
        "memory-pager": "^1.0.2"
      }
    },
    "spdx-correct": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/spdx-correct/-/spdx-correct-3.1.1.tgz",
      "integrity": "sha512-cOYcUWwhCuHCXi49RhFRCyJEK3iPj1Ziz9DpViV3tbZOwXD49QzIN3MpOLJNxh2qwq2lJJZaKMVw9qNi4jTC0w==",
      "dev": true,
      "requires": {
        "spdx-expression-parse": "^3.0.0",
        "spdx-license-ids": "^3.0.0"
      }
    },
    "spdx-exceptions": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/spdx-exceptions/-/spdx-exceptions-2.3.0.tgz",
      "integrity": "sha512-/tTrYOC7PPI1nUAgx34hUpqXuyJG+DTHJTnIULG4rDygi4xu/tfgmq1e1cIRwRzwZgo4NLySi+ricLkZkw4i5A==",
      "dev": true
    },
    "spdx-expression-parse": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/spdx-expression-parse/-/spdx-expression-parse-3.0.1.tgz",
      "integrity": "sha512-cbqHunsQWnJNE6KhVSMsMeH5H/L9EpymbzqTQ3uLwNCLZ1Q481oWaofqH7nO6V07xlXwY6PhQdQ2IedWx/ZK4Q==",
      "dev": true,
      "requires": {
        "spdx-exceptions": "^2.1.0",
        "spdx-license-ids": "^3.0.0"
      }
    },
    "spdx-license-ids": {
      "version": "3.0.9",
      "resolved": "https://registry.npmjs.org/spdx-license-ids/-/spdx-license-ids-3.0.9.tgz",
      "integrity": "sha512-Ki212dKK4ogX+xDo4CtOZBVIwhsKBEfsEEcwmJfLQzirgc2jIWdzg40Unxz/HzEUqM1WFzVlQSMF9kZZ2HboLQ==",
      "dev": true
    },
    "split-string": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/split-string/-/split-string-3.1.0.tgz",
      "integrity": "sha512-NzNVhJDYpwceVVii8/Hu6DKfD2G+NrQHlS/V/qgv763EYudVwEcMQNxd2lh+0VrUByXN/oJkl5grOhYWvQUYiw==",
      "dev": true,
      "requires": {
        "extend-shallow": "^3.0.0"
      }
    },
    "sprintf-js": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/sprintf-js/-/sprintf-js-1.0.3.tgz",
      "integrity": "sha1-BOaSb2YolTVPPdAVIDYzuFcpfiw=",
      "dev": true
    },
    "sshpk": {
      "version": "1.16.1",
      "resolved": "https://registry.npmjs.org/sshpk/-/sshpk-1.16.1.tgz",
      "integrity": "sha512-HXXqVUq7+pcKeLqqZj6mHFUMvXtOJt1uoUx09pFW6011inTMxqI8BA8PM95myrIyyKwdnzjdFjLiE6KBPVtJIg==",
      "dev": true,
      "requires": {
        "asn1": "~0.2.3",
        "assert-plus": "^1.0.0",
        "bcrypt-pbkdf": "^1.0.0",
        "dashdash": "^1.12.0",
        "ecc-jsbn": "~0.1.1",
        "getpass": "^0.1.1",
        "jsbn": "~0.1.0",
        "safer-buffer": "^2.0.2",
        "tweetnacl": "~0.14.0"
      }
    },
    "stack-trace": {
      "version": "0.0.10",
      "resolved": "https://registry.npmjs.org/stack-trace/-/stack-trace-0.0.10.tgz",
      "integrity": "sha1-VHxws0fo0ytOEI6hoqFZ5f3eGcA="
    },
    "stack-utils": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/stack-utils/-/stack-utils-1.0.5.tgz",
      "integrity": "sha512-KZiTzuV3CnSnSvgMRrARVCj+Ht7rMbauGDK0LdVFRGyenwdylpajAp4Q0i6SX8rEmbTpMMf6ryq2gb8pPq2WgQ==",
      "dev": true,
      "requires": {
        "escape-string-regexp": "^2.0.0"
      },
      "dependencies": {
        "escape-string-regexp": {
          "version": "2.0.0",
          "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-2.0.0.tgz",
          "integrity": "sha512-UpzcLCXolUWcNu5HtVMHYdXJjArjsF9C0aNnquZYY4uW/Vu0miy5YoWvbV345HauVvcAUnpRuhMMcqTcGOY2+w==",
          "dev": true
        }
      }
    },
    "static-extend": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/static-extend/-/static-extend-0.1.2.tgz",
      "integrity": "sha1-YICcOcv/VTNyJv1eC1IPNB8ftcY=",
      "dev": true,
      "requires": {
        "define-property": "^0.2.5",
        "object-copy": "^0.1.0"
      },
      "dependencies": {
        "define-property": {
          "version": "0.2.5",
          "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
          "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
          "dev": true,
          "requires": {
            "is-descriptor": "^0.1.0"
          }
        }
      }
    },
    "statuses": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/statuses/-/statuses-1.5.0.tgz",
      "integrity": "sha1-Fhx9rBd2Wf2YEfQ3cfqZOBR4Yow="
    },
    "stealthy-require": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/stealthy-require/-/stealthy-require-1.1.1.tgz",
      "integrity": "sha1-NbCYdbT/SfJqd35QmzCQoyJr8ks=",
      "dev": true
    },
    "streamsearch": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/streamsearch/-/streamsearch-0.1.2.tgz",
      "integrity": "sha1-gIudDlb8Jz2Am6VzOOkpkZoanxo="
    },
    "string_decoder": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
      "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
      "requires": {
        "safe-buffer": "~5.1.0"
      }
    },
    "string-length": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/string-length/-/string-length-2.0.0.tgz",
      "integrity": "sha1-1A27aGo6zpYMHP/KVivyxF+DY+0=",
      "dev": true,
      "requires": {
        "astral-regex": "^1.0.0",
        "strip-ansi": "^4.0.0"
      },
      "dependencies": {
        "ansi-regex": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-3.0.0.tgz",
          "integrity": "sha1-7QMXwyIGT3lGbAKWa922Bas32Zg=",
          "dev": true
        },
        "strip-ansi": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-4.0.0.tgz",
          "integrity": "sha1-qEeQIusaw2iocTibY1JixQXuNo8=",
          "dev": true,
          "requires": {
            "ansi-regex": "^3.0.0"
          }
        }
      }
    },
    "string-width": {
      "version": "4.2.2",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.2.tgz",
      "integrity": "sha512-XBJbT3N4JhVumXE0eoLU9DCjcaF92KLNqTmFCnG1pf8duUxFGwtP6AD6nkjw9a3IdiRtL3E2w3JDiE/xi3vOeA==",
      "requires": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.0"
      },
      "dependencies": {
        "ansi-regex": {
          "version": "5.0.0",
          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.0.tgz",
          "integrity": "sha512-bY6fj56OUQ0hU1KjFNDQuJFezqKdrAyFdIevADiqrWHwSlbmBNMHp5ak2f40Pm8JTFyM2mqxkG6ngkHO11f/lg=="
        },
        "emoji-regex": {
          "version": "8.0.0",
          "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
          "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A=="
        },
        "is-fullwidth-code-point": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
          "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg=="
        },
        "strip-ansi": {
          "version": "6.0.0",
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.0.tgz",
          "integrity": "sha512-AuvKTrTfQNYNIctbR1K/YGTR1756GycPsg7b9bdV9Duqur4gv6aKqHXah67Z8ImS7WEz5QVcOtlfW2rZEugt6w==",
          "requires": {
            "ansi-regex": "^5.0.0"
          }
        }
      }
    },
    "string.prototype.trimend": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/string.prototype.trimend/-/string.prototype.trimend-1.0.4.tgz",
      "integrity": "sha512-y9xCjw1P23Awk8EvTpcyL2NIr1j7wJ39f+k6lvRnSMz+mz9CGz9NYPelDk42kOz6+ql8xjfK8oYzy3jAP5QU5A==",
      "dev": true,
      "requires": {
        "call-bind": "^1.0.2",
        "define-properties": "^1.1.3"
      }
    },
    "string.prototype.trimstart": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/string.prototype.trimstart/-/string.prototype.trimstart-1.0.4.tgz",
      "integrity": "sha512-jh6e984OBfvxS50tdY2nRZnoC5/mLFKOREQfw8t5yytkoUsJRNxvI/E39qu1sD0OtWI3OC0XgKSmcWwziwYuZw==",
      "dev": true,
      "requires": {
        "call-bind": "^1.0.2",
        "define-properties": "^1.1.3"
      }
    },
    "strip-ansi": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-5.2.0.tgz",
      "integrity": "sha512-DuRs1gKbBqsMKIZlrffwlug8MHkcnpjs5VPmL1PAh+mA30U0DTotfDZ0d2UUsXpPmPmMMJ6W773MaA3J+lbiWA==",
      "requires": {
        "ansi-regex": "^4.1.0"
      }
    },
    "strip-bom": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-2.0.0.tgz",
      "integrity": "sha1-YhmoVhZSBJHzV4i9vxRHqZx+aw4=",
      "dev": true,
      "requires": {
        "is-utf8": "^0.2.0"
      }
    },
    "strip-eof": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/strip-eof/-/strip-eof-1.0.0.tgz",
      "integrity": "sha1-u0P/VZim6wXYm1n80SnJgzE2Br8=",
      "dev": true
    },
    "strip-json-comments": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-2.0.1.tgz",
      "integrity": "sha1-PFMZQukIwml8DsNEhYwobHygpgo="
    },
    "superagent": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/superagent/-/superagent-6.1.0.tgz",
      "integrity": "sha512-OUDHEssirmplo3F+1HWKUrUjvnQuA+nZI6i/JJBdXb5eq9IyEQwPyPpqND+SSsxf6TygpBEkUjISVRN4/VOpeg==",
      "dev": true,
      "requires": {
        "component-emitter": "^1.3.0",
        "cookiejar": "^2.1.2",
        "debug": "^4.1.1",
        "fast-safe-stringify": "^2.0.7",
        "form-data": "^3.0.0",
        "formidable": "^1.2.2",
        "methods": "^1.1.2",
        "mime": "^2.4.6",
        "qs": "^6.9.4",
        "readable-stream": "^3.6.0",
        "semver": "^7.3.2"
      },
      "dependencies": {
        "debug": {
          "version": "4.3.1",
          "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.1.tgz",
          "integrity": "sha512-doEwdvm4PCeK4K3RQN2ZC2BYUBaxwLARCqZmMjtF8a51J2Rb0xpVloFRnCODwqjpwnAoao4pelN8l3RJdv3gRQ==",
          "dev": true,
          "requires": {
            "ms": "2.1.2"
          }
        },
        "form-data": {
          "version": "3.0.1",
          "resolved": "https://registry.npmjs.org/form-data/-/form-data-3.0.1.tgz",
          "integrity": "sha512-RHkBKtLWUVwd7SqRIvCZMEvAMoGUp0XU+seQiZejj0COz3RI3hWP4sCv3gZWWLjJTd7rGwcsF5eKZGii0r/hbg==",
          "dev": true,
          "requires": {
            "asynckit": "^0.4.0",
            "combined-stream": "^1.0.8",
            "mime-types": "^2.1.12"
          }
        },
        "mime": {
          "version": "2.5.2",
          "resolved": "https://registry.npmjs.org/mime/-/mime-2.5.2.tgz",
          "integrity": "sha512-tqkh47FzKeCPD2PUiPB6pkbMzsCasjxAfC62/Wap5qrUWcb+sFasXUC5I3gYM5iBM8v/Qpn4UK0x+j0iHyFPDg==",
          "dev": true
        },
        "ms": {
          "version": "2.1.2",
          "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
          "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==",
          "dev": true
        },
        "qs": {
          "version": "6.10.1",
          "resolved": "https://registry.npmjs.org/qs/-/qs-6.10.1.tgz",
          "integrity": "sha512-M528Hph6wsSVOBiYUnGf+K/7w0hNshs/duGsNXPUCLH5XAqjEtiPGwNONLV0tBH8NoGb0mvD5JubnUTrujKDTg==",
          "dev": true,
          "requires": {
            "side-channel": "^1.0.4"
          }
        },
        "readable-stream": {
          "version": "3.6.0",
          "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.0.tgz",
          "integrity": "sha512-BViHy7LKeTz4oNnkcLJ+lVSL6vpiFeX6/d3oSH8zCW7UxP2onchk+vTGB143xuFjHS3deTgkKoXXymXqymiIdA==",
          "dev": true,
          "requires": {
            "inherits": "^2.0.3",
            "string_decoder": "^1.1.1",
            "util-deprecate": "^1.0.1"
          }
        },
        "semver": {
          "version": "7.3.5",
          "resolved": "https://registry.npmjs.org/semver/-/semver-7.3.5.tgz",
          "integrity": "sha512-PoeGJYh8HK4BTO/a9Tf6ZG3veo/A7ZVsYrSA6J8ny9nb3B1VrpkuN+z9OE5wfE5p6H4LchYZsegiQgbJD94ZFQ==",
          "dev": true,
          "requires": {
            "lru-cache": "^6.0.0"
          }
        }
      }
    },
    "supertest": {
      "version": "6.1.3",
      "resolved": "https://registry.npmjs.org/supertest/-/supertest-6.1.3.tgz",
      "integrity": "sha512-v2NVRyP73XDewKb65adz+yug1XMtmvij63qIWHZzSX8tp6wiq6xBLUy4SUAd2NII6wIipOmHT/FD9eicpJwdgQ==",
      "dev": true,
      "requires": {
        "methods": "^1.1.2",
        "superagent": "^6.1.0"
      }
    },
    "supports-color": {
      "version": "5.5.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
      "integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",
      "requires": {
        "has-flag": "^3.0.0"
      }
    },
    "symbol-tree": {
      "version": "3.2.4",
      "resolved": "https://registry.npmjs.org/symbol-tree/-/symbol-tree-3.2.4.tgz",
      "integrity": "sha512-9QNk5KwDF+Bvz+PyObkmSYjI5ksVUYtjW7AU22r2NKcfLJcXp96hkDWU3+XndOsUb+AQ9QhfzfCT2O+CNWT5Tw==",
      "dev": true
    },
    "tar": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/tar/-/tar-6.1.0.tgz",
      "integrity": "sha512-DUCttfhsnLCjwoDoFcI+B2iJgYa93vBnDUATYEeRx6sntCTdN01VnqsIuTlALXla/LWooNg0yEGeB+Y8WdFxGA==",
      "requires": {
        "chownr": "^2.0.0",
        "fs-minipass": "^2.0.0",
        "minipass": "^3.0.0",
        "minizlib": "^2.1.1",
        "mkdirp": "^1.0.3",
        "yallist": "^4.0.0"
      }
    },
    "term-size": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/term-size/-/term-size-2.2.1.tgz",
      "integrity": "sha512-wK0Ri4fOGjv/XPy8SBHZChl8CM7uMc5VML7SqiQ0zG7+J5Vr+RMQDoHa2CNT6KHUnTGIXH34UDMkPzAUyapBZg=="
    },
    "test-exclude": {
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/test-exclude/-/test-exclude-4.2.3.tgz",
      "integrity": "sha512-SYbXgY64PT+4GAL2ocI3HwPa4Q4TBKm0cwAVeKOt/Aoc0gSpNRjJX8w0pA1LMKZ3LBmd8pYBqApFNQLII9kavA==",
      "dev": true,
      "requires": {
        "arrify": "^1.0.1",
        "micromatch": "^2.3.11",
        "object-assign": "^4.1.0",
        "read-pkg-up": "^1.0.1",
        "require-main-filename": "^1.0.1"
      }
    },
    "text-hex": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/text-hex/-/text-hex-1.0.0.tgz",
      "integrity": "sha512-uuVGNWzgJ4yhRaNSiubPY7OjISw4sw4E5Uv0wbjp+OzcbmVU/rsT8ujgcXJhn9ypzsgr5vlzpPqP+MBBKcGvbg=="
    },
    "throat": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/throat/-/throat-4.1.0.tgz",
      "integrity": "sha1-iQN8vJLFarGJJua6TLsgDhVnKmo=",
      "dev": true
    },
    "tmpl": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/tmpl/-/tmpl-1.0.4.tgz",
      "integrity": "sha1-I2QN17QtAEM5ERQIIOXPRA5SHdE=",
      "dev": true
    },
    "to-fast-properties": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/to-fast-properties/-/to-fast-properties-1.0.3.tgz",
      "integrity": "sha1-uDVx+k2MJbguIxsG46MFXeTKGkc=",
      "dev": true
    },
    "to-object-path": {
      "version": "0.3.0",
      "resolved": "https://registry.npmjs.org/to-object-path/-/to-object-path-0.3.0.tgz",
      "integrity": "sha1-KXWIt7Dn4KwI4E5nL4XB9JmeF68=",
      "dev": true,
      "requires": {
        "kind-of": "^3.0.2"
      }
    },
    "to-readable-stream": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/to-readable-stream/-/to-readable-stream-1.0.0.tgz",
      "integrity": "sha512-Iq25XBt6zD5npPhlLVXGFN3/gyR2/qODcKNNyTMd4vbm39HUaOiAM4PMq0eMVC/Tkxz+Zjdsc55g9yyz+Yq00Q=="
    },
    "to-regex": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/to-regex/-/to-regex-3.0.2.tgz",
      "integrity": "sha512-FWtleNAtZ/Ki2qtqej2CXTOayOH9bHDQF+Q48VpWyDXjbYxA4Yz8iDB31zXOBUlOHHKidDbqGVrTUvQMPmBGBw==",
      "dev": true,
      "requires": {
        "define-property": "^2.0.2",
        "extend-shallow": "^3.0.2",
        "regex-not": "^1.0.2",
        "safe-regex": "^1.1.0"
      }
    },
    "to-regex-range": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
      "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
      "requires": {
        "is-number": "^7.0.0"
      }
    },
    "toidentifier": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.0.tgz",
      "integrity": "sha512-yaOH/Pk/VEhBWWTlhI+qXxDFXlejDGcQipMlyxda9nthulaxLZUNcUqFxokp0vcYnvteJln5FNQDRrxj3YcbVw=="
    },
    "topo": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/topo/-/topo-3.0.3.tgz",
      "integrity": "sha512-IgpPtvD4kjrJ7CRA3ov2FhWQADwv+Tdqbsf1ZnPUSAtCJ9e1Z44MmoSGDXGk4IppoZA7jd/QRkNddlLJWlUZsQ==",
      "requires": {
        "hoek": "6.x.x"
      },
      "dependencies": {
        "hoek": {
          "version": "6.1.3",
          "resolved": "https://registry.npmjs.org/hoek/-/hoek-6.1.3.tgz",
          "integrity": "sha512-YXXAAhmF9zpQbC7LEcREFtXfGq5K1fmd+4PHkBq8NUqmzW3G+Dq10bI/i0KucLRwss3YYFQ0fSfoxBZYiGUqtQ=="
        }
      }
    },
    "touch": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/touch/-/touch-3.1.0.tgz",
      "integrity": "sha512-WBx8Uy5TLtOSRtIq+M03/sKDrXCLHxwDcquSP2c43Le03/9serjQBIztjRz6FkJez9D/hleyAXTBGLwwZUw9lA==",
      "requires": {
        "nopt": "~1.0.10"
      }
    },
    "tough-cookie": {
      "version": "2.5.0",
      "resolved": "https://registry.npmjs.org/tough-cookie/-/tough-cookie-2.5.0.tgz",
      "integrity": "sha512-nlLsUzgm1kfLXSXfRZMc1KLAugd4hqJHDTvc2hDIwS3mZAfMEuMbc03SujMF+GEcpaX/qboeycw6iO8JwVv2+g==",
      "dev": true,
      "requires": {
        "psl": "^1.1.28",
        "punycode": "^2.1.1"
      }
    },
    "tr46": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/tr46/-/tr46-1.0.1.tgz",
      "integrity": "sha1-qLE/1r/SSJUZZ0zN5VujaTtwbQk=",
      "dev": true,
      "requires": {
        "punycode": "^2.1.0"
      }
    },
    "trim-right": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/trim-right/-/trim-right-1.0.1.tgz",
      "integrity": "sha1-yy4SAwZ+DI3h9hQJS5/kVwTqYAM=",
      "dev": true
    },
    "triple-beam": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/triple-beam/-/triple-beam-1.3.0.tgz",
      "integrity": "sha512-XrHUvV5HpdLmIj4uVMxHggLbFSZYIn7HEWsqePZcI50pco+MPqJ50wMGY794X7AOOhxOBAjbkqfAbEe/QMp2Lw=="
    },
    "tslib": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.3.0.tgz",
      "integrity": "sha512-N82ooyxVNm6h1riLCoyS9e3fuJ3AMG2zIZs2Gd1ATcSFjSA23Q0fzjjZeh0jbJvWVDZ0cJT8yaNNaaXHzueNjg=="
    },
    "tunnel-agent": {
      "version": "0.6.0",
      "resolved": "https://registry.npmjs.org/tunnel-agent/-/tunnel-agent-0.6.0.tgz",
      "integrity": "sha1-J6XeoGs2sEoKmWZ3SykIaPD8QP0=",
      "dev": true,
      "requires": {
        "safe-buffer": "^5.0.1"
      }
    },
    "tweetnacl": {
      "version": "0.14.5",
      "resolved": "https://registry.npmjs.org/tweetnacl/-/tweetnacl-0.14.5.tgz",
      "integrity": "sha1-WuaBd/GS1EViadEIr6k/+HQ/T2Q=",
      "dev": true
    },
    "type-check": {
      "version": "0.3.2",
      "resolved": "https://registry.npmjs.org/type-check/-/type-check-0.3.2.tgz",
      "integrity": "sha1-WITKtRLPHTVeP7eE8wgEsrUg23I=",
      "dev": true,
      "requires": {
        "prelude-ls": "~1.1.2"
      }
    },
    "type-fest": {
      "version": "0.8.1",
      "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.8.1.tgz",
      "integrity": "sha512-4dbzIzqvjtgiM5rw1k5rEHtBANKmdudhGyBEajN01fEyhaAIhsoKNy6y7+IN93IfpFtwY9iqi7kD+xwKhQsNJA=="
    },
    "type-is": {
      "version": "1.6.18",
      "resolved": "https://registry.npmjs.org/type-is/-/type-is-1.6.18.tgz",
      "integrity": "sha512-TkRKr9sUTxEH8MdfuCSP7VizJyzRNMjj2J2do2Jr3Kym598JVdEksuzPQCnlFPW4ky9Q+iA+ma9BGm06XQBy8g==",
      "requires": {
        "media-typer": "0.3.0",
        "mime-types": "~2.1.24"
      }
    },
    "typedarray": {
      "version": "0.0.6",
      "resolved": "https://registry.npmjs.org/typedarray/-/typedarray-0.0.6.tgz",
      "integrity": "sha1-hnrHTjhkGHsdPUfZlqeOxciDB3c="
    },
    "typedarray-to-buffer": {
      "version": "3.1.5",
      "resolved": "https://registry.npmjs.org/typedarray-to-buffer/-/typedarray-to-buffer-3.1.5.tgz",
      "integrity": "sha512-zdu8XMNEDepKKR+XYOXAVPtWui0ly0NtohUscw+UmaHiAWT8hrV1rr//H6V+0DvJ3OQ19S979M0laLfX8rm82Q==",
      "requires": {
        "is-typedarray": "^1.0.0"
      }
    },
    "uglify-js": {
      "version": "3.13.9",
      "resolved": "https://registry.npmjs.org/uglify-js/-/uglify-js-3.13.9.tgz",
      "integrity": "sha512-wZbyTQ1w6Y7fHdt8sJnHfSIuWeDgk6B5rCb4E/AM6QNNPbOMIZph21PW5dRB3h7Df0GszN+t7RuUH6sWK5bF0g==",
      "dev": true,
      "optional": true
    },
    "uid2": {
      "version": "0.0.3",
      "resolved": "https://registry.npmjs.org/uid2/-/uid2-0.0.3.tgz",
      "integrity": "sha1-SDEm4Rd03y9xuLY53NeZw3YWK4I="
    },
    "unbox-primitive": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/unbox-primitive/-/unbox-primitive-1.0.1.tgz",
      "integrity": "sha512-tZU/3NqK3dA5gpE1KtyiJUrEB0lxnGkMFHptJ7q6ewdZ8s12QrODwNbhIJStmJkd1QDXa1NRA8aF2A1zk/Ypyw==",
      "dev": true,
      "requires": {
        "function-bind": "^1.1.1",
        "has-bigints": "^1.0.1",
        "has-symbols": "^1.0.2",
        "which-boxed-primitive": "^1.0.2"
      }
    },
    "undefsafe": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/undefsafe/-/undefsafe-2.0.3.tgz",
      "integrity": "sha512-nrXZwwXrD/T/JXeygJqdCO6NZZ1L66HrxM/Z7mIq2oPanoN0F1nLx3lwJMu6AwJY69hdixaFQOuoYsMjE5/C2A==",
      "requires": {
        "debug": "^2.2.0"
      }
    },
    "union-value": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/union-value/-/union-value-1.0.1.tgz",
      "integrity": "sha512-tJfXmxMeWYnczCVs7XAEvIV7ieppALdyepWMkHkwciRpZraG/xwT+s2JN8+pr1+8jCRf80FFzvr+MpQeeoF4Xg==",
      "dev": true,
      "requires": {
        "arr-union": "^3.1.0",
        "get-value": "^2.0.6",
        "is-extendable": "^0.1.1",
        "set-value": "^2.0.1"
      }
    },
    "unique-string": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/unique-string/-/unique-string-2.0.0.tgz",
      "integrity": "sha512-uNaeirEPvpZWSgzwsPGtU2zVSTrn/8L5q/IexZmH0eH6SA73CmAA5U4GwORTxQAZs95TAXLNqeLoPPNO5gZfWg==",
      "requires": {
        "crypto-random-string": "^2.0.0"
      }
    },
    "unpipe": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",
      "integrity": "sha1-sr9O6FFKrmFltIF4KdIbLvSZBOw="
    },
    "unset-value": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/unset-value/-/unset-value-1.0.0.tgz",
      "integrity": "sha1-g3aHP30jNRef+x5vw6jtDfyKtVk=",
      "dev": true,
      "requires": {
        "has-value": "^0.3.1",
        "isobject": "^3.0.0"
      },
      "dependencies": {
        "has-value": {
          "version": "0.3.1",
          "resolved": "https://registry.npmjs.org/has-value/-/has-value-0.3.1.tgz",
          "integrity": "sha1-ex9YutpiyoJ+wKIHgCVlSEWZXh8=",
          "dev": true,
          "requires": {
            "get-value": "^2.0.3",
            "has-values": "^0.1.4",
            "isobject": "^2.0.0"
          },
          "dependencies": {
            "isobject": {
              "version": "2.1.0",
              "resolved": "https://registry.npmjs.org/isobject/-/isobject-2.1.0.tgz",
              "integrity": "sha1-8GVWEJaj8dou9GJy+BXIQNh+DIk=",
              "dev": true,
              "requires": {
                "isarray": "1.0.0"
              }
            }
          }
        },
        "has-values": {
          "version": "0.1.4",
          "resolved": "https://registry.npmjs.org/has-values/-/has-values-0.1.4.tgz",
          "integrity": "sha1-bWHeldkd/Km5oCCJrThL/49it3E=",
          "dev": true
        },
        "isobject": {
          "version": "3.0.1",
          "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
          "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",
          "dev": true
        }
      }
    },
    "update-notifier": {
      "version": "4.1.3",
      "resolved": "https://registry.npmjs.org/update-notifier/-/update-notifier-4.1.3.tgz",
      "integrity": "sha512-Yld6Z0RyCYGB6ckIjffGOSOmHXj1gMeE7aROz4MG+XMkmixBX4jUngrGXNYz7wPKBmtoD4MnBa2Anu7RSKht/A==",
      "requires": {
        "boxen": "^4.2.0",
        "chalk": "^3.0.0",
        "configstore": "^5.0.1",
        "has-yarn": "^2.1.0",
        "import-lazy": "^2.1.0",
        "is-ci": "^2.0.0",
        "is-installed-globally": "^0.3.1",
        "is-npm": "^4.0.0",
        "is-yarn-global": "^0.3.0",
        "latest-version": "^5.0.0",
        "pupa": "^2.0.1",
        "semver-diff": "^3.1.1",
        "xdg-basedir": "^4.0.0"
      }
    },
    "uri-js": {
      "version": "4.4.1",
      "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.4.1.tgz",
      "integrity": "sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==",
      "dev": true,
      "requires": {
        "punycode": "^2.1.0"
      }
    },
    "urix": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/urix/-/urix-0.1.0.tgz",
      "integrity": "sha1-2pN/emLiH+wf0Y1Js1wpNQZ6bHI=",
      "dev": true
    },
    "url": {
      "version": "0.10.3",
      "resolved": "https://registry.npmjs.org/url/-/url-0.10.3.tgz",
      "integrity": "sha1-Ah5NnHcF8hu/N9A861h2dAJ3TGQ=",
      "requires": {
        "punycode": "1.3.2",
        "querystring": "0.2.0"
      },
      "dependencies": {
        "punycode": {
          "version": "1.3.2",
          "resolved": "https://registry.npmjs.org/punycode/-/punycode-1.3.2.tgz",
          "integrity": "sha1-llOgNvt8HuQjQvIyXM7v6jkmxI0="
        },
        "querystring": {
          "version": "0.2.0",
          "resolved": "https://registry.npmjs.org/querystring/-/querystring-0.2.0.tgz",
          "integrity": "sha1-sgmEkgO7Jd+CDadW50cAWHhSFiA="
        }
      }
    },
    "url-parse-lax": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/url-parse-lax/-/url-parse-lax-3.0.0.tgz",
      "integrity": "sha1-FrXK/Afb42dsGxmZF3gj1lA6yww=",
      "requires": {
        "prepend-http": "^2.0.0"
      }
    },
    "use": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/use/-/use-3.1.1.tgz",
      "integrity": "sha512-cwESVXlO3url9YWlFW/TA9cshCEhtu7IKJ/p5soJ/gGpj7vbvFrAY/eIioQ6Dw23KjZhYgiIo8HOs1nQ2vr/oQ==",
      "dev": true
    },
    "util-deprecate": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
      "integrity": "sha1-RQ1Nyfpw3nMnYvvS1KKJgUGaDM8="
    },
    "util.promisify": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/util.promisify/-/util.promisify-1.1.1.tgz",
      "integrity": "sha512-/s3UsZUrIfa6xDhr7zZhnE9SLQ5RIXyYfiVnMMyMDzOc8WhWN4Nbh36H842OyurKbCDAesZOJaVyvmSl6fhGQw==",
      "dev": true,
      "requires": {
        "call-bind": "^1.0.0",
        "define-properties": "^1.1.3",
        "for-each": "^0.3.3",
        "has-symbols": "^1.0.1",
        "object.getownpropertydescriptors": "^2.1.1"
      }
    },
    "utils-merge": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/utils-merge/-/utils-merge-1.0.1.tgz",
      "integrity": "sha1-n5VxD1CiZ5R7LMwSR0HBAoQn5xM="
    },
    "uuid": {
      "version": "3.4.0",
      "resolved": "https://registry.npmjs.org/uuid/-/uuid-3.4.0.tgz",
      "integrity": "sha512-HjSDRw6gZE5JMggctHBcjVak08+KEVhSIiDzFnT9S9aegmp85S/bReBVTb4QTFaRNptJ9kuYaNhnbNEOkbKb/A==",
      "dev": true
    },
    "validate-npm-package-license": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/validate-npm-package-license/-/validate-npm-package-license-3.0.4.tgz",
      "integrity": "sha512-DpKm2Ui/xN7/HQKCtpZxoRWBhZ9Z0kqtygG8XCgNQ8ZlDnxuQmWhj566j8fN4Cu3/JmbhsDo7fcAJq4s9h27Ew==",
      "dev": true,
      "requires": {
        "spdx-correct": "^3.0.0",
        "spdx-expression-parse": "^3.0.0"
      }
    },
    "vary": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",
      "integrity": "sha1-IpnwLG3tMNSllhsLn3RSShj2NPw="
    },
    "verror": {
      "version": "1.10.0",
      "resolved": "https://registry.npmjs.org/verror/-/verror-1.10.0.tgz",
      "integrity": "sha1-OhBcoXBTr1XW4nDB+CiGguGNpAA=",
      "dev": true,
      "requires": {
        "assert-plus": "^1.0.0",
        "core-util-is": "1.0.2",
        "extsprintf": "^1.2.0"
      }
    },
    "w3c-hr-time": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/w3c-hr-time/-/w3c-hr-time-1.0.2.tgz",
      "integrity": "sha512-z8P5DvDNjKDoFIHK7q8r8lackT6l+jo/Ye3HOle7l9nICP9lf1Ci25fy9vHd0JOWewkIFzXIEig3TdKT7JQ5fQ==",
      "dev": true,
      "requires": {
        "browser-process-hrtime": "^1.0.0"
      }
    },
    "walker": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/walker/-/walker-1.0.7.tgz",
      "integrity": "sha1-L3+bj9ENZ3JisYqITijRlhjgKPs=",
      "dev": true,
      "requires": {
        "makeerror": "1.0.x"
      }
    },
    "watch": {
      "version": "0.18.0",
      "resolved": "https://registry.npmjs.org/watch/-/watch-0.18.0.tgz",
      "integrity": "sha1-KAlUdsbffJDJYxOJkMClQj60uYY=",
      "dev": true,
      "requires": {
        "exec-sh": "^0.2.0",
        "minimist": "^1.2.0"
      }
    },
    "webidl-conversions": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-4.0.2.tgz",
      "integrity": "sha512-YQ+BmxuTgd6UXZW3+ICGfyqRyHXVlD5GtQr5+qjiNW7bF0cqrzX500HVXPBOvgXb5YnzDd+h0zqyv61KUD7+Sg==",
      "dev": true
    },
    "whatwg-encoding": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/whatwg-encoding/-/whatwg-encoding-1.0.5.tgz",
      "integrity": "sha512-b5lim54JOPN9HtzvK9HFXvBma/rnfFeqsic0hSpjtDbVxR3dJKLc+KB4V6GgiGOvl7CY/KNh8rxSo9DKQrnUEw==",
      "dev": true,
      "requires": {
        "iconv-lite": "0.4.24"
      }
    },
    "whatwg-mimetype": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/whatwg-mimetype/-/whatwg-mimetype-2.3.0.tgz",
      "integrity": "sha512-M4yMwr6mAnQz76TbJm914+gPpB/nCwvZbJU28cUD6dR004SAxDLOOSUaB1JDRqLtaOV/vi0IC5lEAGFgrjGv/g==",
      "dev": true
    },
    "whatwg-url": {
      "version": "6.5.0",
      "resolved": "https://registry.npmjs.org/whatwg-url/-/whatwg-url-6.5.0.tgz",
      "integrity": "sha512-rhRZRqx/TLJQWUpQ6bmrt2UV4f0HCQ463yQuONJqC6fO2VoEb1pTYddbe59SkYq87aoM5A3bdhMZiUiVws+fzQ==",
      "dev": true,
      "requires": {
        "lodash.sortby": "^4.7.0",
        "tr46": "^1.0.1",
        "webidl-conversions": "^4.0.2"
      }
    },
    "which": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/which/-/which-1.3.1.tgz",
      "integrity": "sha512-HxJdYWq1MTIQbJ3nw0cqssHoTNU267KlrDuGZ1WYlxDStUtKUhOaJmh112/TZmHxxUfuJqPXSOm7tDyas0OSIQ==",
      "dev": true,
      "requires": {
        "isexe": "^2.0.0"
      }
    },
    "which-boxed-primitive": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/which-boxed-primitive/-/which-boxed-primitive-1.0.2.tgz",
      "integrity": "sha512-bwZdv0AKLpplFY2KZRX6TvyuN7ojjr7lwkg6ml0roIy9YeuSr7JS372qlNW18UQYzgYK9ziGcerWqZOmEn9VNg==",
      "dev": true,
      "requires": {
        "is-bigint": "^1.0.1",
        "is-boolean-object": "^1.1.0",
        "is-number-object": "^1.0.4",
        "is-string": "^1.0.5",
        "is-symbol": "^1.0.3"
      }
    },
    "which-module": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/which-module/-/which-module-2.0.0.tgz",
      "integrity": "sha1-2e8H3Od7mQK4o6j6SzHD4/fm6Ho=",
      "dev": true
    },
    "wide-align": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/wide-align/-/wide-align-1.1.3.tgz",
      "integrity": "sha512-QGkOQc8XL6Bt5PwnsExKBPuMKBxnGxWWW3fU55Xt4feHozMUhdUMaBCk290qpm/wG5u/RSKzwdAC4i51YigihA==",
      "requires": {
        "string-width": "^1.0.2 || 2"
      },
      "dependencies": {
        "ansi-regex": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-3.0.0.tgz",
          "integrity": "sha1-7QMXwyIGT3lGbAKWa922Bas32Zg="
        },
        "string-width": {
          "version": "2.1.1",
          "resolved": "https://registry.npmjs.org/string-width/-/string-width-2.1.1.tgz",
          "integrity": "sha512-nOqH59deCq9SRHlxq1Aw85Jnt4w6KvLKqWVik6oA9ZklXLNIOlqg4F2yrT1MVaTjAqvVwdfeZ7w7aCvJD7ugkw==",
          "requires": {
            "is-fullwidth-code-point": "^2.0.0",
            "strip-ansi": "^4.0.0"
          }
        },
        "strip-ansi": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-4.0.0.tgz",
          "integrity": "sha1-qEeQIusaw2iocTibY1JixQXuNo8=",
          "requires": {
            "ansi-regex": "^3.0.0"
          }
        }
      }
    },
    "widest-line": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/widest-line/-/widest-line-3.1.0.tgz",
      "integrity": "sha512-NsmoXalsWVDMGupxZ5R08ka9flZjjiLvHVAWYOKtiKM8ujtZWr9cRffak+uSE48+Ob8ObalXpwyeUiyDD6QFgg==",
      "requires": {
        "string-width": "^4.0.0"
      }
    },
    "winston": {
      "version": "3.3.3",
      "resolved": "https://registry.npmjs.org/winston/-/winston-3.3.3.tgz",
      "integrity": "sha512-oEXTISQnC8VlSAKf1KYSSd7J6IWuRPQqDdo8eoRNaYKLvwSb5+79Z3Yi1lrl6KDpU6/VWaxpakDAtb1oQ4n9aw==",
      "requires": {
        "@dabh/diagnostics": "^2.0.2",
        "async": "^3.1.0",
        "is-stream": "^2.0.0",
        "logform": "^2.2.0",
        "one-time": "^1.0.0",
        "readable-stream": "^3.4.0",
        "stack-trace": "0.0.x",
        "triple-beam": "^1.3.0",
        "winston-transport": "^4.4.0"
      },
      "dependencies": {
        "async": {
          "version": "3.2.0",
          "resolved": "https://registry.npmjs.org/async/-/async-3.2.0.tgz",
          "integrity": "sha512-TR2mEZFVOj2pLStYxLht7TyfuRzaydfpxr3k9RpHIzMgw7A64dzsdqCxH1WJyQdoe8T10nDXd9wnEigmiuHIZw=="
        },
        "readable-stream": {
          "version": "3.6.0",
          "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.0.tgz",
          "integrity": "sha512-BViHy7LKeTz4oNnkcLJ+lVSL6vpiFeX6/d3oSH8zCW7UxP2onchk+vTGB143xuFjHS3deTgkKoXXymXqymiIdA==",
          "requires": {
            "inherits": "^2.0.3",
            "string_decoder": "^1.1.1",
            "util-deprecate": "^1.0.1"
          }
        }
      }
    },
    "winston-mongodb": {
      "version": "5.0.7",
      "resolved": "https://registry.npmjs.org/winston-mongodb/-/winston-mongodb-5.0.7.tgz",
      "integrity": "sha512-6uUdd7IPfzKMth1vbO6zPyLQzn57CTNXbyjZmdD9UgBlY19BliFnYcK7+Aopo0GHIsWDo7xlerpj3x/ZULDIpg==",
      "requires": {
        "mongodb": "^3.6.2",
        "winston-transport": "^4.4.0"
      }
    },
    "winston-transport": {
      "version": "4.4.0",
      "resolved": "https://registry.npmjs.org/winston-transport/-/winston-transport-4.4.0.tgz",
      "integrity": "sha512-Lc7/p3GtqtqPBYYtS6KCN3c77/2QCev51DvcJKbkFPQNoj1sinkGwLGFDxkXY9J6p9+EPnYs+D90uwbnaiURTw==",
      "requires": {
        "readable-stream": "^2.3.7",
        "triple-beam": "^1.2.0"
      }
    },
    "word-wrap": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/word-wrap/-/word-wrap-1.2.3.tgz",
      "integrity": "sha512-Hz/mrNwitNRh/HUAtM/VT/5VH+ygD6DV7mYKZAtHOrbs8U7lvPS6xf7EJKMF0uW1KJCl0H701g3ZGus+muE5vQ==",
      "dev": true
    },
    "wordwrap": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/wordwrap/-/wordwrap-1.0.0.tgz",
      "integrity": "sha1-J1hIEIkUVqQXHI0CJkQa3pDLyus=",
      "dev": true
    },
    "wrap-ansi": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-2.1.0.tgz",
      "integrity": "sha1-2Pw9KE3QV5T+hJc8rs3Rz4JP3YU=",
      "dev": true,
      "requires": {
        "string-width": "^1.0.1",
        "strip-ansi": "^3.0.1"
      },
      "dependencies": {
        "ansi-regex": {
          "version": "2.1.1",
          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz",
          "integrity": "sha1-w7M6te42DYbg5ijwRorn7yfWVN8=",
          "dev": true
        },
        "is-fullwidth-code-point": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-1.0.0.tgz",
          "integrity": "sha1-754xOG8DGn8NZDr4L95QxFfvAMs=",
          "dev": true,
          "requires": {
            "number-is-nan": "^1.0.0"
          }
        },
        "string-width": {
          "version": "1.0.2",
          "resolved": "https://registry.npmjs.org/string-width/-/string-width-1.0.2.tgz",
          "integrity": "sha1-EYvfW4zcUaKn5w0hHgfisLmxB9M=",
          "dev": true,
          "requires": {
            "code-point-at": "^1.0.0",
            "is-fullwidth-code-point": "^1.0.0",
            "strip-ansi": "^3.0.0"
          }
        },
        "strip-ansi": {
          "version": "3.0.1",
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-3.0.1.tgz",
          "integrity": "sha1-ajhfuIU9lS1f8F0Oiq+UJ43GPc8=",
          "dev": true,
          "requires": {
            "ansi-regex": "^2.0.0"
          }
        }
      }
    },
    "wrappy": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
      "integrity": "sha1-tSQ9jz7BqjXxNkYFvA0QNuMKtp8="
    },
    "write-file-atomic": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/write-file-atomic/-/write-file-atomic-3.0.3.tgz",
      "integrity": "sha512-AvHcyZ5JnSfq3ioSyjrBkH9yW4m7Ayk8/9My/DD9onKeu/94fwrMocemO2QAJFAlnnDN+ZDS+ZjAR5ua1/PV/Q==",
      "requires": {
        "imurmurhash": "^0.1.4",
        "is-typedarray": "^1.0.0",
        "signal-exit": "^3.0.2",
        "typedarray-to-buffer": "^3.1.5"
      }
    },
    "ws": {
      "version": "5.2.2",
      "resolved": "https://registry.npmjs.org/ws/-/ws-5.2.2.tgz",
      "integrity": "sha512-jaHFD6PFv6UgoIVda6qZllptQsMlDEJkTQcybzzXDYM1XO9Y8em691FGMPmM46WGyLU4z9KMgQN+qrux/nhlHA==",
      "dev": true,
      "requires": {
        "async-limiter": "~1.0.0"
      }
    },
    "xdg-basedir": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/xdg-basedir/-/xdg-basedir-4.0.0.tgz",
      "integrity": "sha512-PSNhEJDejZYV7h50BohL09Er9VaIefr2LMAf3OEmpCkjOi34eYyQYAXUTjEQtZJTKcF0E2UKTh+osDLsgNim9Q=="
    },
    "xml-name-validator": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/xml-name-validator/-/xml-name-validator-3.0.0.tgz",
      "integrity": "sha512-A5CUptxDsvxKJEU3yO6DuWBSJz/qizqzJKOMIfUJHETbBw/sFaDxgd6fxm1ewUaM0jZ444Fc5vC5ROYurg/4Pw==",
      "dev": true
    },
    "xml2js": {
      "version": "0.4.19",
      "resolved": "https://registry.npmjs.org/xml2js/-/xml2js-0.4.19.tgz",
      "integrity": "sha512-esZnJZJOiJR9wWKMyuvSE1y6Dq5LCuJanqhxslH2bxM6duahNZ+HMpCLhBQGZkbX6xRf8x1Y2eJlgt2q3qo49Q==",
      "requires": {
        "sax": ">=0.6.0",
        "xmlbuilder": "~9.0.1"
      }
    },
    "xmlbuilder": {
      "version": "9.0.7",
      "resolved": "https://registry.npmjs.org/xmlbuilder/-/xmlbuilder-9.0.7.tgz",
      "integrity": "sha1-Ey7mPS7FVlxVfiD0wi35rKaGsQ0="
    },
    "xtend": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/xtend/-/xtend-4.0.2.tgz",
      "integrity": "sha512-LKYU1iAXJXUgAXn9URjiu+MWhyUXHsvfp7mcuYm9dSUKK0/CjtrUwFAxD82/mCWbtLsGjFIad0wIsod4zrTAEQ=="
    },
    "y18n": {
      "version": "3.2.2",
      "resolved": "https://registry.npmjs.org/y18n/-/y18n-3.2.2.tgz",
      "integrity": "sha512-uGZHXkHnhF0XeeAPgnKfPv1bgKAYyVvmNL1xlKsPYZPaIHxGti2hHqvOCQv71XMsLxu1QjergkqogUnms5D3YQ==",
      "dev": true
    },
    "yallist": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-4.0.0.tgz",
      "integrity": "sha512-3wdGidZyq5PB084XLES5TpOSRA3wjXAlIWMhum2kRcv/41Sn2emQ0dycQW4uZXLejwKvg6EsvbdlVL+FYEct7A=="
    },
    "yargs": {
      "version": "10.1.2",
      "resolved": "https://registry.npmjs.org/yargs/-/yargs-10.1.2.tgz",
      "integrity": "sha512-ivSoxqBGYOqQVruxD35+EyCFDYNEFL/Uo6FcOnz+9xZdZzK0Zzw4r4KhbrME1Oo2gOggwJod2MnsdamSG7H9ig==",
      "dev": true,
      "requires": {
        "cliui": "^4.0.0",
        "decamelize": "^1.1.1",
        "find-up": "^2.1.0",
        "get-caller-file": "^1.0.1",
        "os-locale": "^2.0.0",
        "require-directory": "^2.1.1",
        "require-main-filename": "^1.0.1",
        "set-blocking": "^2.0.0",
        "string-width": "^2.0.0",
        "which-module": "^2.0.0",
        "y18n": "^3.2.1",
        "yargs-parser": "^8.1.0"
      },
      "dependencies": {
        "ansi-regex": {
          "version": "3.0.0",
          "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-3.0.0.tgz",
          "integrity": "sha1-7QMXwyIGT3lGbAKWa922Bas32Zg=",
          "dev": true
        },
        "string-width": {
          "version": "2.1.1",
          "resolved": "https://registry.npmjs.org/string-width/-/string-width-2.1.1.tgz",
          "integrity": "sha512-nOqH59deCq9SRHlxq1Aw85Jnt4w6KvLKqWVik6oA9ZklXLNIOlqg4F2yrT1MVaTjAqvVwdfeZ7w7aCvJD7ugkw==",
          "dev": true,
          "requires": {
            "is-fullwidth-code-point": "^2.0.0",
            "strip-ansi": "^4.0.0"
          }
        },
        "strip-ansi": {
          "version": "4.0.0",
          "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-4.0.0.tgz",
          "integrity": "sha1-qEeQIusaw2iocTibY1JixQXuNo8=",
          "dev": true,
          "requires": {
            "ansi-regex": "^3.0.0"
          }
        }
      }
    },
    "yargs-parser": {
      "version": "8.1.0",
      "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-8.1.0.tgz",
      "integrity": "sha512-yP+6QqN8BmrgW2ggLtTbdrOyBNSI7zBa4IykmiV5R1wl1JWNxQvWhMfMdmzIYtKU7oP3OOInY/tl2ov3BDjnJQ==",
      "dev": true,
      "requires": {
        "camelcase": "^4.1.0"
      },
      "dependencies": {
        "camelcase": {
          "version": "4.1.0",
          "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-4.1.0.tgz",
          "integrity": "sha1-1UVjW+HjPFQmScaRc+Xeas+uNN0=",
          "dev": true
        }
      }
    }
  }
}
