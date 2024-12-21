from http.server            import HTTPServer, BaseHTTPRequestHandler
from urllib.parse           import urlparse, parse_qs
from pytube                 import YouTube
import json

def DownloadVideo(Url):
    yt = YouTube(Url)
    print(yt.title)


class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type', 'text/plain')
        self.end_headers()
        response = "Thank you for Visiting The Server!"
        self.wfile.write(response.encode('utf-8'))

    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length).decode('utf-8')
        parsed_url = urlparse(self.path)
        
        data = json.loads(post_data)
        if (parsed_url.path == "/video"):
            if "url" in data:
                DownloadVideo(data["url"]);
                response = {'message': data["url"]+" From video " + data["url"]}
            else:
                response = {'message': "Url Not found"}
        elif (parsed_url.path == "/playlist"):
            if "url" in data:
                response = {'message': data["url"]+" From Playlist " + data["url"]}
            else:
                response = {'message': "Url Not found"}
        else:
            response = {'message': " The EndPoint not found"}
        
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.end_headers()
        self.wfile.write(json.dumps(response).encode('utf-8'))

# Run the server
host = 'localhost'
port = 8080
server = HTTPServer((host, port), SimpleHTTPRequestHandler)
print(f"Server running on {host}:{port}")
server.serve_forever()
