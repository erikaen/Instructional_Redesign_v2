#!/usr/bin/env python3
"""Serve the course locally WITHOUT browser caching.

    python3 serve.py [port]     (default 8765)

Plain `python3 -m http.server` lets Chrome cache pages and libs, which
shows stale tutorials after edits. This server sends Cache-Control:
no-cache on every response so a normal reload is always current.
"""
import http.server, functools, os, sys

class Handler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-cache, must-revalidate")
        super().end_headers()

port = int(sys.argv[1]) if len(sys.argv) > 1 else 8765
root = os.path.dirname(os.path.abspath(__file__))
print("serving %s at http://127.0.0.1:%d (no-cache)" % (root, port))
http.server.ThreadingHTTPServer(
    ("127.0.0.1", port), functools.partial(Handler, directory=root)
).serve_forever()
