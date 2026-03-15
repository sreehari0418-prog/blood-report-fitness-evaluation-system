import math
from reportlab.lib.pagesizes import landscape, A4
from reportlab.lib import colors
from reportlab.lib.units import cm, inch
from reportlab.platypus import SimpleDocTemplate, Flowable, Spacer
from reportlab.graphics.shapes import Drawing, Rect, Line, String, Polygon, Circle, Group
from reportlab.graphics import renderPDF

OUTPUT_FILE = "Perfect_Architecture_Diagram.pdf"

class PerfectDiagram(Flowable):
    def __init__(self, width=650, height=400):
        Flowable.__init__(self)
        self.width = width
        self.height = height

    def draw(self):
        d = Drawing(self.width, self.height)
        
        # --- Theme ---
        BG_COLOR = colors.HexColor("#FFFFFF")
        LAYER_BG = colors.HexColor("#F8FAFC")
        UI_BOX = colors.HexColor("#3B82F6")  # Blue
        PROC_BOX = colors.HexColor("#10B981") # Green
        INT_BOX = colors.HexColor("#F59E0B")  # Amber/Yellow
        DATA_BOX = colors.HexColor("#8B5CF6") # Purple
        TEXT_COLOR = colors.HexColor("#1E293B")
        WHITE = colors.white
        STROKE_COLOR = colors.HexColor("#64748B")
        
        # Draw Master Background (Soft Gray)
        d.add(Rect(-50, -50, self.width + 100, self.height + 100, fillColor=WHITE, strokeWidth=0))

        def draw_layer(y, h, label, bg):
            d.add(Rect(0, y, self.width, h, fillColor=bg, strokeColor=colors.HexColor("#E2E8F0"), strokeWidth=1, rx=10, ry=10))
            d.add(String(10, y + h - 15, label, fontName='Helvetica-Bold', fontSize=10, fillColor=colors.HexColor("#94A3B8")))

        def draw_box(x, y, w, h, text, color):
            # Box with shadow
            d.add(Rect(x + 2, y - 2, w, h, fillColor=colors.HexColor("#CBD5E1"), strokeWidth=0, rx=5, ry=5))
            d.add(Rect(x, y, w, h, fillColor=color, strokeColor=color, strokeWidth=1, rx=5, ry=5))
            
            # Text
            words = text.split()
            if len(words) > 2:
                # 2-line wrap
                mid = len(words) // 2
                l1 = " ".join(words[:mid])
                l2 = " ".join(words[mid:])
                d.add(String(x + w/2, y + h/2 + 5, l1, textAnchor='middle', fontName='Helvetica-Bold', fontSize=9, fillColor=WHITE))
                d.add(String(x + w/2, y + h/2 - 7, l2, textAnchor='middle', fontName='Helvetica-Bold', fontSize=9, fillColor=WHITE))
            else:
                d.add(String(x + w/2, y + h/2 - 3, text, textAnchor='middle', fontName='Helvetica-Bold', fontSize=9, fillColor=WHITE))

        def draw_arrow(x1, y1, x2, y2, label=""):
            # Robust arrow logic with rotations
            d.add(Line(x1, y1, x2, y2, strokeColor=STROKE_COLOR, strokeWidth=1.5))
            
            # Arrowhead logic
            angle = math.atan2(y2 - y1, x2 - x1)
            arrow_len = 8
            wing_angle = math.pi / 7 # ~25 degrees
            
            x_tip1 = x2 - arrow_len * math.cos(angle - wing_angle)
            y_tip1 = y2 - arrow_len * math.sin(angle - wing_angle)
            x_tip2 = x2 - arrow_len * math.cos(angle + wing_angle)
            y_tip2 = y2 - arrow_len * math.sin(angle + wing_angle)
            
            d.add(Polygon(points=[x2, y2, x_tip1, y_tip1, x_tip2, y_tip2], fillColor=STROKE_COLOR, strokeWidth=0))
            
            if label:
                d.add(String((x1+x2)/2, (y1+y2)/2 + 5, label, textAnchor='middle', fontName='Helvetica-Oblique', fontSize=7, fillColor=colors.HexColor("#475569")))

        # --- Layout Layers ---
        y_ui = 300
        y_proc = 200
        y_int = 100
        y_data = 0
        layer_h = 85
        
        draw_layer(y_ui, layer_h, "PRESENTATION LAYER", LAYER_BG)
        draw_layer(y_proc, layer_h, "PROCESSING LAYER", LAYER_BG)
        draw_layer(y_int, layer_h, "INTELLIGENCE LAYER", LAYER_BG)
        draw_layer(y_data, layer_h, "DATA LAYER", LAYER_BG)

        # --- Draw Boxes ---
        
        # 1. UI Boxes
        draw_box(40, y_ui + 20, 110, 40, "Blood Report Upload", UI_BOX)
        draw_box(270, y_ui + 20, 110, 40, "Health Dashboard UI", UI_BOX)
        draw_box(500, y_ui + 20, 110, 40, "Chat Console", UI_BOX)
        
        # 2. Proc Boxes
        draw_box(40, y_proc + 20, 110, 40, "OCR Pipeline (Tesseract)", PROC_BOX)
        draw_box(270, y_proc + 20, 110, 40, "Table & Parameter Detector", PROC_BOX)
        draw_box(500, y_proc + 20, 110, 40, "Digital Preprocessing", PROC_BOX)
        
        # 3. Intelligence Boxes
        draw_box(40, y_int + 20, 110, 40, "Random Forest ML Model", INT_BOX)
        draw_box(270, y_int + 20, 110, 40, "Medical Knowledge Engine", INT_BOX)
        draw_box(500, y_int + 20, 110, 40, "Diet/Fitness Generator", INT_BOX)
        
        # 4. Data Boxes
        draw_box(130, y_data + 20, 110, 40, "Firebase Firestore", DATA_BOX)
        draw_box(330, y_data + 20, 110, 40, "PostgreSQL Database", DATA_BOX)
        draw_box(500, y_data + 20, 110, 40, "PDF Export Service", DATA_BOX)

        # --- Draw Connections (Perfect Arrows) ---
        
        # 1. Start: User Input -> Processing
        draw_arrow(95, y_ui + 20, 95, y_proc + 60, "Input Stream")
        
        # 2. OCR -> Table Detection
        draw_arrow(150, y_proc + 40, 270, y_proc + 40, "Raw Text")
        
        # 3. Detection -> Intelligence Engine
        draw_arrow(325, y_proc + 20, 325, y_int + 60, "Params")
        
        # 4. Intelligence Engine -> ML Classifier
        draw_arrow(270, y_int + 40, 150, y_int + 40, "Features")
        
        # 5. Engine -> Generator
        draw_arrow(380, y_int + 40, 500, y_int + 40, "Mapping")
        
        # 6. Generator -> Export
        draw_arrow(555, y_int + 20, 555, y_data + 60, "Render")
        
        # 7. Intelligence -> DB
        draw_arrow(185, y_int + 20, 185, y_data + 60, "Sync")
        draw_arrow(385, y_int + 20, 385, y_data + 60, "Log")
        
        # 8. Data Back to UI (Results)
        draw_arrow(610, y_data + 40, 630, y_data + 40) # Out
        d.add(Line(630, y_data + 40, 630, y_ui + 40, strokeColor=STROKE_COLOR, strokeWidth=1.5)) # Vertical
        draw_arrow(630, y_ui + 40, 380, y_ui + 40, "Final Analysis") # Into UI

        # 9. Feedback Loop (UI to Chat Console)
        draw_arrow(380, y_ui + 40, 500, y_ui + 40, "Context")

        # 10. User to Upload (Implicit)
        d.add(Circle(95, y_ui + 80, 8, strokeColor=STROKE_COLOR, strokeWidth=1.5))
        draw_arrow(95, y_ui + 72, 95, y_ui + 60, "Upload")

        renderPDF.draw(d, self.canv, 0, 0)

def build_pdf():
    doc = SimpleDocTemplate(OUTPUT_FILE, pagesize=landscape(A4),
                          leftMargin=0.5*inch, rightMargin=0.5*inch,
                          topMargin=0.5*inch, bottomMargin=0.5*inch)
    elements = [PerfectDiagram(width=650, height=400)]
    doc.build(elements)
    print(f"✅ Architectural Diagram created: {OUTPUT_FILE}")

if __name__ == "__main__":
    build_pdf()
