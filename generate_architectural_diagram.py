from reportlab.lib.pagesizes import A4
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Flowable, Spacer
from reportlab.lib import colors
from reportlab.graphics.shapes import Drawing, Rect, Line, String, Polygon, Circle
from reportlab.graphics import renderPDF

# Configuration
OUTPUT_FILENAME = "Project_Architecture_Diagram.pdf"

class ArchitectureDiagram(Flowable):
    """Custom Flowable to draw the detailed architecture diagram"""
    def __init__(self, width=480, height=450):
        Flowable.__init__(self)
        self.width = width
        self.height = height

    def draw(self):
        d = Drawing(self.width, self.height)
        
        # Colors
        layer_bg = colors.HexColor('#F5F5F5')
        layer_border = colors.HexColor('#9E9E9E')
        
        ui_color = colors.HexColor('#BBDEFB') # Blue
        proc_color = colors.HexColor('#C8E6C9') # Green
        logic_color = colors.HexColor('#FFF9C4') # Yellow
        data_color = colors.HexColor('#E1BEE7') # Purple
        
        stroke = colors.black
        
        def draw_layer_bg(y, h, label):
            # Draw the rectangle but OMIT the label/heading as requested
            d.add(Rect(0, y, self.width, h, fillColor=layer_bg, strokeColor=layer_border, strokeWidth=1, rx=5, ry=5))
            # The following line is commented out to remove the layer heading
            # d.add(String(10, y + h - 15, label, fontName='Helvetica-BoldOblique', fontSize=9, fillColor=colors.grey))

        def draw_box(x, y, w, h, text, fill):
            d.add(Rect(x, y, w, h, fillColor=fill, strokeColor=stroke, strokeWidth=1.5, rx=4, ry=4))
            
            words = text.split()
            if len(words) > 1:
                # Simple word wrap for 2 lines
                mid = len(words) // 2
                l1 = " ".join(words[:round(len(words)/2 + 0.1)])
                l2 = " ".join(words[round(len(words)/2 + 0.1):])
                d.add(String(x + w/2, y + h/2 + 6, l1, textAnchor='middle', fontName='Helvetica-Bold', fontSize=9))
                d.add(String(x + w/2, y + h/2 - 6, l2, textAnchor='middle', fontName='Helvetica-Bold', fontSize=9))
            else:
                d.add(String(x + w/2, y + h/2 - 3, text, textAnchor='middle', fontName='Helvetica-Bold', fontSize=9))

        def draw_arrow(x1, y1, x2, y2):
            d.add(Line(x1, y1, x2, y2, strokeColor=stroke, strokeWidth=1))
            arrow_size = 4
            if x1 == x2: # Vertical
                if y2 < y1: # Down
                    p = Polygon(points=[x2, y2, x2-arrow_size, y2+arrow_size*2, x2+arrow_size, y2+arrow_size*2], fillColor=stroke, strokeWidth=0)
                else: # Up
                    p = Polygon(points=[x2, y2, x2-arrow_size, y2-arrow_size*2, x2+arrow_size, y2-arrow_size*2], fillColor=stroke, strokeWidth=0)
            elif y1 == y2: # Horizontal
                if x2 > x1: # Right
                    p = Polygon(points=[x2, y2, x2-arrow_size*2, y2+arrow_size, x2-arrow_size*2, y2-arrow_size], fillColor=stroke, strokeWidth=0)
                else: # Left
                    p = Polygon(points=[x2, y2, x2+arrow_size*2, y2+arrow_size, x2+arrow_size*2, y2-arrow_size], fillColor=stroke, strokeWidth=0)
            else: # Diagnostic fallback
                 p = Circle(x2, y2, 2, fillColor=stroke, strokeWidth=0)
            d.add(p)

        # Draw Layers
        # Top to Bottom specific coordinates
        layer_h = 90
        
        # 1. UI Layer (Top)
        y_ui = 350
        draw_layer_bg(y_ui, layer_h, "Presentation Layer (React Frontend)")
        
        # 2. Processing Layer
        y_proc = 240
        draw_layer_bg(y_proc, layer_h, "Processing Layer (Client-Side Logic)")
        
        # 3. Intelligence Layer
        y_int = 130
        draw_layer_bg(y_int, layer_h, "Medical Intelligence Layer")
        
        # 4. Data Layer (Bottom)
        y_data = 20
        draw_layer_bg(y_data, layer_h, "Data Persistence Layer")
        
        # --- Draw Components ---
        
        # UI Components
        draw_box(40, y_ui + 30, 100, 40, "Image Capture Input", ui_color)
        draw_box(180, y_ui + 30, 120, 40, "Results Dashboard UI", ui_color)
        draw_box(340, y_ui + 30, 100, 40, "Profile Manager", ui_color)
        
        # Processing Components
        draw_box(40, y_proc + 30, 100, 40, "Digital Lens Preprocessing", proc_color)
        draw_box(180, y_proc + 30, 120, 40, "Tesseract.js OCR Engine", proc_color)
        draw_box(340, y_proc + 30, 100, 40, "Regex & Keyword Parser", proc_color)
        
        # Intelligence Components
        draw_box(40, y_int + 30, 100, 40, "Disease Prediction Model", logic_color)
        draw_box(180, y_int + 30, 120, 40, "Medical Knowledge Base", logic_color)
        draw_box(340, y_int + 30, 100, 40, "Diet Plan Generator", logic_color)
        
        # Data Components
        draw_box(180, y_data + 30, 120, 40, "Browser LocalStorage", data_color)
        draw_box(340, y_data + 30, 100, 40, "JSON Export", data_color)
        
        # --- Arrows / Flow ---
        
        # 1. User -> Capture
        # Top down to Capture box
        draw_arrow(90, y_ui + 80, 90, y_ui + 70) 
        
        # 2. Capture -> Preprocessing
        # Capture Bottom (380) -> Lens Top (310)
        draw_arrow(90, y_ui + 30, 90, y_proc + 70)
        
        # 3. Preprocessing -> OCR
        # Lens Right (140) -> OCR Left (180)
        draw_arrow(140, y_proc + 50, 180, y_proc + 50)
        
        # 4. OCR -> Regex
        # OCR Right (300) -> Regex Left (340)
        draw_arrow(300, y_proc + 50, 340, y_proc + 50)
        
        # 5. Regex -> Knowledge Base
        # Path: Regex Bottom (390, 270) -> Down to Rail (220) -> Left to KB x (240) -> Down to KB Top (200)
        draw_arrow(390, y_proc + 30, 390, y_int + 90) # Down to 220
        draw_arrow(390, y_int + 90, 240, y_int + 90) # Left to 240
        draw_arrow(240, y_int + 90, 240, y_int + 70) # Down to 200
        
        # 6. Medical Knowledge Internal Flow
        # KB (Center) feeds Prediction (Left) and Diet (Right)
        # KB Left (180, 180) -> Pred Right (140, 180)
        draw_arrow(180, y_int + 50, 140, y_int + 50)
        
        # KB Right (300, 180) -> Diet Left (340, 180)
        draw_arrow(300, y_int + 50, 340, y_int + 50)
        
        # 7. Intelligence -> Presentation (Results)
        # Path: From KB Rail (240, 220) -> Left to Far Left Channel (20) -> Up to UI Rail (360) -> Right to UI x (240) -> Up to UI Bottom (380)
        # This creates a clean loop around the left side
        draw_arrow(240, y_int + 90, 20, y_int + 90) # Left to 20
        draw_arrow(20, y_int + 90, 20, y_ui + 10)   # Up Channel
        draw_arrow(20, y_ui + 10, 240, y_ui + 10)   # Right to 240
        draw_arrow(240, y_ui + 10, 240, y_ui + 30)  # Up to Box
        
        # 8. Persistence (KB -> Storage)
        # KB Bottom (240, 160) -> Storage Top (240, 90)
        draw_arrow(240, y_int + 30, 240, y_data + 70)

        # 9. Persistence (Profile -> Storage)
        # Profile Right (440, 400) -> Far Right Channel (460) -> Down -> Left to Storage (Right 440)
        draw_arrow(440, y_ui + 50, 465, y_ui + 50) # Right out
        draw_arrow(465, y_ui + 50, 465, y_data + 70) # Down Channel
        draw_arrow(465, y_data + 70, 440, y_data + 50) # Left into Storage Box
        
        renderPDF.draw(d, self.canv, 0, 0)

def create_pdf():
    # Create PDF
    doc = SimpleDocTemplate(
        OUTPUT_FILENAME,
        pagesize=A4,
        rightMargin=0.5*inch,
        leftMargin=0.5*inch,
        topMargin=1*inch,
        bottomMargin=1*inch
    )

    elements = []
    
    # Optional: Add a title if you want, or just the diagram
    # elements.append(Spacer(1, 0.5*inch))
    
    # Draw Architecture
    # Centering it roughly
    elements.append(Spacer(1, 1*inch))
    elements.append(ArchitectureDiagram(width=480, height=450))
    
    # Build PDF
    doc.build(elements)
    print(f"PDF created successfully: {OUTPUT_FILENAME}")

if __name__ == "__main__":
    create_pdf()
